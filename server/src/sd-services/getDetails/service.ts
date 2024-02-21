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

  async sd_T1KoWAHFNOdeyiWH(
    parentSpanInst,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sd_T1KoWAHFNOdeyiWH',
      parentSpanInst
    );
    let bh: any = {
      input: {
        result,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dbQueryScript(bh, parentSpanInst);
      //appendnew_next_sd_T1KoWAHFNOdeyiWH
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
        'sd_T1KoWAHFNOdeyiWH',
        spanInst,
        'sd_T1KoWAHFNOdeyiWH'
      );
    }
  }

  async fetchOneData(
    parentSpanInst,
    result: any = undefined,
    id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fetchOneData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        result,
        id,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.dbQueryScriptFetchOneData(bh, parentSpanInst);
      //appendnew_next_fetchOneData
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
        'sd_Nk8hdp8AYPjW25b8',
        spanInst,
        'fetchOneData'
      );
    }
  }
  //appendnew_flow_service_start

  async dbQueryScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dbQueryScript',
      parentSpanInst
    );
    try {
      bh.local.selectQuery =
        'SELECT name,email,phone,id FROM public.user_details;';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GWrxckAoSpsWhbB7(bh, parentSpanInst);
      //appendnew_next_dbQueryScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GQ8vUDaHVvoX3Cwt',
        spanInst,
        'dbQueryScript'
      );
    }
  }

  async sd_GWrxckAoSpsWhbB7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GWrxckAoSpsWhbB7',
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
      let params = [];
      params = params ? params : [];
      bh.input.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.selectQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GWrxckAoSpsWhbB7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GWrxckAoSpsWhbB7',
        spanInst,
        'sd_GWrxckAoSpsWhbB7'
      );
    }
  }

  async dbQueryScriptFetchOneData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'dbQueryScriptFetchOneData',
      parentSpanInst
    );
    try {
      bh.local.selectQuery = `SELECT * FROM public.user_details WHERE id=${bh.input.id};`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pkHoHvyLHLeDAItx(bh, parentSpanInst);
      //appendnew_next_dbQueryScriptFetchOneData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RCZEdlK5ShxvRdmp',
        spanInst,
        'dbQueryScriptFetchOneData'
      );
    }
  }

  async sd_pkHoHvyLHLeDAItx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pkHoHvyLHLeDAItx',
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
      let params = [];
      params = params ? params : [];
      bh.input.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.selectQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_pkHoHvyLHLeDAItx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pkHoHvyLHLeDAItx',
        spanInst,
        'sd_pkHoHvyLHLeDAItx'
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
