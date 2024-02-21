// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFg from './service'; //_splitter_
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

    this.app['get'](
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
          bh = await this.sd_PXbutp7jkygRZJ6G(bh, parentSpanInst);
          //appendnew_next_sd_CrngHBf2Ei8rafNX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CrngHBf2Ei8rafNX');
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

  async sd_PXbutp7jkygRZJ6G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PXbutp7jkygRZJ6G',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.query.id,
          'false',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_TMEUgepvcoH1FLF5(bh, parentSpanInst);
      } else if (
        this.sdService.operators['neq'](
          bh.input.query.id,
          'false',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jXCt5FNAqmddTZD9(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PXbutp7jkygRZJ6G',
        spanInst,
        'sd_PXbutp7jkygRZJ6G'
      );
    }
  }

  async sd_TMEUgepvcoH1FLF5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TMEUgepvcoH1FLF5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFgInstance: SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFg.service =
        SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFg.service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFgInstance.sd_T1KoWAHFNOdeyiWH(
          spanInst,
          undefined
        );
      bh.local.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseSetting(bh, parentSpanInst);
      //appendnew_next_sd_TMEUgepvcoH1FLF5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TMEUgepvcoH1FLF5',
        spanInst,
        'sd_TMEUgepvcoH1FLF5'
      );
    }
  }

  async responseSetting(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseSetting',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'find result showing');
      bh.local.response = {
        statusCode: 200,
        message: 'data fetch successfully',
        data: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VvOnQTgS5sQnroge(bh, parentSpanInst);
      //appendnew_next_responseSetting
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zVvWtkxs3H6oKZXg',
        spanInst,
        'responseSetting'
      );
    }
  }

  async sd_VvOnQTgS5sQnroge(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VvOnQTgS5sQnroge');
    }
  }

  async sd_jXCt5FNAqmddTZD9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jXCt5FNAqmddTZD9',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFgInstance: SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFg.service =
        SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFg.service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_xb79SlU6dA3AjWFgInstance.fetchOneData(
          spanInst,
          undefined,
          bh.input.query.id
        );
      bh.local.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.responseSetting(bh, parentSpanInst);
      //appendnew_next_sd_jXCt5FNAqmddTZD9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jXCt5FNAqmddTZD9',
        spanInst,
        'sd_jXCt5FNAqmddTZD9'
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
  //appendnew_flow_api_Catch
}
