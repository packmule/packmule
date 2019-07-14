import YeomanGenerator from 'yeoman-generator';

export default class Generator extends YeomanGenerator {
    private properties: any = {};
    private settings: YeomanGenerator.Answers;

    public constructor(args: string|string[], options: any) {
        super(args, options);

        this.option('module', {
            alias: 'm',
            type: String,
            description: 'Name of the module.',
        });
    }

    public initializing(): void {
        const definition = this.fs.readJSON(this.destinationPath('package.json'), {});

        this.properties.module = this.options.module || definition.name;
    };

    public async prompting(): Promise<void> {
        this.settings = await this.prompt([
            {
                type: 'input',
                name: 'module.name',
                message: 'Define the module name of the pack.',
                when: !this.options.module,
                default: this.properties.module,
            },
        ]);
    }

    public writing() {
        this.fs.copyTpl(this.templatePath('pack.ts.ejs'), this.destinationPath('src/pack.ts'), this.settings);
    };
};
