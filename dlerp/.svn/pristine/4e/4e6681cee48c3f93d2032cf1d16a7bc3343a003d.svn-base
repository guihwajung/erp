/**
*  컨설팅 표준화 작업
*  @FileName 	Transaction.xfdl
*  @Creator 	consulting
*  @CreateDate 	2017.10.17
*  @Desction         서비스 호출 및 콜백처리
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.10.17     	consulting       	        주석 정비
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
 * @param {String} strSvcId - 서비스 ID
 * @param {String} strSvcType - 서비스 호출 Type (select, grd, save ..)
 * @param {String} [inData]	- input Dataset list("입력ID=DataSet ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [outData] - output Dataset list("DataSet ID=출력ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [strArg]	- 서비스 호출시 Agrgument
 * @param {String} [callBackFnc] - 콜백 함수명
 * @param {Boolean} [isAsync] - 비동기통신 여부 
 * @return N/A
 * @example
 * var strSvcUrl = "transactionSaveTest.do";
 * var inData    = "dsList=dsList:U";
 * var outData   = "dsList=dsList";
 * var strArg    = "";
 * this.gfnTransaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
 */ 
pForm.gfnTransaction = function(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, isAsync, nHttpTimeOut)
{
	if (this.gfnIsNull(strSvcId) || this.gfnIsNull(strSvcType))
	{
		trace("Error : gfnTransaction() 함수의 인자값이 부족합니다.");
		return false;
	}

	if (this.gfnIsNull(nHttpTimeOut))
	{
		nHttpTimeOut = 1800;
	}
	
	nexacro.getEnvironment().set_httptimeout(nHttpTimeOut);
	
	if (this.gfnIsNull(strArg)) {
		strArg = "SENDTIME="+Date.now();
	} else {
		strArg += " SENDTIME="+Date.now();
	}
	if (this["FormInfo"] != undefined) {
		strArg += " ID_FORM=" + this["FormInfo"].ID_FORM;
		strArg += " NM_FORM=" + this["FormInfo"].NM_FORM;
	}
	
	// select로 통합
	if (strSvcType == "grid") {
		strSvcType = "select";
	}
	
	if (!this.gfnIsNull(inProc)) {
		inData += " dsProc=" + inProc;
	
		var dssp = this[inProc];
		if(dssp != null) {
			if(dssp.colinfos["SCHEMA"] == null) {
				dssp.addColumn("SCHEMA", "string");
			}
		}

		if (nexacro.getEnvironmentVariable("evRunMode") != "2" && strSvcId != "codefind" && strSvcId != "codefindselect" && !strSvcType.startsWith("sap")) {
			this._gfnCheckFormInfo(inProc);
		}
	}
	
	var strSvcUrl = (strSvcType.indexOf('/') > -1 ? "" : (strSvcType == "login" || strSvcType == "loginInfo" || strSvcType == "user" || strSvcType == "authenticate" || strSvcType == "password" || nexacro.getEnvironmentVariable("evQuikViewLocal") == "Y" ? "auth/" : "service/")) + strSvcType + ".do";
	if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
		strSvcUrl = nexacro.getEnvironmentVariable("evContextPath") + strSvcUrl;
	}
	
	// fnCallback 함수 기본값 설정
	if (this.gfnIsNull(callBackFnc)) callBackFnc = "fnCallback";
	
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();

	// Async
	if ((isAsync != true) && (isAsync != false)) isAsync = true;	
	
	// 1. callback에서 처리할 서비스 정보 저장
	var objSvcID = { 
			svcId     : strSvcId,
			svcUrl    : strSvcUrl,
			callback  : callBackFnc,
			isAsync   : isAsync,
			startDate : sStartDate,
			startTime : nStartTime,
			args	  : strArg,
			output	  : outData
	};
	
	var newDate = new Date();
	newDate.setMinutes(newDate.getMinutes() - 15);
	if(nexacro.getEnvironmentVariable("LAST-DATE-TOKEN") < newDate) {
		this["rfToken"] = "";
		strArg += " refresh=1";
	}
	
	// 2. strServiceUrl
	var strServiceUrl = "svcUrl::" + strSvcUrl;
	
	// 3. strArg
	var strArguments = "";
	if (this.gfnIsNull(strArg)) {
		strArguments = "";
	}
	else { 
		strArguments = strArg;
	}

	// 개발시에는 xml, 개발서버/운영서버는 SSV로 통신
	var nDataType;	
	if (nexacro.getEnvironmentVariable("evRunMode") == "2" || strSvcType == "login" || strSvcType == "loginInfo" || strSvcType == "user") 
	{
		nDataType = 2;
	}
	else {
		nDataType = 0;
	}
	
	this._gfnTransactionInfoStart(strSvcId, strSvcType, inData, isAsync);
	
	this.transaction( JSON.stringify(objSvcID)  //1.svcID
					, strServiceUrl             //2.strServiceUrl
					, inData                    //3.inDataSet
					, outData                   //4.outDataSet
					, strArguments              //5.arguments
					, "gfnCallback"				//6.strCallbackFunc
					, isAsync                   //7.bAsync
					, nDataType                 //8.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                   //9.bCompress ( default : false ) 
	
	
	this._gfnTransactionLog(nDataType, inProc, inData);
};

pForm.gfnTransactionJsonP = function(strSvcId, strSvcUrl, strArg, callBackFnc, isAsync)
{
	if (this.gfnIsNull(strSvcId))
	{
		trace("Error : gfnTransaction() 함수의 인자값이 부족합니다.");
		return false;
	}
	
	if (system.navigatorname == "nexacro") {
		strArg += "&callback=JSON";
		callBackFnc += "JSON";
	} else {
		var obj_win_id = "JSON_CUR_FORM_" + strSvcId;
		window[obj_win_id] = this;
		strArg = encodeURI(strArg);
		strArg += "&callback=window." + obj_win_id + "." + callBackFnc;
	}
	
	var strJsonUrl = strSvcUrl + "?" + strArg;
	
	// fnCallback 함수 기본값 설정
	if (this.gfnIsNull(callBackFnc)) callBackFnc = "fnCallback";
	
	// Async
	if ((isAsync != true) && (isAsync != false)) isAsync = true;	
	
	// 1. callback에서 처리할 서비스 정보 저장
	var objSvcID = { 
			svcId     : strSvcId,
			svcUrl    : strJsonUrl,
			callback  : callBackFnc,
			isAsync   : isAsync
	};
	
	// 개발시에는 xml, 개발서버/운영서버는 SSV로 통신
	var nDataType;	
	if (nexacro.getEnvironmentVariable("evRunMode") == "2") 
	{
		nDataType = 2;
	}
	else {
		nDataType = 0;
	}
	
	if (system.navigatorname == "nexacro") {
		this.transaction( JSON.stringify(objSvcID)  //1.svcID
						, strJsonUrl             //2.strServiceUrl
						, ""                    //3.inDataSet
						, ""                   //4.outDataSet
						, strArg              //5.arguments
						, "gfnCallback"				//6.strCallbackFunc
						, isAsync                   //7.bAsync
						, nDataType                 //8.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
						, false);                   //9.bCompress ( default : false ) 
	}
	else {
		var script = document.createElement('script');
		script.src = strJsonUrl;

		document.getElementsByTagName('head')[0].appendChild(script);
	}
};

/**
 * @class 공통 Callback 함수 <br>
 * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
 * @param {String} svcID - 서비스 ID
 * @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
 * @param {String} [errorMsg] - 에러메시지
 * @return N/A
 */
pForm.gfnCallback = function(svcID,errorCode,errorMsg)
{
	var objSvcID = JSON.parse(svcID);
	
	this._gfnTransactionInfoCheck(objSvcID);
	
	// 에러 공통 처리
	if(errorCode != 0)
	{
		switch(errorCode)
		{
			case -1 :				
				var arrError = (""+errorMsg).split("Query is");
				// 유저에게 서버 에러 메세지 보여주지 않음. 서버오류 메세지로 대체
				// 서버 오류입니다.\n관리자에게 문의하세요.
				this.gfnAlert("msg.server.error");
				if(!objSvcID.callback.endsWith("Force")) {
					this._gfnTransactionInfoEnd();
					return;
				}
				break;
			case -1000:
				// 로그인실패
				var arrError = [errorMsg];
				this.gfnAlert("msg.login.error", arrError);
				return;
				break;
				
			case -8000:
				// SQL 에러
				var arrError = [errorMsg];
				this.gfnAlert("msg.server.error.msg", arrError);
				if(!objSvcID.callback.endsWith("Force")) {
					this._gfnTransactionInfoEnd();
					return;
				}
				break;
				
			case -9000:
			case -9001:
				// 유저에게 서버 에러 메세지 보여주고자 할때 사용.
				var arrError = [errorMsg];
				this.gfnAlert("msg.server.error.msg", arrError);
				if(!objSvcID.callback.endsWith("Force")) {
					this._gfnTransactionInfoEnd();
					return;
				}
				break;
				
			case -10000:
				//  사용자가 없음
				var arrError = [errorMsg];
				this.gfnAlert("msg.password.user", arrError);
				if(!objSvcID.callback.endsWith("Force")) {
					this._gfnTransactionInfoEnd();
					return;
				}
				break;
				
			case -10010:
				// 패스워드 변경을 위한 인증번호가 유효하지 않음
				var arrError = [errorMsg];
				this.gfnAlert("msg.password.authnumber", arrError);
				if(!objSvcID.callback.endsWith("Force")) {
					this._gfnTransactionInfoEnd();
					return;
				}
				break;
				
			case -10020:
				// 패스워드 변경 실패됨
				var arrError = [errorMsg];
				this.gfnAlert("msg.password.fail", arrError);
				if(!objSvcID.callback.endsWith("Force")) {
					this._gfnTransactionInfoEnd();
					return;
				}
				break;
				
			case -9999:
				// 세션종료
				this.gfnAlert("msg.session.timeout",null,null, "gfnLogOut");
				return;
				break;
				
			case -2463215:
				//@todo : 임의 에러코드  처리
				//return false;
				break;
		}
	}
	
	if (!this.gfnIsNull(this["rfToken"])) {
		nexacro.setHTTPHeaderVariable("X-AUTH-TOKEN", this.rfToken);
		nexacro.setEnvironmentVariable("LAST-DATE-TOKEN", new Date());
		
		var id_user = nexacro.getEnvironmentVariable("evUserId");
		var dec_key = nexacro.getEnvironmentVariable("evKey");
		var key = CryptoJS.enc.Hex.parse(dec_key.toString());
		//var encId = nexacro.base64Encode(CryptoJS.AES.encrypt(id_user, key, {iv:key}).toString());
		//nexacro.setCookieVariable("tk-"+encId, CryptoJS.AES.encrypt(this.rfToken, key, {iv:key}).toString());
		sessionStorage.setItem("tk", CryptoJS.AES.encrypt(this.rfToken, key, {iv:key}).toString());
		this["rfToken"] = null;
	}

	// 서비스 실행결과 출력
	var sStartDate = objSvcID.startDate;
	var nStartTime = objSvcID.startTime;
	
	var objDate = new Date();
	var sEndDate = objDate.getYear()
					+"-"+String(objDate.getMonth()).padLeft(2, '0')
					+"-"+String(objDate.getDate()).padLeft(2, '0')
					+" "+String(objDate.getHours()).padLeft(2, '0')
					+":"+String(objDate.getMinutes()).padLeft(2, '0')
					+":"+String(objDate.getSeconds()).padLeft(2, '0')
					+" "+objDate.getMilliseconds();
	var nElapseTime = (objDate.getTime() - nStartTime)/1000;
	
	var sMsg = "";
	if (errorCode == 0 && objSvcID.svcId != "checkforminfo")
	{	
		this._gfnCallbackSetFormStatus(objSvcID);
		sMsg = "gfnCallback : svcID>>"+objSvcID.svcId+ ", svcUrl>>"+objSvcID.svcUrl+ ", outdata>>"+objSvcID.output+", errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + objSvcID.isAsync + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		trace(sMsg,'');
	}
	else {
		sMsg = "gfnCallback : svcID>>"+objSvcID.svcId+ ", svcUrl>>"+objSvcID.svcUrl+ ", outdata>>"+objSvcID.output+", errorCode>>"+errorCode + ", isAsync>>" + objSvcID.isAsync + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		if (errorCode != 0) {
			sMsg += "\n==================== errorMsg =======================\n"+errorMsg+"\n==================================================";
		}
		trace(sMsg,'');
	}

	// 화면의 callBack 함수 실행
	if(!this.gfnIsNull(objSvcID.svcId))
	{
		// form에 callback 함수가 있을때
		if (this[objSvcID.callback]) this.lookupFunc(objSvcID.callback).call(objSvcID.svcId, errorCode, errorMsg, objSvcID.args);
	}
	
	this._gfnTransactionInfoEnd();
// 	if (errorCode == 0) {
// 		this._gfnTransactionCallbackLog(objSvcID);
// 	}
};

pForm._gfnCallbackSetFormStatus = function(objSvcID) {
	// 화면 상태값 처리
	if(this._BTN_CLICK == "Y" || this._BTN_CLICK == "S") {			
		if(this._BTN_CLICK == "Y") {
			var status = "X";
			if(!this.gfnIsNull(objSvcID.output)) {
				var chk_data = objSvcID.output.split(' ')[0].split('=')[0];
				if(this[chk_data] != null) {	
					if(this[chk_data]._rawRecords.length > 0) {
						if(this[chk_data]._rawRecords.length == 1 && this[chk_data].rowcount == 1 && this[chk_data].getColumn(0, this.ucFlag) == "#") {
						} else {
							status = "Q";
						}
					}
				}
			}
			this.gfnSetFormStatus(this, status);
		}
		this._BTN_CLICK = "";
	}
	if(this._BTN_SUB_CLICK == "Y" || this._BTN_SUB_CLICK == "S") {			
		if(this._BTN_SUB_CLICK == "Y") {
			var status = "X";
			if(!this.gfnIsNull(objSvcID.output)) {
				var chk_data = objSvcID.output.split(' ')[0].split('=')[0];
				if(this[chk_data] != null) {	
					if(this[chk_data].rowcount > 0) {
						if(this[chk_data].rowcount == 1 && this[chk_data].getColumn(0, this.ucFlag) == "#") {
						} else {
							status = "Q";
						}
					}
				}
			}
			this.gfnSetFormSubStatus(this, status);
		}
		this._BTN_SUB_CLICK = "";
	}
};

pForm.gfnLogOut = function(isManual) {	
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");
	
	var logoutUrl = "/auth/logout.do";
	if (nexacro.getEnvironmentVariable("evLoginType") == "sso") {
		isManual = true;
		logoutUrl = "/sso/out.do";
	}	
	if (!this.gfnIsNull(_contextPath)) {
		logoutUrl = _contextPath + logoutUrl;
	}

// 	var params = this.gfnGetUrlParam(location.href);
// 	logoutUrl += "?tk="
// 	if(params["tk"] != null) {
// 		logoutUrl += params.tk;
// 	}
	if(sessionStorage.getItem("tk") != null) {
		sessionStorage.removeItem("tk");
	}
		
	if (this.objApp == null) {
		this.objApp = this.gfnGetApplication();
	}
	
	// sso 로그인의 경우 사이트별로 맞게 처리.
	if (isManual == true) {
		window.location.href = logoutUrl;	
	}
	else {
		this.gfnOpenPopup("cmmLogin", "cmm::cmmLogin.xfdl", "", "", { titlebar: false });
	}
};

pForm._gfnCheckFormInfo = function(inProc) {
	if(this.gfnGetConfig("DZ", "CHECK_FORMINFO") == "Y") {
		var dssp = this[inProc];
		if(dssp != null) {
			var arr_sp = [];
			if(dssp.colinfos["IS_CHECK"] == null) {
				dssp.addColumn("IS_CHECK", "string");
			}
			for(var r = 0; r < dssp.rowcount; r++) {
				var sp = dssp.getColumn(r, "SP").toUpperCase();
				if(dssp.getColumn(r, "IS_CHECK") != "Y") {
					if (sp.indexOf("DZZPR_") == -1 && sp.indexOf("DXXPR_") == -1 && sp.indexOf("DZXPR_") == -1
						&& sp.indexOf("DMZPR_FORMINFO") == -1) {
						arr_sp.push(sp);
					}
				}
				dssp.setColumn(r, "IS_CHECK", "Y");
			}
			if(arr_sp.length > 0) {
				this._checkDsProc = new Dataset();
				this._checkDsProc.addColumn("TARGET", "string");
				this._checkDsProc.addColumn("SP", "string");
				this._checkDsProc.addRow();
				this._checkDsProc.setColumn(0, "TARGET", "checkforminfo");
				this._checkDsProc.setColumn(0, "SP", "DZZPR_FORMINFOSP_SELECT_NEW");
				
				this._checkDsParam = new Dataset();
				this._checkDsParam.addColumn("ID_FORM", "string");
				this._checkDsParam.addColumn("NM_SP", "string");				
				this._checkDsParam.addRow();
				this._checkDsParam.setColumn(0, "ID_FORM", "");
				this._checkDsParam.setColumn(0, "NM_SP", arr_sp.join(','));
				
				this._checkDsList = new Dataset();
				
				var strSvcId    = "checkforminfo";
				var strSvcType  = "select";
				var inProc		= "_checkDsProc";
				var inData      = "checkforminfo=_checkDsParam";
				var outData     = "_checkDsList=checkforminfo0";
				var strArg      = "";
				var callBackFnc = "fnCallbackCheckFormInfo";
								
				this.fnCallbackCheckFormInfo = function(svcID, errorCode, errorMsg)
				{
					if (svcID == "checkforminfo") {
						if(errorCode == 0) {
							var arr_msg = [];
							for(var r = 0; r < this._checkDsList.rowcount; r++) {
								if(this._checkDsList.getColumn(r,"YN_SP") == "N") {
									arr_msg.push(this._checkDsList.getColumn(r,"NM_SP"));
								}
							}
							if(arr_msg.length > 0) {
								this.gfnMainAlert("[미등록 SP] " +arr_msg.join(', '));
							}
						}
					}
				}
				
				this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
									strSvcType , 	// trabsaction을 요청할 구분
									inProc,			// Procedure 정보 Dataset 이름
									inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
									outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
									strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
									callBackFnc, false); // 통신방법 정의 [생략가능]
				
			}
		}
	}
};


pForm._gfnTransactionLog = function(nDataType, inProc, inData)
{
	if(nDataType == 0 && !this.gfnIsNull(inProc)) {
		var spl_indata = inData.split(' ');
		if(spl_indata.length > 0) {
			for(var i = 0; i < spl_indata.length; i++) {
				var target = spl_indata[i].split('=')[0];
				var ds_name = spl_indata[i].split('=')[1];
				if(target == "dsProc") {
					continue;
				}
				if(this[ds_name] != null) {
					var ds = this[ds_name];					
					var frow = this[inProc].findRow("TARGET", target);
					if (frow == -1) continue;
					var sp = this[inProc].getColumn(frow, "SP");
					trace("------------------------------------------ " + ds_name + " ------------------------------------------",'');
					trace("SP : " + sp,'');
					var arr_param = [];
					for(var r = 0; r < ds.rowcount; r++) {
						if(ds.rowcount > 1) {
							trace("[ROW " + r + "]",'');
						}
						for(var c = 0; c < ds.colinfos.length; c++) {
							var col_name = ds.colinfos[c].id;
							var col_val = this[ds_name].getColumn(r, col_name);
							var col_type = ds.colinfos[c].type.toUpperCase();
							if(col_type == "INT" || col_type == "FLOAT" || col_type == "BIGDECIMAL") {
								if(this.gfnIsNull(col_val)) {
									col_val = "0";
								}
								arr_param.push("@"+col_name + "=" + col_val);
							} else {
								if(this.gfnIsNull(col_val)) {
									col_val = "";
								}
								arr_param.push("@"+col_name + "='" + col_val + "'");
							}
							trace(col_name + " = " + col_val,'');
						}
					}
					trace("EXEC : " + sp + " " + arr_param.join(', '),'');
					trace("----------------------------------------------------------------------------------------------",'');
				}
			}
		}
	}
};

pForm._gfnTransactionCallbackLog = function(objSvcID) 
{
	if (!this.gfnIsNull(objSvcID.output)) {
		var nDataType;	
		if (nexacro.getEnvironmentVariable("evRunMode") == "2") 
		{
			nDataType = 2;
		}
		else {
			nDataType = 0;
		}
		if(nDataType == 0) {
			var spl_data = objSvcID.output.split(' ');
			for(var i = 0; i < spl_data.length; i++) {
				var out_data = spl_data[i].split('=')[0];
				var arr_trace = [];
				if(this[out_data] != null) {
					trace("------------------------------------------ " + out_data + " ------------------------------------------",'');
					var ds = this[out_data];
					for(var r = 0; r < ds.rowcount; r++) {
						var arr_col = [];
						var arr_val = [];
						for(var c = 0; c < ds.colinfos.length; c++) {
							if(r==0) {
								arr_col.push(ds.colinfos[c].id);
							}
							arr_val.push(ds.getColumn(r, ds.colinfos[c].id));
						}
						if(r==0) {
							arr_trace.push(arr_col.join('\t'));
						}
						arr_trace.push(arr_val.join('\t'));
					}
					trace(arr_trace.join('\n'),'');
					//trace(ds.saveXML());
					trace("----------------------------------------------------------------------------------------------",'');
				}
			}		
		}
	}
};

pForm._gfnTransactionInfoStart = function(strSvcId, strSvcType, inData, isAsync) {
	nexacro.removeHTTPHeaderVariable("GC_LOG_INFO");
	
	if (this.TransactionInfoComplete != true && isAsync == true && this["FormInfo"] != null) {
		if(this["TransactionInfo"] == null) {
			this.TransactionInfo = [];
		}
		this.TransactionInfo.push({svcId:strSvcId, callback:"N"});
	}
	
	var id_form = "";
	var cd_module = "";
	var id_user = "";
	var cd_corp = "";
	var cd_dept = "";
	if (this.objApp == null) {
		this.objApp = this.gfnGetApplication();
	}
	var dsUser = this.objApp.gdsUserInfo;
	if (this["FormInfo"] != null) {
		id_form = this.FormInfo.ID_FORM;
		cd_module = this.FormInfo.CD_MODULE;
	}
	if (dsUser != null && dsUser.rowcount > 0) {
		id_user = dsUser.getColumn(0, "ID_USER");
		cd_corp = dsUser.getColumn(0, "CD_CORP");
		cd_dept = dsUser.getColumn(0, "CD_DEPT");
	} 
	
	var arr_data = [];
	if (!this.gfnIsNull(inData)) {
		var spl_data = inData.split(' ');
		for(var i=0; i<spl_data.length; i++) {
			var tgt = spl_data[i].split('=')[0];
			if (tgt == "dsProc") continue;
			if ((strSvcType == "select" || strSvcType == "auth/select") && (
					strSvcId == "gridcombo"
					|| tgt.startsWith("combo")
					|| tgt == "gridinfo"
					|| tgt == "gridspec"
					|| tgt == "gridlayout"
				)) continue;
			arr_data.push(tgt);
		}
	}
	var target = arr_data.join(',');
	if ((strSvcType == "select" || strSvcType == "save" || strSvcType == "auth/select" || strSvcType == "auth/save") && (this.gfnIsNull(id_form) || this.gfnIsNull(target))) {
		return;
	}
	
	var log = "TY_SYSTEM=ERP;ID_FORM="+id_form+";CD_MODULE="+cd_module+";DS_SERVICE="+strSvcType+";ID_USER="+id_user+";CD_CORP="+cd_corp+";CD_DEPT="+cd_dept+";DS_TARGET="+target;
	nexacro.setHTTPHeaderVariable("GC_LOG_INFO", log);
};

pForm._gfnTransactionInfoCheck = function(objSvcID) {
	if(this.TransactionInfoComplete != true && this["TransactionInfo"] != null) {
		for(var i = 0; i < this.TransactionInfo.length; i++) {
			var svcInfo = this.TransactionInfo[i];
			if(this.TransactionInfo[i].callback == "Y") {
				continue;
			}
			if(svcInfo.svcId == objSvcID.svcId) {
				svcInfo.callback = "Y";
				break;
			}			
		}
		
	}
}

pForm._gfnTransactionInfoEnd = function() {
	if(this.TransactionInfoComplete != true && this["TransactionInfo"] != null) {
		var cntComplete = 0;
		for(var i = 0; i < this.TransactionInfo.length; i++) {
			if(this.TransactionInfo[i].callback == "Y") {
				cntComplete++;
			}
		}
		
		if(cntComplete == this.TransactionInfo.length) {
			this.TransactionInfoComplete = true;
			this.TransactionInfo = null;
			if (this["fnEventAfterLoad"] != null) {
				this.fnEventAfterLoad();
			}
		}
	}
}