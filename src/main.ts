import Controller from './controller';

class NxtReaderCore {
  version: string = "1.0.0"

  instance: Controller = null

  components: any = {}

  constructor() {
    
  }

  use(name:string, component: object) {
    this.components[name] = component;
  }

  init() {
    this.instance = new Controller(this.components);
  }

  getVersion() {
    return {
      controller: this.instance.getVersion()
    }
  }
}

export { NxtReaderCore } ; 
