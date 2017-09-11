
export interface ModuleDecorator {
    services: Array<any>;
}

function CreatableModule(filter: ModuleDecorator) {
    return (target: Object) => {

        
    }
}


@CreatableModule({services: [AppConfiguration]})
export class StartupModule {
    
    constructor() {
        
    }


}
