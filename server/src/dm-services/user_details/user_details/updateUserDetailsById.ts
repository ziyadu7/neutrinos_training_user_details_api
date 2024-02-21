// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class updateUserDetailsById {
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
    this.serviceName = 'updateUserDetailsById';
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
      instance = new updateUserDetailsById(
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
    //appendnew_flow_updateUserDetailsById_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateUserDetailsById');
    //appendnew_flow_updateUserDetailsById_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateUserDetailsById');

    this.app['post'](
      `${this.serviceBasePath}/dm/user_details/user_details/update-by-id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
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
          bh = await this.___addToBh___(bh, parentSpanInst);
          //appendnew_next_sd_Rv4kjRulVI3x4kSi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Rv4kjRulVI3x4kSi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateUserDetailsById_HttpIn
  }
  //   service flows_updateUserDetailsById

  //appendnew_flow_updateUserDetailsById_start

  async ___addToBh___(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      '___addToBh___',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'user_details');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FDbjNXkSFwPpoKmy(bh, parentSpanInst);
      //appendnew_next____addToBh___
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        '___addToBh___',
        spanInst,
        '___addToBh___'
      );
    }
  }

  async sd_FDbjNXkSFwPpoKmy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FDbjNXkSFwPpoKmy',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_0MpEPLPhEvkKRNun');
      bh.result = await dmUtilsInst.updateById(
        '_EN_ga5r31ylxl',
        bh.input.body.user_details
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_FDbjNXkSFwPpoKmy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        '__operationNode__',
        spanInst,
        'sd_FDbjNXkSFwPpoKmy'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, '__httpOutResult__');
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
  //appendnew_flow_updateUserDetailsById_Catch
}
