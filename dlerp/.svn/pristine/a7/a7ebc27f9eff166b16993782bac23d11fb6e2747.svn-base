/**
*  컨설팅 표준화 작업
*  @FileName 	Excel.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	           		최초 생성 
*  2017.10.17     	consulting       	        주석 정비
*  2024.05.09       	   					    엑셀 로그생성
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;
var _gcGridHeadCustomMap = [ "id", "ty_input", "chkupdate" ];
var _gcGridBodyCustomMap = [ "orgtype", "expr_col", "expr_newpattern" ];
/**
 * @class excel export <br>
 * @param {Object} objGrid - Grid Object	
 * @param {String} [sSheetName]	- sheet name
 * @param {String} [sFileName]	- file name
 * @return N/A
 * @example
 * this.gfnExcelExport(this.grid_export, "SheetName","");
 */
pForm.gfnExcelExport = function(objGrid,  sSheetName, sFileName, objTitle, arrCellIndexes)
{
	this.setWaitCursor(true);
	
	var objGrid_excel = objGrid;
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	
	//fileName nullcheck
	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
	//sheetName nullcheck
	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;
	
	
	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
	
	//sheetName 30이상일경우 기본시트명
	if( String(sSheetName).length > 30 ){
		sSheetName =  "sheet1";
	}
	
	var svcUrl = "svcUrl::XExportImport.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");	
	if (!this.gfnIsNull(_contextPath)) {
		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
	}
	
	this.objExport = null
	this.objExport = new ExcelExportObject();
	
	var gridHeadInfos = [];
	var gridBodyInfos = [];
	var gh = objGrid._getCellinfos(-1);
	var gb = objGrid._getCellinfos(0);
	this._getGCGridCustomMap(gridHeadInfos, gh, _gcGridHeadCustomMap);
	this._getGCGridCustomMap(gridBodyInfos, gb, _gcGridBodyCustomMap);
	
	this.objExport._arrGridHeadInfo = [gridHeadInfos];
	this.objExport._arrGridBodyInfo = [gridBodyInfos];
	
//	var arrParams = [];
	var bGridUseFlag = false;
 	var bExcelDelHiddenColumn = true;
 	var excelFilterRowIdx = -1;
	if(!this.gfnIsNull(objGrid.getCellProperty("body", 0, "text")) && objGrid.getCellProperty("body", 0, "text").startsWith("expr:nx_flag")) {
		bGridUseFlag = true;
	}
	if(objGrid.EXCEL_DEL_HIDDEN == false) {
		bExcelDelHiddenColumn = false;
	}
	if(objGrid.yn_filter == "Y") {
		excelFilterRowIdx = Number(objGrid.HeadRows)+1;
	}

	objGrid._orgCurFormatString = objGrid.getCurFormatString();
	objGrid.set_enableredraw(false);
	if (bGridUseFlag) {
		objGrid.deleteContentsCol("body", 0);
	}
	if (bExcelDelHiddenColumn) {
		for (var c = objGrid.getCellCount("body")-1; c > -1; c--) {
			if(objGrid.getFormatColSize(c) == 0) {
				objGrid.deleteContentsCol("body", c);
			}
		}
	}
	
	if(objGrid.yn_filter == "Y") {
		var objDs = objGrid.getBindDataset();
		objDs.deleteRow(0);
		objDs.set_enableevent(false);
	}
	
	objGrid._oldSelectType = objGrid.selecttype;	
	objGrid.set_selecttype("cell");
	
	this.objExport._arrGrid = [objGrid_excel];
	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	this.objExport.set_exporturl(svcUrl);
	if(objTitle != null) {
		var titrows = objTitle.rowcount;
		this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objTitle, sSheetName+"!A1","nohead","allrecord","merge","allstyle","none","","both");
		this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A"+(1+titrows),"allband","allrecord","suppress","allstyle","none","","both");
	} else {
	
		// 양식다운로드의 데이터가 있을 경우 셀병합이 이루어진 그리드의 데이터가 병합되어 1개만 세팅되므로.
		if(!this.gfnIsNull(arrCellIndexes) && arrCellIndexes.length > 0) {
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord","nosuppress","allstyle","none","","both", arrCellIndexes);
		} else {
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord","suppress","allstyle","none","","both");
		}
	}
	this.objExport.set_exportfilename(sFileName);
	
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none");
 	this.objExport.set_exportmessageprocess("");
	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);	
	
//	var result = this.objExport.exportData(arrParams.join(' '));
	var result = this.objExport.exportData();
	if (this.gfnGetConfig("DZ", "LOG_TYPE").indexOf("download") != -1) 
	{
		this.gfnExcelLog(objGrid); //excel log 저장 
	}    
};

/* gfnExcelLog
 * 엑셀 다운로드 시 로그 저장 
 */
pForm.gfnExcelLog = function(objGrid)
{
	var objDs = objGrid.getBindDataset();
	var id_user = "";
	var cd_corp = "";
	var cd_dept = "";
	var id_form = this.gfnGetArgument("ID_FORM");
	var cd_module = this.gfnGetArgument("CD_MODULE");
	
	this._dsExcelLog = new Dataset();
	this._dsExcelLog.addColumn("ID_FORM", "string");
	this._dsExcelLog.addColumn("ID_USER", "string");
	this._dsExcelLog.addColumn("CD_DEPT", "string");
	this._dsExcelLog.addColumn("CD_MODULE", "string");
	this._dsExcelLog.addColumn("TY_WORK", "string");
	this._dsExcelLog.addColumn("CT_WORK", "string");
	this._dsExcelLog.addColumn("DS_WORK", "string");
	this._dsExcelLog.addColumn("DS_IP", "string");
		
	trace("fnExcel =>" + objDs.rowcount-1);
	if (this.objApp == null) {
		this.objApp = this.gfnGetApplication();
	}
	var dsUser = this.objApp.gdsUserInfo;
	if (dsUser != null && dsUser.rowcount > 0) {
		id_user = dsUser.getColumn(0, "ID_USER");
		cd_corp = dsUser.getColumn(0, "CD_CORP");
		cd_dept = dsUser.getColumn(0, "CD_DEPT");
	} 
	
    var nrow = this._dsExcelLog.addRow();
	this._dsExcelLog.setColumn(nrow, "ID_FORM", id_form);
	this._dsExcelLog.setColumn(nrow, "ID_USER", id_user);
	this._dsExcelLog.setColumn(nrow, "CD_DEPT", cd_dept);
	this._dsExcelLog.setColumn(nrow, "CD_MODULE", cd_module);
	this._dsExcelLog.setColumn(nrow, "TY_WORK", "download");
	this._dsExcelLog.setColumn(nrow, "CT_WORK", objDs.rowcount);
	this._dsExcelLog.setColumn(nrow, "DS_WORK", "");
	this._dsExcelLog.setColumn(nrow, "DS_IP", "");
		
	this._excelDsProc = new Dataset();
	this._excelDsProc.addColumn("TARGET", "string");
	this._excelDsProc.addColumn("SP", "string");
	this._excelDsProc.addRow();
	this._excelDsProc.setColumn(0, "TARGET", "excellog");
	this._excelDsProc.setColumn(0, "SP", "DZZPR_TRAN_LOG_INSERT");
	
	var strSvcId    = "excel";
	var strSvcType  = "save";
	var inProc		= "_excelDsProc";
	var inData      = "excellog=_dsExcelLog";
	var outData     = "";
	var strArg      = "";
	var callBackFnc = "fnCallbackExcelLog";
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcType , 	// transaction을 요청할 구분
						inProc,			// Procedure 정보 Dataset 이름
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
						callBackFnc); 	// 통신방법 정의 [생략가능]		
						
	this.fnCallbackExcelLog = function(svcID, errorCode, errorMsg)
	{
		if (svcID == "excel") {
			if(errorCode == 0) {
			}
		}
	}	
};

/* gfnExcelExportTitle
 * 그리드 상위 제목,내용등 추가
 * 기존 함수 호환성을 위해 분리
 */
pForm.gfnExcelExportTitle = function(objTitle, objGrid,  sSheetName, sFileName)
{
	this.gfnExcelExport(objGrid, sSheetName, sFileName, objTitle);
}

pForm.gfnExcelExportMulti = function(arrGrid,  arrSheetName, sFileName)
{
	this.setWaitCursor(true);
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	
	//fileName nullcheck
	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
	
	var svcUrl = "svcUrl::XExportImport.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");	
	if (!this.gfnIsNull(_contextPath)) {
		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
	}
	
	this.objExport = null
	this.objExport = new ExcelExportObject();
	
	this.objExport._arrGridHeadInfo = [];
	this.objExport._arrGridBodyInfo = [];
	this.objExport._arrGrid = arrGrid;
	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	this.objExport.set_exporturl(svcUrl);
	var arrSheetOffset = new Array();
//	var arrParams = [];
	for(var i = 0; i < arrGrid.length; i++) {
		
		var gridHeadInfos = [];
		var gridBodyInfos = [];
		var gh = arrGrid[i]._getCellinfos(-1);
		var gb = arrGrid[i]._getCellinfos(0);
		this._getGCGridCustomMap(gridHeadInfos, gh, _gcGridHeadCustomMap);
		this._getGCGridCustomMap(gridBodyInfos, gb, _gcGridBodyCustomMap);
		
		this.objExport._arrGridHeadInfo.push(gridHeadInfos);
		this.objExport._arrGridBodyInfo.push(gridBodyInfos);
	
		var bGridUseFlag = false;
 		var bExcelDelHiddenColumn = true;
 		var excelFilterRowIdx = -1;
		if(!this.gfnIsNull(arrGrid[i].getCellProperty("body", 0, "text")) && arrGrid[i].getCellProperty("body", 0, "text").startsWith("expr:nx_flag")) {
			bGridUseFlag = true;
		}
		if(arrGrid[i].EXCEL_DEL_HIDDEN == false) {
			bExcelDelHiddenColumn = false;
		}
		if(arrGrid[i].yn_filter == "Y") {
			excelFilterRowIdx = Number(arrGrid[i].HeadRows)+1;
		}
// 		if(bGridUseFlag && arrGrid[i].yn_num != "Y") {
// 			arrParams.push("DEL_FLAG" + (i>0?i:"") + "=Y");
// 		}
// 		if(bExcelDelHiddenColumn) {
// 			arrParams.push("DEL_HIDDEN_COL" + (i>0?i:"") + "=Y");
// 		}
// 		if(excelFilterRowIdx > -1) {
// 			arrParams.push("DEL_FLITER_ROW" + (i>0?i:"") + "="+excelFilterRowIdx);
// 		}		
		
		arrGrid[i]._orgCurFormatString = arrGrid[i].getCurFormatString();
		arrGrid[i].set_enableredraw(false);
		if (bGridUseFlag) {
			arrGrid[i].deleteContentsCol("body", 0);
		}
		if (bExcelDelHiddenColumn) {
			for (var c = arrGrid[i].getCellCount("body")-1; c > -1; c--) {
				if(arrGrid[i].getFormatColSize(c) == 0) {
					arrGrid[i].deleteContentsCol("body", c);
				}
			}
		}
		
		if(arrGrid[i].yn_filter == "Y") {
			var objDs = arrGrid[i].getBindDataset();
			objDs.deleteRow(0);
			objDs.set_enableevent(false);
		}
		
		arrGrid[i]._oldSelectType = arrGrid[i].selecttype;
		arrGrid[i].set_selecttype("cell");
		
		
		var sSheetName = "";
		if(arrSheetName != null) {
			sSheetName = arrSheetName[i];
		}
		sSheetName = this.gfnIsNull(sSheetName) ? "sheet"+(i+1) : sSheetName;
		//sheetName 30이상일경우 기본시트명
		sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
		if( String(sSheetName).length > 30 ){
			sSheetName =  "sheet"+(i+1);
		}
		
		//시트명이 같으면 append
		var offset = arrSheetOffset[sSheetName];
		if (offset > 1) {
			offset += 3;
		} else {
			offset = 1;
		}
		
		this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, arrGrid[i], sSheetName+"!A" + offset,"allband","allrecord","suppress","allstyle","none","","both");
				
		arrSheetOffset[sSheetName] = (offset + arrGrid[i].HeadRows + arrGrid[i].rowcount);
	}
	this.objExport.set_exportfilename(sFileName);	
	
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none");
 	this.objExport.set_exportmessageprocess("");
	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);	
	
//	var result = this.objExport.exportData(arrParams.join(' '));
	var result = this.objExport.exportData();

};
/**
 * @class excel export on sucess <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnExportOnsuccess = function(obj, e)
{	
	this.setWaitCursor(false);	
	this.gfnExportFinally(obj);
};

/**
 * @class  excel export on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnExportOnerror = function(obj,  e)
{
	this.setWaitCursor(false);
	this.gfnExportFinally(obj);
	this.gfnAlert("Excel Export Error!!");
};

pForm.gfnExportFinally = function(obj) 
{
	if(obj._arrGrid != null) {
		for(var i = 0; i < obj._arrGrid.length; i++) {
			obj._arrGrid[i].set_selecttype(obj._arrGrid[i]._oldSelectType);
			obj._arrGrid[i].set_formats(obj._arrGrid[i]._orgCurFormatString);
			
			this._setGCGridCustomMap(obj._arrGridHeadInfo[i], obj._arrGrid[i]._getCellinfos(-1), _gcGridHeadCustomMap);
			this._setGCGridCustomMap(obj._arrGridBodyInfo[i], obj._arrGrid[i]._getCellinfos(0), _gcGridBodyCustomMap);
			
			if(obj._arrGrid[i].yn_filter == "Y") {
				var objDs = obj._arrGrid[i].getBindDataset();
				objDs.set_enableevent(true);
				this._grd_filter_row_add(obj._arrGrid[i], objDs, false);
			}
			
			obj._arrGrid[i].set_enableredraw(true);
		}
	}	
}

/**
 * @class  excel import( 데이터 헤더포함 ) <br>
 * @param {String} objDs - dataset	
 * @param {String} [sSheet]	- sheet name(default:Sheet1)
 * @param {String} sHead - Head 영역지정	
 * @param {String} [sBody] - body 영역지정(default A2)	
 * @param {String} [sCallback]	- callback 함수
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)
 * @return N/A
 * @example
 * this.gfnExcelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
 */
pForm.gfnExcelImportAll = function(objDs,sSheet,sHead,sBody,sCallback,sImportId,objForm)
{	
	//this.setWaitCursor(true);    	
	
	if(this.gfnIsNull(sSheet)) sSheet = "";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	if(this.gfnIsNull(sHead)) return false;
	
	var svcUrl = "svcUrl::XExportImport.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");	
	if (!this.gfnIsNull(_contextPath)) {
		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
	}
	
	this.objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport_"+(new Date()).toISOString(),this);				
	this.objImport.set_importurl(svcUrl);						
	this.objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	//this.objImport.set_userawnumbervalue(false);
	
	if (!this.gfnIsNull(sCallback))
	{
		this.objImport.callback = sCallback;
		this.objImport.importid = sImportId;
		this.objImport.form = objForm;
	}
	
	this.objImport.addEventHandler("onsuccess", this.gfnImportAllOnsuccess, this);
	this.objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);	
	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";
	var sParam2 = "["+objDs+"=outds]";


	objImport.importData("", sParam1, sParam2);						
	//objImport = null;	 
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportAllOnsuccess = function(obj,  e)
{		
	//this.setWaitCursor(false);
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	
	//화면의 callback 함수 호출
	if (!this.gfnIsNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId);
	}
};

/**
 * @class  excel import( 데이터 헤더제외 ) <br>
 * @param {String} sDataset - dataset	
 * @param {String} [sSheet]	- sheet name
 * @param {String} [sBody] - body 영역지정	
 * @param {String} [sCallback] - callback 함수	
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)	
 * @return N/A
 * @example
 * this.gfnExcelImport("dsList","SheetName","A2","fnImportCallback","import",this);
 */
pForm.gfnExcelImport = function(sDataset, sSheet, sBody, sCallback, sImportId, objForm, cursorYn)
{
	//this.setWaitCursor(true);    	
	
	if(this.gfnIsNull(sSheet)) sSheet = "";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	
	var svcUrl = "svcUrl::XExportImport.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");	
	if (!this.gfnIsNull(_contextPath)) {
		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
	}
	
	this._ExcelName = "";
	this._ExcelBody = "";
	this._ExcelCallback = "";
	this._CursorYn = cursorYn;
	
	this.objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport_"+(new Date()).toISOString(),this);				
	this.objImport.set_importurl(svcUrl);						
	this.objImport.set_importtype(nexacro.ImportTypes.EXCEL);				
	//this.objImport.set_userawnumbervalue(false);	
	this.objImport.outds = sDataset;

	if (!this.gfnIsNull(sCallback))
	{
		this.objImport.callback = sCallback;
		this.objImport.importid = sImportId;
		this.objImport.form = objForm;
		this._ExcelCallback = {
			callback : sCallback,
			importid : sImportId,
			form : objForm			
		}
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutListName = sDataset+"_outlist";	
	var sOutDsName = sDataset+"_outds";	
	var sOutSheetName = sDataset+"_outsheet";	
	if(this.isValidObject(sOutListName)) this.removeChild(sOutListName);
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);		
	if(this.isValidObject(sOutSheetName)) this.removeChild(sOutSheetName);		
	
	var objOutList = new Dataset();
	objOutList.name = sOutListName;
	this.addChild(objOutList.name, objOutList);
	
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	var objOutSheet = new Dataset();
	objOutSheet.name = sOutSheetName;
	this.addChild(objOutSheet.name, objOutSheet);
	
	this.objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);
 	
	if (sSheet == "") {
		// 지정된 시트명이 없으면 시트선택 창으로
		this._ExcelName = sDataset;
		this._ExcelBody = sBody;
		this.objImport.addEventHandler("onsuccess", this.gfnImportSheetOnsuccess, this);
		this.objImport.importData("", "[command=getsheetlist;Output=outSheet;]", "["+sOutSheetName+"=outSheet]");		
	} else {
		var param = "[Command=getsheetlist;Output=outList][Command=getsheetdata;Output=outDs;Body=" + sSheet + "!" + sBody +";]";
		var param2 = "[" + sOutListName + "=outList " + sOutDsName + "=outDs]";
		this.objImport.addEventHandler("onsuccess", this.gfnImportOnsuccess, this);
		this.objImport.importData("", param, param2);	
	}
	
	//this.setWaitCursor(false);
};

pForm.gfnImportSheetOnsuccess = function(obj, e) 
{	
	var objSheetDs = this.objects[this._ExcelName+"_outsheet"];
	var arrSheet = [];
	var sSheet = "";
	for(var i = 0; i < objSheetDs.rowcount; i++) {
		arrSheet.push(objSheetDs.getColumn(i, "sheetname").replace(/ /g, '%20'));
	}
	
	this._ExcelUrl = e.url;
	if (arrSheet.length > 1) {
		// 시트 선택 팝업
		var param = {};
		param.EXCEL_SHEET = arrSheet;
		this.gfnFormOpenNonAuth("DZO", "DZZ_EXCEL_SHEET", "gfnSelectSheet_callback", param, 330, 150);
	}
	else if (arrSheet.length == 1) {
		sSheet = arrSheet[0];
		this.gfnImportData(sSheet);
	}	
};

pForm.gfnImportData = function(sSheet) {	
	if(this._CursorYn == "Y"){
		this.setWaitCursor(true);
	}	

	var svcUrl = "svcUrl::XExportImport.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");	
	if (!this.gfnIsNull(_contextPath)) {
		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
	}
	
	this.objImport = new ExcelImportObject(this._ExcelName+"_ExcelImport2_"+(new Date()).toISOString(),this);	
	//this.addChild("Import02", this.objImport);
	
	this.objImport.set_importtype(nexacro.ImportTypes.EXCEL);
	this.objImport.set_importurl(svcUrl);
	this.objImport.outds = this._ExcelName;
	if(!this.gfnIsNull(this._ExcelCallback)) {
		this.objImport.callback = this._ExcelCallback.callback;
		this.objImport.importid = this._ExcelCallback.importid;
		this.objImport.form = this._ExcelCallback.form;
	}
	
	//동적으로 이벤트 연결
	this.objImport.addEventHandler("onsuccess", this.gfnImportOnsuccess, this);
	this.objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);

	var sOutListName = this._ExcelName+"_outlist";	
	var sOutDsName = this._ExcelName+"_outds";	
	var param = "[Command=getsheetlist;Output=outList][Command=getsheetdata;Output=outDs;Body=" + sSheet + "!" + this._ExcelBody +";]";
	var param2 = "[" + sOutListName + "=outList " + sOutDsName + "=outDs]";
	
	this.objImport.set_importfilemode("server");
	this.objImport.importData( "" + this._ExcelUrl, param, param2 ,"");		
};

pForm.gfnSelectSheet_callback = function(strID, val) {
	if(val != null) {
		this.gfnImportData(val);
	}
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportOnsuccess = function(obj,  e)
{		
	//this.setWaitCursor(false);
	
	var objListDs = this.objects[obj.outds+"_outlist"];
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;
	
	//화면의 callback 함수 호출
	if (!this.gfnIsNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId, objOutDs, objListDs);
	} else {
		//기존 데이터셋의 내용으로 헤더복사
		for (var i=0; i<objOrgDs.getColCount(); i++)
		{
			sColumnId = "Column"+i;
			var sColumnNm = this.gfnGridGetBindColumnNameByIndex(objOrgDs.bindgrid, i);
			if (sColumnNm != "" && sColumnId != sColumnNm)
			{
				objOutDs.updateColID(sColumnId, sColumnNm);
			}
		}
		
		objOrgDs.clearData();
		objOrgDs.copyData(objOutDs);
	}
};

/**
 * @class  excel import on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportAllOnerror = function(obj,  e)
{
	//this.setWaitCursor(false);	
	if(this._CursorYn == "Y"){
		this.setWaitCursor(false);
	}		
	this.alert(e.errormsg);
};

pForm._getGCGridCustomMap = function(arr, infos, map) {
	for(var h=0; h < infos.length; h++) {
		var j = {};
		for(var m=0; m < map.length; m++) {
			var mapName = map[m];
			if(infos[h][mapName] != null) {
				j[mapName] = infos[h][mapName];
			}
		}
		arr.push(j);
	}
}

pForm._setGCGridCustomMap = function(arr, infos, map) {
	for(var h=0; h < arr.length; h++) {
		for(var m=0; m < map.length; m++) {
			var mapName = map[m];
			if(arr[h][mapName] != null) {
				infos[h][mapName] = arr[h][mapName];
			}
		}
	}
}

pForm.gfnExcelDownload = function(cd_system, id_grid, fileName, dsSearch)
{
	var excelExport = new nexacro.FileDownTransfer( "excelExport", this );  

	// Add Object to Parent Form  
	this.addChild( "excelExport", excelExport );

	// Set Object 
	excelExport.set_url( "/excel/download.do" );
	
	var jsonObj = this.gfnDataSetToJson(dsSearch, 0);
	
	excelExport.setPostData( "FILE_NAME", fileName);
	excelExport.setPostData( "CD_SYSTEM", cd_system );
	excelExport.setPostData( "ID_GRID", id_grid );
	excelExport.setPostData( "JSON_PARAM", JSON.stringify(jsonObj) );
	
	excelExport.download();

	// Remove Object form Parent
	var objFileDown = this.removeChild( "excelExport" );
 
	// Destroy Object
	objFileDown.destroy();
	objFileDown = null;
};

/*
 *	대용량 데이터 엑셀 다운로드
 */ 
pForm.gfnExcelExportBig = function(objGrid, inProc, inData, sSheetName, sFileName) 
{
	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
	//sheetName nullcheck
	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;
		
	this._dsExBigInfo = new nexacro.Dataset();
	this._dsExBigInfo.addColumn("SHEETNAME", "string");
	this._dsExBigInfo.addColumn("FILENAME", "string");
	this._dsExBigInfo.addRow();
	this._dsExBigInfo.setColumn(0, "SHEETNAME", sSheetName);
	this._dsExBigInfo.setColumn(0, "FILENAME", sFileName);
	
	this._dsExBigHeads = new nexacro.Dataset();
	this._dsExBigHeads.addColumn("COLUMN", "string");
	this._dsExBigHeads.addColumn("TEXT", "string");
	this._dsExBigHeads.addColumn("SIZE", "int");
	this._dsExBigHeads.addColumn("ALIGN", "string");
	this._dsExBigHeads.addColumn("COLS", "int");
	this._dsExBigHeads.addColumn("COLSPAN", "int");
	this._dsExBigHeads.addColumn("ROWS", "int");
	this._dsExBigHeads.addColumn("ROWSPAN", "int");
	this._dsExBigHeads.addColumn("TYPE", "string");
	this._dsExBigHeads.addColumn("FORMAT", "string");
	
	for(var k=0; k < objGrid.getCellCount("head"); k++){
		var bcell = this._gfnGridGetBodyCellIndex(objGrid, k);
		var text = "";
		var columnid = "";
		var size = 0;
		var align = "left";
		var format = "";
		var type = "";
		
		var cols = objGrid.getCellProperty("head", k, "col");
		var colspan = objGrid.getCellProperty("head", k, "colspan");
		var rows = objGrid.getCellProperty("head", k, "row");
		var rowspan = objGrid.getCellProperty("head", k, "rowspan");
		
		if (bcell > -1) {
			size = objGrid.getRealColSize(bcell, "size");
			if (size == 0) continue;
			align = objGrid.getCellProperty("body", bcell, "textAlign");
			text = objGrid.getCellProperty("body", bcell, "text");
			format = objGrid.getCellProperty("body", bcell, "maskeditformat");
			if(objGrid.getCellProperty("body", bcell, "displaytype") == "number" || (objGrid.getCellProperty("body", bcell, "displaytype") == "mask" && objGrid.getCellProperty("body", bcell, "maskedittype") == "number")) {
				type = "NUMBER";
			} else if(objGrid.getCellProperty("body", bcell, "displaytype") == "date") {
				type = "DATE";
				format = objGrid.getCellProperty("body", bcell, "calendardateformat");
			}
			
			if ( !this.gfnIsNull(text) ){
				if ( text.search(/^BIND\(/) > -1 ) {	
					columnid = text.replace(/^BIND\(/, "");
					columnid = columnid.substr(0, columnid.length-1);
				} 
				else if ( text.search(/^bind:/) > -1 ) {
					columnid = text.replace(/^bind:/, "");
				}
				else if (text.startsWith("expr:nx_flag")) {
					columnid = "nx_flag";
				}
			}
			if (columnid == "nx_flag") continue;
		} else {
			//if(colspan == 1 && rowspan == 1) continue;
		}
		
		text = objGrid.getCellProperty("head", k, "text");
		
		var excols = 0;
		for(var c=0; c < cols; c++){
			var csize = objGrid.getRealColSize(c, "size");
			var ctext = objGrid.getCellProperty("body", c, "text");
			if(csize == 0 || ctext.startsWith("expr:nx_flag")) {
				excols++;
			}
		}
		
		var excolspan = 0;
		for(var x=0; x < objGrid.getCellCount("head"); x++){
			var xcols = objGrid.getCellProperty("head", x, "col");
			if(xcols >= cols && xcols < (cols+colspan)) {
				var b = this._gfnGridGetBodyCellIndex(objGrid, x);
				if (b > -1) {
					var csize = objGrid.getRealColSize(b, "size");
					var ctext = objGrid.getCellProperty("body", b, "text");
					if(csize == 0 || ctext.startsWith("expr:nx_flag")) {
						excolspan++;
					}
				}
			}
		}
		
		if((colspan-excolspan) == 0) continue;		
			
		if(colspan > 1) {
			colspan -= excolspan;
		}
		
		cols -= excols;
		
		var nrow = this._dsExBigHeads.addRow();
		this._dsExBigHeads.setColumn(nrow, "COLUMN", columnid);
		this._dsExBigHeads.setColumn(nrow, "TEXT", text);
		this._dsExBigHeads.setColumn(nrow, "SIZE", size);
		this._dsExBigHeads.setColumn(nrow, "ALIGN", align);
		this._dsExBigHeads.setColumn(nrow, "COLS", cols);
		this._dsExBigHeads.setColumn(nrow, "COLSPAN", colspan);
		this._dsExBigHeads.setColumn(nrow, "ROWS", rows);
		this._dsExBigHeads.setColumn(nrow, "ROWSPAN", rowspan);
		this._dsExBigHeads.setColumn(nrow, "FORMAT", format);
		this._dsExBigHeads.setColumn(nrow, "TYPE", type);
	}
	
	inData += " exinfo=_dsExBigInfo headinfo=_dsExBigHeads";
	
	var strSvcId    = "excelExportBig";
	var strSvcType  = "file/excelExport";
	var outData     = "";
	var strArg      = "";
	var callBackFnc = "_gfnExcelExportBig_callback";
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcType , 	// transaction을 요청할 구분
						inProc,			// Procedure 정보 Dataset 이름
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
						callBackFnc); // 통신방법 정의 [생략가능]
}

pForm._gfnExcelExportBig_callback = function(svcID, errorCode, errorMsg)
{
	if (errorCode == 0) {
		var filename = errorMsg;
		var fileConfig = this.gfnGetFileConfig();
		var surl = fileConfig.host+ fileConfig.downloadUrl;
		var downTransID = "FileDownTransferExcelExportBig";
		
		if(this[downTransID] != null) this.removeChild(downTransID);
		var objFileDown = new nexacro.FileDownTransfer(downTransID, this);  
		this.addChild(downTransID, objFileDown);

		objFileDown.set_url(surl);
		objFileDown.setPostData("path", "excel/temp/");
		objFileDown.setPostData("fileName", encodeURIComponent(filename));
		if(system.navigatorname =="nexacro"){
			objFileDown.set_downloadfilename(filename);
		}
		objFileDown.download();
	} else {
		this.gfnAlert(errorMsg);
	}
}

