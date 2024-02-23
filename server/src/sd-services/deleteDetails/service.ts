// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: service');
    //appendnew_flow_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: service');
    //appendnew_flow_service_HttpIn
  }
  //   service flows_service

  async sd_fILth13j7D0AGsHk(
    parentSpanInst,
    id: any = undefined,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sd_fILth13j7D0AGsHk',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
        result,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7zcoa3t2jlUFiL4Z(bh, parentSpanInst);
      //appendnew_next_sd_fILth13j7D0AGsHk
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fILth13j7D0AGsHk',
        spanInst,
        'sd_fILth13j7D0AGsHk'
      );
    }
  }
  //appendnew_flow_service_start

  async sd_7zcoa3t2jlUFiL4Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7zcoa3t2jlUFiL4Z',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_0MpEPLPhEvkKRNun');
      bh.local.response = await dmUtilsInst.delete(
        '_EN_ga5r31ylxl',
        bh.input.id
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.settingResponse(bh, parentSpanInst);
      //appendnew_next_sd_7zcoa3t2jlUFiL4Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7zcoa3t2jlUFiL4Z',
        spanInst,
        'sd_7zcoa3t2jlUFiL4Z'
      );
    }
  }

  async settingResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'settingResponse',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);
      bh.input.result = {
        statusCode: 200,
        message: 'Data deleted successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_settingResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7b9qxYfDvS7hAK9i',
        spanInst,
        'settingResponse'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_service_Catch
}
