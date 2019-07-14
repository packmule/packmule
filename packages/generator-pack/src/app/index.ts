import YeomanGenerator from 'yeoman-generator';
import slugify from '@sindresorhus/slugify';

export default class Generator extends YeomanGenerator {
    private properties: any = {};
    private settings: YeomanGenerator.Answers;

    public constructor(args: string|string[], options: {}) {
        super(args, options);

        this.option('name', {
            alias: 'n',
            type: String,
            description: 'Name of the project.',
        });

        this.option('description', {
            alias: 'd',
            type: String,
            description: 'Short description of the project.',
        });

        this.option('publish', {
            alias: 'p',
            type: Boolean,
            description: 'Whether to configure the package to be published or not.',
        });

        this.composeWith('@packmule/pack:pack', {});
    }

    public initializing(): void {
        const definition = this.fs.readJSON(this.destinationPath('package.json'), {});

        this.properties.name = this.options.name || definition.name || this.appname;
        this.properties.description = this.options.description || definition.description || null;
        this.properties.publish = this.options.publish || !definition.private;
    };

    public async prompting(): Promise<void> {
        this.settings = await this.prompt([
            {
                type: 'input',
                name: 'project.name',
                message: 'Feel free to name your project.',
                when: !this.options.name,
                default: this.properties.name,
            },
            {
                type: 'input',
                name: 'package.name',
                message: 'Please provide a package name.',
                default: (answers) => {
                    return slugify(answers.project.name);
                },
            },
            {
                type: 'input',
                name: 'package.description',
                message: 'Please provide a short project description.',
                when: !this.options.description,
                default: () => {
                    return this.properties.description;
                },
            },
            {
                type: 'confirm',
                name: 'package.publish',
                message: 'Are you planning on publishing the package?',
                when: !this.options.publish,
                default: () => {
                    return this.properties.publish;
                },
            }
        ]);
    }

    public configuring(): void {
        this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
        this.fs.copy(this.templatePath('_npmrc'), this.destinationPath('.npmrc'));
        this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));

        this.fs.copyTpl(this.templatePath('package.json.ejs'), this.destinationPath('package.json'), this.settings);
        this.fs.copyTpl(this.templatePath('README.md.ejs'), this.destinationPath('README.md'), this.settings);
    }

    public install(): void {
        this.installDependencies({
            bower: false,
        });
    };
};
