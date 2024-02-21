// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
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

  async addDetails(
    parentSpanInst,
    data: any = undefined,
    response: any = undefined,
    file: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'addDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
        response,
        file,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aiC3OfHzLvLGTfbL(bh, parentSpanInst);
      //appendnew_next_addDetails
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_doF8fRrVEGB3MlOy',
        spanInst,
        'addDetails'
      );
    }
  }
  //appendnew_flow_service_start

  async sd_aiC3OfHzLvLGTfbL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aiC3OfHzLvLGTfbL',
      parentSpanInst
    );
    try {
      bh.local.insertQuery = `INSERT INTO "public"."user_details"("name", "phone", "email", "file", "details") VALUES ($1, $2, $3, $4, $5) RETURNING "id";`;
      console.log([bh?.input?.file], bh?.input?.data?.details);
      bh.local.insertValues = [
        bh?.input?.data?.name,
        bh?.input?.data?.phone,
        bh?.input?.data?.email,
        [bh?.input?.file],
        bh?.input?.data?.details,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pj5zd9GdNJ97rqXQ(bh, parentSpanInst);
      //appendnew_next_sd_aiC3OfHzLvLGTfbL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aiC3OfHzLvLGTfbL',
        spanInst,
        'sd_aiC3OfHzLvLGTfbL'
      );
    }
  }

  async sd_pj5zd9GdNJ97rqXQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pj5zd9GdNJ97rqXQ',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_0MpEPLPhEvkKRNun'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.insertValues;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.insertQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A1SudyGfHtEDRAKD(bh, parentSpanInst);
      //appendnew_next_sd_pj5zd9GdNJ97rqXQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pj5zd9GdNJ97rqXQ',
        spanInst,
        'sd_pj5zd9GdNJ97rqXQ'
      );
    }
  }

  async sd_A1SudyGfHtEDRAKD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A1SudyGfHtEDRAKD',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'result consoling after adding');
      bh.input.response = {
        statusCode: 200,
        message: 'Data add successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_A1SudyGfHtEDRAKD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A1SudyGfHtEDRAKD',
        spanInst,
        'sd_A1SudyGfHtEDRAKD'
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
