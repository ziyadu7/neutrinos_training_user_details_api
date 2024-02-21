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

  async editDetails(
    parentSpanInst,
    data: any = undefined,
    response: any = undefined,
    file: any = undefined,
    isNumberChange: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'editDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
        response,
        file,
        isNumberChange,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkingFile(bh, parentSpanInst);
      //appendnew_next_editDetails
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
        'sd_QHfw4QI3uTeWSHt5',
        spanInst,
        'editDetails'
      );
    }
  }
  //appendnew_flow_service_start

  async checkingFile(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkingFile',
      parentSpanInst
    );
    try {
      console.log(bh.input.file, 'file consoling');
      bh.input.file = bh.input?.file ? bh.input?.file : null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QMpf9c6nIqwUkROx(bh, parentSpanInst);
      //appendnew_next_checkingFile
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m3nxgNBys7LhLMGy',
        spanInst,
        'checkingFile'
      );
    }
  }

  async sd_QMpf9c6nIqwUkROx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QMpf9c6nIqwUkROx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.file,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PXLhZzgF4sFQMhmA(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.input.file,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_SwSYM5ZA264b3uj9(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QMpf9c6nIqwUkROx',
        spanInst,
        'sd_QMpf9c6nIqwUkROx'
      );
    }
  }

  async sd_PXLhZzgF4sFQMhmA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PXLhZzgF4sFQMhmA',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.isNumberChange,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_LGdSJEER5nk9lleR(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.isNumberChange,
          'false',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7W50FBO0ZKOtPF1J(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PXLhZzgF4sFQMhmA',
        spanInst,
        'sd_PXLhZzgF4sFQMhmA'
      );
    }
  }

  async sd_LGdSJEER5nk9lleR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LGdSJEER5nk9lleR',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const mime = require('mime-types');
      const cloudinary = require('cloudinary').v2;

      let cloud_name = process.env.CLOUDNAME;
      let api_key = process.env.CLOUD_API;
      let api_secret = process.env.CLOUD_SECRET;

      cloudinary.config({
        cloud_name,
        api_key,
        api_secret,
      });

      const file = bh?.input?.file;
      if (file) {
        bh.local.file = '';
        const mimeType = mime.lookup(file.originalname);
        console.log(mimeType, 'mimetype');
        if (
          mimeType &&
          (mimeType.includes('image/') || mimeType.includes('application/pdf'))
        ) {
          const upload = await cloudinary.uploader.upload(file.path);
          bh.local.file = upload.secure_url;
          if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
        }
      }

      console.log(bh.local.file, 'consoling file after cloudinary');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Vkptvhzed7xsWlwu(bh, parentSpanInst);
      //appendnew_next_sd_LGdSJEER5nk9lleR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LGdSJEER5nk9lleR',
        spanInst,
        'sd_LGdSJEER5nk9lleR'
      );
    }
  }

  async sd_Vkptvhzed7xsWlwu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vkptvhzed7xsWlwu',
      parentSpanInst
    );
    try {
      bh.local.insertQuery = `UPDATE "public"."user_details"
SET "name" = $1, "email" = $2, "file" = $3, "sex" = $4, "details" = $5, "phone" = $6
WHERE "id" = $7
RETURNING "id";`;
      bh.local.insertValues = [
        bh?.input?.data?.name,
        bh?.input?.data?.email,
        bh?.local?.file,
        bh.input?.data?.sex,
        bh?.input?.data?.details,
        bh?.input?.data?.phone,
        bh?.input?.data?.id,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_urpZRm0a4Hwc4075(bh, parentSpanInst);
      //appendnew_next_sd_Vkptvhzed7xsWlwu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vkptvhzed7xsWlwu',
        spanInst,
        'sd_Vkptvhzed7xsWlwu'
      );
    }
  }

  async sd_urpZRm0a4Hwc4075(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_urpZRm0a4Hwc4075',
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
      bh = await this.sd_KQPiJrlbWq81VvVt(bh, parentSpanInst);
      //appendnew_next_sd_urpZRm0a4Hwc4075
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_urpZRm0a4Hwc4075',
        spanInst,
        'sd_urpZRm0a4Hwc4075'
      );
    }
  }

  async sd_KQPiJrlbWq81VvVt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KQPiJrlbWq81VvVt',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'result consoling after adding');
      bh.input.response = {
        statusCode: 200,
        message: 'Data updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_KQPiJrlbWq81VvVt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KQPiJrlbWq81VvVt',
        spanInst,
        'sd_KQPiJrlbWq81VvVt'
      );
    }
  }

  async sd_7W50FBO0ZKOtPF1J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7W50FBO0ZKOtPF1J',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const mime = require('mime-types');
      const cloudinary = require('cloudinary').v2;

      let cloud_name = process.env.CLOUDNAME;
      let api_key = process.env.CLOUD_API;
      let api_secret = process.env.CLOUD_SECRET;

      cloudinary.config({
        cloud_name,
        api_key,
        api_secret,
      });

      const file = bh?.input?.file;
      if (file) {
        bh.local.file = '';
        const mimeType = mime.lookup(file.originalname);
        console.log(mimeType, 'mimetype');
        if (
          mimeType &&
          (mimeType.includes('image/') || mimeType.includes('application/pdf'))
        ) {
          const upload = await cloudinary.uploader.upload(file.path);
          bh.local.file = upload.secure_url;
          if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
        }
      }

      console.log(bh.local.file, 'consoling file after cloudinary');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fxNgPCpeeFi055EE(bh, parentSpanInst);
      //appendnew_next_sd_7W50FBO0ZKOtPF1J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7W50FBO0ZKOtPF1J',
        spanInst,
        'sd_7W50FBO0ZKOtPF1J'
      );
    }
  }

  async sd_fxNgPCpeeFi055EE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fxNgPCpeeFi055EE',
      parentSpanInst
    );
    try {
      bh.local.insertQuery = `UPDATE "public"."user_details"
SET "name" = $1, "email" = $2, "file" = $3, "sex" = $4, "details" = $5
WHERE "id" = $6
RETURNING "id";`;
      bh.local.insertValues = [
        bh?.input?.data?.name,
        bh?.input?.data?.email,
        bh?.local?.file,
        bh.input?.data?.sex,
        bh?.input?.data?.details,
        bh?.input?.data?.id,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ssC8uDKGFQfAHKi4(bh, parentSpanInst);
      //appendnew_next_sd_fxNgPCpeeFi055EE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fxNgPCpeeFi055EE',
        spanInst,
        'sd_fxNgPCpeeFi055EE'
      );
    }
  }

  async sd_ssC8uDKGFQfAHKi4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ssC8uDKGFQfAHKi4',
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
      bh = await this.sd_R7K2cEcA6pqbW0Op(bh, parentSpanInst);
      //appendnew_next_sd_ssC8uDKGFQfAHKi4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ssC8uDKGFQfAHKi4',
        spanInst,
        'sd_ssC8uDKGFQfAHKi4'
      );
    }
  }

  async sd_R7K2cEcA6pqbW0Op(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R7K2cEcA6pqbW0Op',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'result consoling after adding');
      bh.input.response = {
        statusCode: 200,
        message: 'Data updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_R7K2cEcA6pqbW0Op
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R7K2cEcA6pqbW0Op',
        spanInst,
        'sd_R7K2cEcA6pqbW0Op'
      );
    }
  }

  async sd_SwSYM5ZA264b3uj9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SwSYM5ZA264b3uj9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.isNumberChange,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_w3CfeNQZSIzX9jzV(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.isNumberChange,
          'false',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UUaGoO2wPwwJTGPl(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SwSYM5ZA264b3uj9',
        spanInst,
        'sd_SwSYM5ZA264b3uj9'
      );
    }
  }

  async sd_w3CfeNQZSIzX9jzV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w3CfeNQZSIzX9jzV',
      parentSpanInst
    );
    try {
      bh.local.insertQuery = `UPDATE "public"."user_details"
SET "name" = $1, "email" = $2, "sex" = $3, "details" = $4, "phone" = $5
WHERE "id" = $6
RETURNING "id";`;
      bh.local.insertValues = [
        bh?.input?.data?.name,
        bh?.input?.data?.email,
        bh.input?.data?.sex,
        bh?.input?.data?.details,
        bh?.input?.data?.phone,
        bh?.input?.data?.id,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fHJNbNaT5eNwMDBS(bh, parentSpanInst);
      //appendnew_next_sd_w3CfeNQZSIzX9jzV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w3CfeNQZSIzX9jzV',
        spanInst,
        'sd_w3CfeNQZSIzX9jzV'
      );
    }
  }

  async sd_fHJNbNaT5eNwMDBS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fHJNbNaT5eNwMDBS',
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
      bh = await this.sd_DuWnQiC8gsBrmKgk(bh, parentSpanInst);
      //appendnew_next_sd_fHJNbNaT5eNwMDBS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fHJNbNaT5eNwMDBS',
        spanInst,
        'sd_fHJNbNaT5eNwMDBS'
      );
    }
  }

  async sd_DuWnQiC8gsBrmKgk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DuWnQiC8gsBrmKgk',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'result consoling after adding');
      bh.input.response = {
        statusCode: 200,
        message: 'Data updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DuWnQiC8gsBrmKgk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DuWnQiC8gsBrmKgk',
        spanInst,
        'sd_DuWnQiC8gsBrmKgk'
      );
    }
  }

  async sd_UUaGoO2wPwwJTGPl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UUaGoO2wPwwJTGPl',
      parentSpanInst
    );
    try {
      bh.local.insertQuery = `UPDATE "public"."user_details"
SET "name" = $1, "email" = $2,"sex" = $3, "details" = $4
WHERE "id" = $5
RETURNING "id";`;
      bh.local.insertValues = [
        bh?.input?.data?.name,
        bh?.input?.data?.email,
        bh.input?.data?.sex,
        bh?.input?.data?.details,
        bh?.input?.data?.id,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RSJN5dnKeudn9xCq(bh, parentSpanInst);
      //appendnew_next_sd_UUaGoO2wPwwJTGPl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UUaGoO2wPwwJTGPl',
        spanInst,
        'sd_UUaGoO2wPwwJTGPl'
      );
    }
  }

  async sd_RSJN5dnKeudn9xCq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RSJN5dnKeudn9xCq',
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
      bh = await this.sd_3vXB75jitxX0bg4Z(bh, parentSpanInst);
      //appendnew_next_sd_RSJN5dnKeudn9xCq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RSJN5dnKeudn9xCq',
        spanInst,
        'sd_RSJN5dnKeudn9xCq'
      );
    }
  }

  async sd_3vXB75jitxX0bg4Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3vXB75jitxX0bg4Z',
      parentSpanInst
    );
    try {
      bh.input.response = {
        statusCode: 200,
        message: 'Data updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3vXB75jitxX0bg4Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3vXB75jitxX0bg4Z',
        spanInst,
        'sd_3vXB75jitxX0bg4Z'
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
