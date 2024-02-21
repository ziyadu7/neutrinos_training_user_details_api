// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Ao6nf8kLJlagcj6a from './service'; //_splitter_
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

    this.app['put'](
      `${this.serviceBasePath}/details`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: (os.tmpdir() + '').replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          //appendnew_next_sd_CyLrW9zNY0dyYNXR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CyLrW9zNY0dyYNXR');
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
      if (bh.input.body?.details) {
        bh.input.body.details = JSON.parse(bh?.input?.body?.details);
      }

      bh.input.file = bh.input?.files?.file?.[0];

      console.log(bh.input.body);

      if (
        bh.input.body?.name?.trim().length == 0 ||
        bh.input.body?.email?.trim().length == 0 ||
        bh.input.body?.phone?.trim().length == 0
      ) {
        throw {
          statusCode: 400,
          message: 'Fill all the required fields',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cLPbsxra4UiEcuVx(bh, parentSpanInst);
      //appendnew_next_validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nXNsLKZi3BV8Iiui',
        spanInst,
        'validation'
      );
    }
  }

  async sd_cLPbsxra4UiEcuVx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cLPbsxra4UiEcuVx',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Ao6nf8kLJlagcj6aInstance: SSD_SERVICE_ID_sd_Ao6nf8kLJlagcj6a.service =
        SSD_SERVICE_ID_sd_Ao6nf8kLJlagcj6a.service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Ao6nf8kLJlagcj6aInstance.editDetails(
          spanInst,
          bh.input.body,
          undefined,
          bh.input.file,
          bh.input.query.isNumberChange
        );
      bh.local.response = outputVariables.input.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_3apzmMf0IORrSCtm(bh, parentSpanInst);
      //appendnew_next_sd_cLPbsxra4UiEcuVx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cLPbsxra4UiEcuVx',
        spanInst,
        'sd_cLPbsxra4UiEcuVx'
      );
    }
  }

  async sd_3apzmMf0IORrSCtm(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3apzmMf0IORrSCtm');
    }
  }

  async sd_gWXdqdf6DihRpyr9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.error.statusCode).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gWXdqdf6DihRpyr9');
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
      (await this.sd_4x1Rx7MWFCSOJAxF(bh, parentSpanInst))
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
  async sd_4x1Rx7MWFCSOJAxF(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_gWXdqdf6DihRpyr9'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_gWXdqdf6DihRpyr9(bh, parentSpanInst);
    //appendnew_next_sd_4x1Rx7MWFCSOJAxF
    return true;
  }
  //appendnew_flow_api_Catch
}
