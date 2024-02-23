// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_uZYDxExOFC3Mj6Xr from './service'; //_splitter_
//append_imports_end
export class api {
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
    this.serviceName = 'api';
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
      instance = new api(
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
    //appendnew_flow_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');
    //appendnew_flow_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

    this.app['delete'](
      `${this.serviceBasePath}/details`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.validation(bh, parentSpanInst);
          //appendnew_next_sd_XgAUfQJHoNlYhOHt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XgAUfQJHoNlYhOHt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  //appendnew_flow_api_start

  async validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validation',
      parentSpanInst
    );
    try {
      const id = bh.input.query?.id;
      console.log(bh.input.query);
      if (id == undefined) {
        throw {
          statusCode: 400,
          message: 'Id not found in query',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callingDeleteService(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VFNOkoLP6HEIa2Je',
        spanInst,
        'validation'
      );
    }
  }

  async callingDeleteService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callingDeleteService',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_uZYDxExOFC3Mj6XrInstance: SSD_SERVICE_ID_sd_uZYDxExOFC3Mj6Xr.service =
        SSD_SERVICE_ID_sd_uZYDxExOFC3Mj6Xr.service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_uZYDxExOFC3Mj6XrInstance.sd_fILth13j7D0AGsHk(
          spanInst,
          bh.input.query.id,
          undefined
        );
      bh.local.response = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_NoE2jKFv57XNPaUj(bh, parentSpanInst);
      //appendnew_next_callingDeleteService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hbxdYDXaB0t2HASJ',
        spanInst,
        'callingDeleteService'
      );
    }
  }

  async sd_NoE2jKFv57XNPaUj(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NoE2jKFv57XNPaUj');
    }
  }

  async sd_GhK9xREWbAc7hexV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.error.statusCode).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GhK9xREWbAc7hexV');
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
    if (
      false ||
      (await this.sd_gzeBicgpryxdzc8k(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_gzeBicgpryxdzc8k(bh, parentSpanInst) {
    const nodes = ['sd_VFNOkoLP6HEIa2Je'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_GhK9xREWbAc7hexV(bh, parentSpanInst);
      //appendnew_next_sd_gzeBicgpryxdzc8k
      return true;
    }
    return false;
  }
  //appendnew_flow_api_Catch
}
