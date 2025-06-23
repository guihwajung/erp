/**
*  굿센 표준화 작업
*  @FileName 	GridEx.js 
*  @Creator 	mango
*  @CreateDate 	2019.01.15
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*******************************************************************************
*/
var pForm = nexacro.Form.prototype;
pForm.ucFlag = "nx_flag";
pForm.ucSort = "nx_sort";
var _GC_DivFilterStyle = "right: 6px; top: 8px; cursor: pointer; width: 15px; height: 15px; display: none;";
var _GC_ImgFilter = "<img src=\"./_resource_/_images_/gridfilteroff.png\" onmouseover=\"this.src=this.src.replace('off.png','on.png')\" onmouseout=\"this.src=this.src.replace('on.png','off.png')\"/>";	
var useGridLayout = true;

pForm._grd_info_call = function(objGrid, cd_system, id_grid, is_manual) {
	
	var inData = "gridinfo=dsGridInfoParam";
	var outData = "dsGridInfo=gridinfo0";
	this.dsGridProc = new Dataset();
	this.dsGridProc.addColumn("TARGET", "string");
	this.dsGridProc.addColumn("SP", "string");
	this.dsGridProc.addRow();
	this.dsGridProc.setColumn(0, "TARGET", "gridinfo");
	this.dsGridProc.setColumn(0, "SP", "DXXPR_NXGRIDINFO_SELECT");
	if(is_manual != true) {
		this.dsGridProc.addRow();
		this.dsGridProc.setColumn(1, "TARGET", "gridspec");
		this.dsGridProc.setColumn(1, "SP", "DXXPR_NXGRIDSPEC_SELECT");
		
		inData += " gridspec=dsGridInfoParam";
		outData += " dsGridSpec=gridspec0";
	}
	
	if(useGridLayout) {
		var nrow = this.dsGridProc.addRow();
		this.dsGridProc.setColumn(nrow, "TARGET", "gridlayout");
		this.dsGridProc.setColumn(nrow, "SP", "DXXPR_NXGRIDLAYOUT_SELECT");
		inData += " gridlayout=dsGridInfoParam";
		outData += " dsGridLayout=gridlayout0";
	}
	
	this.dsGridInfoParam = new Dataset();
	this.dsGridInfoParam.addColumn("CD_SYSTEM", "string");
	this.dsGridInfoParam.addColumn("ID_GRID", "string");
	this.dsGridInfoParam.addRow();
	this.dsGridInfoParam.setColumn(0, "CD_SYSTEM", cd_system);
	this.dsGridInfoParam.setColumn(0, "ID_GRID", id_grid);
	
	this.dsGridInfo = new Dataset();
	this.dsGridSpec = new Dataset();
	this.dsGridLayout = new Dataset();
	
	this._grd_transaction("gridinfo", objGrid.id, "dsGridProc", inData, outData, objGrid.async);
};

pForm._grd_transaction = function(svcid, gridid, proc, inData, outData, async) {
	if(async==null) async = false;
	var strSvcId    = svcid;
	var strSvcType  = "select";
// 	if(svcid == "gridcombo") {
// 		strSvcType = "combo";
// 	}
	var inProc		= proc;
	var inData      = inData;
	var outData     = outData; 
	var strArg      = "gridid=" + gridid;
	var callBackFnc = "_grd_trans_callback";
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcType , 	// trabsaction을 요청할 구분
						inProc,			// Procedure 정보 Dataset 이름
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
						callBackFnc, async); // 통신방법 정의 [생략가능]
};

pForm._grd_object_find = function(objForm, gridid, istab) {
	var arrComp = objForm.components;
	if(istab) {
		arrComp = objForm;
	}

	for (var i=0; i<arrComp.length; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			if (this.gfnIsNull(arrComp[i].url)) {
				var rtn = this._grd_object_find(arrComp[i].form, gridid); //재귀함수
				if (!this.gfnIsNull(rtn)) return rtn;
			}
		}
		else if (arrComp[i] instanceof nexacro.Tab)
		{
			if (this.gfnIsNull(arrComp[i].url)) {
				var rtn = this._grd_object_find(arrComp[i].tabpages, gridid, true); //재귀함수
				if (!this.gfnIsNull(rtn)) return rtn;
			}
		}
		else
		{
			if (arrComp[i] instanceof nexacro.Grid)
			{
				if (arrComp[i].id == gridid) {
					return arrComp[i];
				}
			}
		}
	}	
}

pForm._grd_trans_callback = function(svcID, errorCode, errorMsg, args) {		
	if(args.indexOf('gridid=') > -1) {
		args = args.substring(args.indexOf('gridid='));
		if(args.indexOf(' ') > -1) {
			args = args.substring(0, args.indexOf(' '));
		}
	}
	var objGrid = this._grd_object_find(this, args.replace('gridid=',''));
	var objForm = this;	
	
	if (svcID == "gridinfo")
	{		
		this._grd_set(objForm, objGrid, objForm.dsGridInfo, objForm.dsGridSpec);
		this._grd_layout(objForm, objGrid, objForm.dsGridLayout);
	}
	else if (svcID == "gridcombo") {
		
		var usComboList = objGrid.usComboList;
		for(var c = 0 ; c < usComboList.length; c++) {
			var ds = objForm[usComboList[c]];
			if (!this.gfnIsNull(ds)) {
				ds.updateColID(0, "CODE");
				ds.updateColID(1, "TEXT");
				
				var ds_combo = new Dataset();
				ds_combo.copyData(ds);
				
				if(ds_combo.rowcount > 0) {
					var nrow = ds_combo.insertRow(0);
					ds_combo.setColumn(nrow, "CODE", "");
					ds_combo.setColumn(nrow, "TEXT", "");
				}
				
				var comboDsId = "bind_" + usComboList[c];
				if(this.gfnLookup(this, comboDsId) != null) {
					this.removeChild(comboDsId);
				}
				this.addChild(comboDsId, ds_combo);
			}
		}
		
		if(objGrid.render != true) {
			var func = this.lookupFunc(objGrid.AfterInit);
			if (func != null) {
				func.call(objGrid);
			}
			objGrid.render = true;
		}
	}
};

pForm._grd_layout = function(objForm, objGrid, dsLayout, isReset) {
	if(!useGridLayout) return;
	if(isReset==null) isReset = false;
	if(objGrid.popupMenu!=null) {
		var objMenu = objGrid.popupMenu;
		var dsMenu = objMenu.getInnerDataset();
		if(objGrid.layout==false) {
			var frow = dsMenu.findRow("id", "layout");
			if(frow > -1) {
				dsMenu.setColumn(frow, "enable", "false");
			}
		}
		else {
			if(isReset) {
				for(var i = dsMenu.rowcount-1; i >=0; i--) {
					if(dsMenu.getColumn(i, "id") == "layout#") {
						dsMenu.deleteRow(i);
					}
				}
			}
			
			if(dsMenu.findRow("id", "layout#") == -1) {
				for(var i = dsLayout.rowcount-1; i >=0 ; i--) {
					var id_grid = dsLayout.getColumn(i, "ID_GRID");
					var id_custom = dsLayout.getColumn(i, "ID_CUSTOM");
					if(!this.gfnIsNull(id_custom)) {
						id_grid += "#" + id_custom;
					}
					var nrow = dsMenu.insertRow(3);
					dsMenu.setColumn(nrow, "id", "layout#");
					dsMenu.setColumn(nrow, "level", "1");
					if(objGrid.ID_GRID == id_grid) {
						dsMenu.setColumn(nrow, "caption", "▶ "+dsLayout.getColumn(i, "NM_GRID"));
					} else {
						dsMenu.setColumn(nrow, "caption", dsLayout.getColumn(i, "NM_GRID"));
					}
					dsMenu.setColumn(nrow, "enable", "true");
					dsMenu.setColumn(nrow, "userdata", id_grid);
					dsMenu.setColumn(nrow, "upmenu", "layout");
				}
			}
		}
	}
}

pForm._grd_set_comp = function(objForm, objGrid) {

	// 퍼센트 처리용 함수
	if(objGrid._comp_gfnAppendCommaPer == null) {
		objGrid._comp_gfnAppendCommaPer = function(num, fixed, comma) {
			if(Number.isNaN(num) || num == "") num = "0";
			var n = String(num);
			var slen = 0;
			if(comma == true) {
				n = objForm.gfnAppendComma(num);
			}
			if(n.lastIndexOf('.') > -1) {
				slen = n.substring(n.lastIndexOf('.')+1).length;
				n = n.substring(0, n.lastIndexOf('.'));
			}
			
			if(fixed > 0) {
				if(fixed >= slen) {
					return num;
				}
				var sem = 1;
				for(var i = 0; i < fixed; i++) {
					sem = sem * 10;
				}
				var sosu = Math.floor(num*(sem))/sem;
				sosu = sosu.toFixed(fixed);
				//var sosu = Number(num).toFixed(fixed);
				if(sosu.lastIndexOf('.') > -1) {
					n += sosu.substring(sosu.lastIndexOf('.'));
				}
			}
			return n;
		};
	}
	
	// 퀀텀 그리드 텍스트	
	if(objGrid._comp_gfnSetSubSumText == null) {
		objGrid._comp_gfnSetSubSumText = function(nRow, objDs, objGrid) {
			//현재 Row Idx의 Level 값
			var nLevel = objDs.getRowLevel(nRow);
			
			//Level이 0일 경우 텍스트를 공백으로 설정
			if(nLevel==0) return "";
			
			//Level이 0이 아닐 경우 [현재 레벨에 해당하는 컬럼의 값 (하위 노드의 갯수)] 형태의 텍스트 설정
			var cell = objGrid.getBindCellIndex("body", objDs.treecolumnlist[objDs.treecolumnlist.length-(nLevel)]);
			var cellText = objGrid.getCellText(objGrid.getTreeRow(nRow), cell);
			return (cellText==null?"":cellText)+" ("+objGrid.getTreeChildCount(nRow)+")";
			//return objDs.getColumn(nRow+nLevel, objDs.treecolumnlist[objDs.treecolumnlist.length-(nLevel)])+" ("+objGrid.getTreeChildCount(nRow)+")";
		}
	}
}

pForm._grd_set = function(objForm, objGrid, objGridInfo, objSpec) {
	var objDs = objGrid.getBindDataset();
	objDs.bindgrid = objGrid;

	if (objGrid._hasTree) {
		objGrid._hasTree = false;
	}

	objGrid.set_formats("<Formats><Format id=\"default\"/></Formats>");
	if(objGridInfo.rowcount == 0) {
		trace("Error: 그리드 정보가 없습니다.");
		return;
	}
	
	var cfunc = this.lookupFunc(objGrid.CustomGrid);
	if (cfunc != null) {
		cfunc.call(objGridInfo, objSpec);
	}
	
	if(objSpec.rowcount == 0) {
		trace("Error: 그리드 상세정보가 없습니다.");
		return;
	}
	
	// 별도 처리 function
	this._grd_set_comp(objForm, objGrid);
	
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false);	
	objDs.set_enableevent(false); 
	
	objGrid.set_nodataimage('theme://images/Nodata.png');
	objGrid.set_selecttype("multiarea");
	//objGrid.set_autoenter("select");
	objGrid.set_cellsizingtype("col");
	objGrid.set_cellmovingtype("col");
	//objGrid.set_autosizingtype("row");
	objGrid.set_extendsizetype("row");
	objGrid.set_autoupdatetype("itemselect"); // comboselect, dateselect, itemselect
	//objGrid.set_fastvscrolltype("topcenterbottomdisplay");
	objGrid.set_treeusecheckbox(false);
	objGrid.set_treeinitstatus("expand,all");

	if(objGrid.render != true) {
		objGrid.addEventHandler("onselectchanged", this._grd_onselectchanged, this);
		objGrid.addEventHandler("onkeydown", this._grd_onkeydown, this);
		//objGrid.addEventHandler("onexpanddown", this._grd_onexpanddown, this);	
		objGrid.addEventHandler("onexpandup", this._grd_onexpandup, this);	
		//objGrid.addEventHandler("oncloseup", this._grd_oncloseup, this);
		//objGrid.addEventHandler("oncolresized", this._grd_oncolresized, this);
		//objGrid.addEventHandler("onkeyup", this._grd_onkeyup, this);	
		//objGrid.addEventHandler("oncellclick", this._grd_oncellclick, this);
		objGrid.addEventHandler("onvscroll", this._grd_onvscroll, this);
		//objGrid.addEventHandler("onmouseenter", this._grd_onmouseenter, this);
	}
	
	var expr_csspattern = "expr:dataset.getRowLevel(currow)>0 ? dataset.getRowLevel(currow) == 1 ? 'subtotal' : 'subtotal'+dataset.getRowLevel(currow) : (nx_flag !=null && nx_flag.substr(0, 1) == 'I' ? {z}'insert{c}' : nx_flag !=null && nx_flag.substr(0, 1) == 'U' ? {z}'update{c}' : nx_flag !=null && nx_flag.substr(0, 1) == 'D' ? {z}'delete{c}' : nx_flag !=null && nx_flag.substr(0, 1) == '#' ? 'filter' : {x})";
	
	var usReadOnlyY = [];
	var usReadOnlyU = [];
	var usColumnInfo = [];
	var usRequired = [];
	var usCodefind = [];
	var usCodefindTxt = [];
	var usCodefindInfo = {};
	var usCalendarY = [];
	var usCalendarYM = [];
	var usComboList = [];
	var usMultiLine = [];
	var usAtReadOnly = [];
	var usAtRowHidden = [];
	var usCheckBoxYN = [];
	var usTySummary = [];
	var usButtonTxt = [];
	
	var grid_readonly = objGridInfo.getColumn(0, "YN_READONLY");
	var grid_headerrows = objGridInfo.getColumn(0, "NO_FIXEDROWS");
	var grid_frozencol = objGridInfo.getColumn(0, "NO_FROZENCOL");
	var grid_row_filter = objGridInfo.getColumn(0, "YN_AUTOFILTER");
	var grid_ty_group = objGridInfo.getColumn(0, "TY_GROUP");
	var grid_yn_grouppanel = objGridInfo.getColumn(0, "YN_GROUPPANNEL");
	var grid_yn_reversesum = objGridInfo.getColumn(0, "YN_REVERSESUM");
	var grid_yn_num = objGridInfo.getColumn(0, "YN_NUM");
	var grid_yn_nosort = objGridInfo.getColumn(0, "YN_NOSORT");
	var grid_yn_nogroup = objGridInfo.getColumn(0, "YN_NOGROUP");
	var grid_ty_add = objGridInfo.getColumn(0, "TY_ADD");
	var grid_yn_autofit = objGridInfo.getColumn(0, "YN_AUTOFIT");
	var grid_tree_column = objGrid.TreeColumn;
	var grid_level_column = objGrid.LevelColumn;
	
	if(!this.gfnIsNull(grid_frozencol)) {
		grid_frozencol = nexacro.toNumber(grid_frozencol);
	}
	
	if (grid_yn_reversesum == "Y") {
		objDs.set_reversesubsum(true);
	}
	
	objGrid.yn_num = grid_yn_num;
	if (grid_yn_nosort == "Y") {
		objGrid.sort = "false";
	}
	if (grid_yn_nogroup == "Y") {
		objGrid.grouping = "false";
	}
	if (grid_ty_add == "Y") {
		objGrid.ty_add = "bottom";
	}
	if (grid_yn_autofit == "Y") {
		objGrid.yn_autofit= "col";
		objGrid.set_autofittype("col");
	}
	
	var nrow = objGrid.appendContentsRow("head");
	objGrid.appendContentsRow("body");
		
	objGrid.info = grid_readonly;
	objGrid.yn_filter = grid_row_filter;
	
	this._gfnGridHeaderSet(objGrid, objSpec, grid_headerrows);
	
	var is_soke = false;
	var is_total = false;
	if (grid_ty_group == "S") {
		is_soke = true;
	} else if (grid_ty_group == "T" || grid_ty_group == "Y") {
		is_total = true;
	} else if (grid_ty_group == "B") {
		is_soke = true;
		is_total = true;
	}
	
	var cnt_group = 0;
	var arr_group = [];
	if (is_total) {
		objGrid.appendContentsRow("summary");
	}
	
	var expr_newpattern = expr_csspattern;
	var arr_grayback = [];
	var arr_highlightback = [];
	var arr_highlightfore = [];
	for(var i = 0; i < objSpec.rowcount; i++) {
		var ds_field = objSpec.getColumn(i, "DS_FIELD");
 		var at_grayback = objSpec.getColumn(i, "AT_GRAYBACK");
		var at_highlightback = objSpec.getColumn(i, "AT_HIGHLIGHTBACK");
		var at_highlightfore = objSpec.getColumn(i, "AT_HIGHLIGHTFORE");
		
		if (!this.gfnIsNull(at_grayback)) {
			arr_grayback.push(ds_field + " " + at_grayback);
		}
		if (!this.gfnIsNull(at_highlightback)) {
			arr_highlightback.push(ds_field + " " + at_highlightback);
		}
		if (!this.gfnIsNull(at_highlightfore)) {
			arr_highlightfore.push(ds_field + " " + at_highlightfore);
		}
	}
	
	if(arr_grayback.length > 0) {
		expr_newpattern = expr_newpattern.replace(/\{x\}/g, "{x2}" + arr_grayback.join(" || ") + " ? 'BACK_ReadOnly{c}' : {x}");
	}
	if(arr_highlightback.length > 0) {
		var x2 = "";
		if(expr_newpattern.indexOf('{x2}') == -1) {
			x = "{x2}";
		}
		expr_newpattern = expr_newpattern.replace(/\{x\}/g, x2 + arr_highlightback.join(" || ") + " ? 'BACK_GangJo{c}' : {x}");
	}
	if(arr_highlightfore.length > 0) {
		var x2 = "";
		if(expr_newpattern.indexOf('{x2}') == -1) {
			x = "{x2}";
		}
		expr_newpattern = expr_newpattern.replace(/\{x\}/g, x2 + arr_highlightfore.join(" || ") + " ? 'Red{c}' : {x}");
	}
	
	
	if(!this.gfnIsNull(this.dsGridComboParam)) {
		this.dsGridComboParam.clearData();
	}
	
	if(objDs.getColumnInfo("nx_flag") == null) {
		objDs.addColumn("nx_flag", "string");
	}
	if(objDs.getColumnInfo("nx_sort") == null) {
		objDs.addColumn("nx_sort", "string");
	}
	
	for(var i = 0; i < objSpec.rowcount; i++) {
		
		var no_width = objSpec.getColumn(i, "NO_WIDTH");
		var yn_readonlyu = objSpec.getColumn(i, "YN_READONLY"); // 읽기전용(Y,U)
		var yn_essential = objSpec.getColumn(i, "YN_ESSENTIAL");
		var ty_celltype = objSpec.getColumn(i, "TY_CELLTYPE");
		var ty_align = objSpec.getColumn(i, "TY_ALIGN");
		var ty_input = objSpec.getColumn(i, "TY_INPUT");
		var ds_field = objSpec.getColumn(i, "DS_FIELD");
		var ds_header1 = objSpec.getColumn(i, "DS_HEADER1");
		var ds_header2 = objSpec.getColumn(i, "DS_HEADER2");
		var ds_header3 = objSpec.getColumn(i, "DS_HEADER3");
		var ds_combolist = objSpec.getColumn(i, "DS_COMBOLIST");
		var cd_codefind = objSpec.getColumn(i, "CD_CODEFIND");
		var nm_codefind = objSpec.getColumn(i, "NM_CODEFIND");
		var ds_resultalias = objSpec.getColumn(i, "DS_RESULTALIAS");
		var no_maxlength = objSpec.getColumn(i, "NO_MAXLENGTH");
		//var ty_ime = objSpec.getColumn(i, "TY_IME");
		var ty_fixed = objSpec.getColumn(i, "TY_FIXED");
		var no_group = objSpec.getColumn(i, "NO_GROUP");
		var no_merge = objSpec.getColumn(i, "NO_MERGE");
		var ty_summary = objSpec.getColumn(i, "TY_SUMMARY");
		var ex_summary = objSpec.getColumn(i, "EX_SUMMARY");
		var ds_header = (grid_headerrows == 3 ? ds_header3 : grid_headerrows == 2 ? ds_header2 : ds_header1);
		var at_colback = objSpec.getColumn(i, "AT_COLBACK");
		var at_colfore = objSpec.getColumn(i, "AT_COLFORE");
 		var at_readonly = objSpec.getColumn(i, "AT_READONLY");
		var at_rowhidden = objSpec.getColumn(i, "AT_ROWHIDDEN");
		var ty_inputmode = objSpec.getColumn(i, "TY_INPUTMODE");

		var expr_col = [];
		var expr_custom = [];

		if (no_width==null) no_width = 0;
		if (ty_align==null) ty_align = "left";
		if (no_maxlength==null) no_maxlength = 0;
		
		if(objDs.useclientlayout == false && this.gfnTrim(ds_field) != "" && objDs.getColumnInfo(ds_field)==null) {
			if (ty_celltype == "INT") {
				objDs.addColumn(ds_field, "int");
			} else if (ty_celltype == "DOUBLE") {
				objDs.addColumn(ds_field, "BigDecimal");
			} else {
				objDs.addColumn(ds_field, "string");
			}
		}
		
		var displaytype = "normal";
		var edittype = "none";
		var dateformat = "";
		var editformat = "";
		var expandshow = false;
		
		var per_apply = false;
		var per_giho = "%";
		var per_comma = false;
		var per_fixed = 0;
		
		switch(ty_input) {
			case "READONLY":
				edittype = "none";
				break;
			case "KEYIN":
				displaytype = "text";
				edittype = "text";
				break;
			case "MULTILINE":
				displaytype = "text";
				edittype = "textarea";
				expandshow = true;	
				usMultiLine.push(ds_field);
				break;
			case "LIST":
				displaytype = "combotext"; // combocontrol 
				edittype = "combo";
				break;
			case "CODEFIND":
				displaytype = "text";
				edittype = "text";
				expandshow = true;					
				usCodefind.push(ds_field);
				break;
			case "CODEFINDTXT":
				displaytype = "text";
				edittype = "text";
				expandshow = true;	
				usCodefindTxt.push(ds_field);
				break;
			case "CALENDAR_Y":
				displaytype = "mask"; //date
				edittype = "mask";	//date
				dateformat = "yyyy";
				editformat = "yyyy";
				ds_combolist = "####";
				
				//edittype = "text";
				expandshow = true;
				usCalendarY.push(ds_field);
				break;
			case "CALENDAR_YM":
				displaytype = "mask";
				edittype = "mask";
				dateformat = "yyyy-MM";
				editformat = "yyyyMM";
				ds_combolist = "####-##";
				
				//edittype = "text";
				expandshow = true;
				usCalendarYM.push(ds_field);
				break;
			case "CALENDAR_YMD":
				displaytype = "date";
				edittype = "date";	
				dateformat = "yyyy-MM-dd";	
				editformat = "yyyyMMdd";
				break;
			case "DATETIME":
				displaytype = "date";
				edittype = "mask";	
				if(this.gfnIsNull(ds_combolist)) {
					//dateformat = "yyyy-MM-dd";
					//editformat = "####-##-##";
 					dateformat = "yyyy-MM-dd HH:mm";
 					editformat = "####-##-## ##:##";
				} else {
					dateformat = ds_combolist;
					editformat = dateformat.replace("yyyy", "####").replace("MM", "##").replace("dd", "##").replace("HH", "##").replace("mm", "##").replace("ss", "##");
				}
				break;
			case "BUTTON":
				displaytype = "text";
				expr_col.push("showexpand");
				expandshow = true;
				break;
			case "BUTTON-IN":
				displaytype = "text";
				//edittype = "text";
				expandshow = true;
				break;
			case "BUTTON-TXT":
				displaytype = "text";
				edittype = "text";
				expandshow = true;
				usButtonTxt.push(ds_field);
				break;
			case "CHECKBOX":
				displaytype = "checkboxcontrol";
				edittype = "checkbox";
				break;
			case "CHECKBOX_YN":
				displaytype = "checkboxcontrol";
				edittype = "checkbox";
				usCheckBoxYN.push(ds_field);
				break;
			case "CHECKBOXALL":
				displaytype = "checkboxcontrol";
				edittype = "checkbox";
				break;
			case "CHECKBOXALL_YN":
				displaytype = "checkboxcontrol";
				edittype = "checkbox";
				usCheckBoxYN.push(ds_field);
				break;
		}
		
		if (i <= grid_frozencol) {
			objGrid.setFormatColProperty(i, "band", "left");
		} else {
			if (ty_fixed == "RIGHT") {
				objGrid.setFormatColProperty(i, "band", "right");
			}
		}
		
		if (yn_readonlyu == "Y") {
			//edittype = "none";
			usReadOnlyY.push(ds_field);
		}
		else if (yn_readonlyu == "U") {
			usReadOnlyU.push(ds_field);
		}
		
		if (displaytype == "normal" || displaytype == "text") {
			if (ty_celltype == "INT" || ty_celltype == "DOUBLE") {
				displaytype = "number";
			}
			if (!expandshow && !this.gfnIsNull(ds_combolist)) {
				displaytype = "mask";
				if(edittype != "none") {
					edittype = "mask";
				}
			}
		}
		
		
		/*
		넥사 지원의 한계로 엑셀은 별도 솔루션으로 처리하는 것으로..
		if (ty_input == "EXCEL") {
			objGrid.is_excel_column = true;
			displaytype = "normal";
		}
		*/
		
		usColumnInfo.push(ds_field + ";" + ds_header);
		if (yn_essential == "Y") {
			usRequired.push(ds_field + ";" + ds_header);
		}
		if (!this.gfnIsNull(cd_codefind)) {
			var j = { DS_FIELD: ds_field, CD_CODEFIND: cd_codefind, NM_CODEFIND: nm_codefind, DS_RESULTALIAS: ds_resultalias};
			usCodefindInfo[ds_field] = j;
		}
		
		if (!this.gfnIsNull(at_colback)) {
			expr_col.push("BACK_" + at_colback);
		}
		if (!this.gfnIsNull(at_colfore)) {
			expr_col.push(at_colfore);
		}
		
		var expr_cssclass = expr_newpattern;
		if(expr_col.length > 0) {
			expr_cssclass = expr_cssclass.replace(/\{z\}/g, "");
			expr_cssclass = expr_cssclass.replace(/\{c\}/g, "," + expr_col.join(','));
			expr_cssclass = expr_cssclass.replace(/\{x\}/g, "'" + expr_col.join(',') + "'");			
		} else {
			expr_cssclass = expr_cssclass.replace(/\{z\}/g, "");
			expr_cssclass = expr_cssclass.replace(/\{c\}/g, "");
			expr_cssclass = expr_cssclass.replace(/\{x\}/g, "''");
		}
		expr_cssclass = expr_cssclass.replace(/\{x2\}/g, "");
		
		objGrid._getBodyCellInfo(i).expr_col = expr_col;
		objGrid._getBodyCellInfo(i).expr_newpattern = expr_newpattern;
		
		if (!this.gfnIsNull(at_readonly)) {
			var j = { DS_FIELD: ds_field, AT_READONLY: at_readonly };
			usAtReadOnly.push(j);
		}
		if (!this.gfnIsNull(at_rowhidden)) {
			var j = { DS_FIELD: ds_field, AT_ROWHIDDEN: at_rowhidden };
			usAtRowHidden.push(j);
		}
		
		
		objGrid.setFormatColProperty(i, "size", no_width);
		if (i == 0) {						
			//objGrid.setCellProperty("head", 0, "text", "");
			if(grid_yn_num == "Y") {
				if(grid_row_filter == "Y") {
					objGrid.setCellProperty("body", 0, "text", "expr:nx_flag !=null ? nx_flag.substr(0, 1) : currow");
				} else {
					objGrid.setCellProperty("body", 0, "text", "expr:nx_flag !=null ? nx_flag.substr(0, 1) : currow+1");
				}
			} else {
				objGrid.setCellProperty("body", 0, "text", "expr:nx_flag !=null ? nx_flag.substr(0, 1) : ''");
			}
			objGrid.setCellProperty("body", 0, "textAlign", "center");
			objGrid.setCellProperty("body", 0, "cssclass", expr_cssclass);
		}
		else {
			//objGrid.setCellProperty("head", i, "text", ds_header1);
			objGrid.setCellProperty("body", i, "text", "bind:" + ds_field);
			objGrid.setCellProperty("body", i, "textAlign", ty_align.toLowerCase());
			objGrid.setCellProperty("body", i, "cssclass", expr_cssclass);
			if (ds_field == grid_tree_column) {
				objGrid.IsTree = true;
				objGrid._IsTree = true;
				objGrid.tree_level_column = grid_level_column;
				objGrid._tree_level_column = grid_level_column;
				objGrid.setCellProperty("body", i, "displaytype", "treeitemcontrol");
				objGrid.setCellProperty("body", i, "treelevel", "bind:" + grid_level_column);
				objGrid.setCellProperty("body", i, "edittype", "expr:nx_flag=='#'?'text':'tree'");
			} else {
				if (!this.gfnIsNull(ty_summary)) {
					objGrid.setCellProperty("body", i, "displaytype", displaytype);
				} else {
					if (ty_celltype == "INT" || ty_celltype == "DOUBLE") {
						// 소계부분 숫자형은 기본 sum동작을 하기 때문에 ty_summary가 설정안된 컬럼은 표시를 안해주기 위함.
						objGrid.setCellProperty("body", i, "displaytype", "expr:dataset.getRowLevel(currow)>0?'none':'" + displaytype+"'");
					} else {
						objGrid.setCellProperty("body", i, "displaytype", displaytype);
					}
				}
				if(edittype == "none") {
					objGrid.setCellProperty("body", i, "edittype", "expr:nx_flag=='#'?'text':'none'");
				} else {				
					objGrid.setCellProperty("body", i, "edittype", edittype);
				}
			}
			
			objGrid._getBodyCellInfo(i).orgtype = edittype;
			objGrid.setCellProperty("body", i, "calendarautoselect", "true");
			objGrid.setCellProperty("body", i, "editautoselect", "true");
			objGrid.setCellProperty("body", i, "maskeditautoselect", "true");
			objGrid.setCellProperty("body", i, "textareaautoselect", "true");
			
			if (expandshow == true) {
				//objGrid.setCellProperty("body", i, "expandchar", "..." );
				//objGrid.setCellProperty("body", i, "expandimage", "theme://images/icons8-codefind-16.png" );
				objGrid.setCellProperty("body", i, "expandshow", "expr:nx_flag=='#'?'hide':'show'");
			}
			
			if(!this.gfnIsNull(ds_combolist) && ds_combolist.length > 0) {
				// 퍼센트의 경우
				if(ds_combolist[ds_combolist.length-1] == '%') {
					var comma = false;
					var giho = "%";
					var fixed = 0;
					ds_combolist = ds_combolist.substring(0, ds_combolist.length-1);
					if(ds_combolist.indexOf(',') > -1) {
						comma = true;
					}
					// 퍼센트 앞에 스페이스 있는 경우
					if(ds_combolist.length > 0) {
						if(ds_combolist[ds_combolist.length-1] == ' ') {
							ds_combolist = ds_combolist.substring(0, ds_combolist.length-1);
							giho = " %";
						}
					}
					if(ds_combolist.lastIndexOf('.') > -1) {
						fixed = ds_combolist.length - ds_combolist.lastIndexOf('.') - 1;
					}
					displaytype = "text";
					edittype = "text";
					objGrid.setCellProperty( "body", i, "expr", "expr:" + ds_field + "==null?'':comp._comp_gfnAppendCommaPer(" + ds_field + "," + fixed + ", " + (comma==true?"true":"false") + ")" + "+'" + giho + "'");
					per_apply = true;
					per_giho = giho;
					per_comma = comma;
					per_fixed = fixed;
				}
			}
			
			if(displaytype == "mask") {
				objGrid.setCellProperty("body", i, "maskeditformat", ds_combolist);
				objGrid.setCellProperty("body", i, "maskedittrimtype", "both");
				objGrid.setCellProperty("body", i, "maskedittype", "string");
				
				if(ty_input == "CALENDAR_Y" || ty_input == "CALENDAR_YM") {
					objGrid.setCellProperty("body", i, "maskeditclipmode", "excludespace");
					objGrid.setCellProperty("body", i, "maskeditmaskchar", " ");
				}
				else {
					if (ty_celltype == "INT" || ty_celltype == "DOUBLE") {
						objGrid.setCellProperty("body", i, "maskeditlimitbymask", "decimal");	
						objGrid.setCellProperty("body", i, "maskedittype", "number");
						
						if(no_maxlength > 0) {
							objGrid.setCellProperty( "body", i, "maskeditlimitbymask", "both");	
						}
					}
				}
			}
			else if (displaytype == "date") {				
				//<-- CALENDAR_Y, CALENDAR_YM 은 mask타입으로 변경함. 현재 이부분은 사용안함.
				if(ty_input == "CALENDAR_Y" || ty_input == "CALENDAR_YM") {
					objGrid.setCellProperty( "body", i, "calendarbuttonsize", "0 0");
					objGrid.setCellProperty( "body", i, "calendarpopuptype", "none");
				} 
				// -->
				objGrid.setCellProperty( "body", i, "calendardateformat", dateformat);
				objGrid.setCellProperty( "body", i, "calendareditformat", editformat);
				objGrid.setCellProperty( "body", i, "calendardisplaynulltype", "none");
				
				// DATETIME 수정시 처리
				if(edittype == "mask") {
					objGrid.setCellProperty("body", i, "maskeditformat", editformat);
					objGrid.setCellProperty("body", i, "maskedittrimtype", "both");
					objGrid.setCellProperty("body", i, "maskedittype", "string");					
				}
			}
			else if (displaytype == "combotext") {
				var comboDsId = objGrid.id + "_Combo_" + ds_field + "_" + i;
				if(this.gfnIsNull(ds_combolist))
				{
					trace("컬럼정보에 LIST >> COMBOLIST 를 입력하세요!!!");
				} else {
					if (ds_combolist.startsWith("EXEC") == true) {
						if(this.gfnIsNull(this.dsGridComboProc)) {
							this.dsGridComboProc = new Dataset();
							this.dsGridComboProc.addColumn("TARGET", "string");
							this.dsGridComboProc.addColumn("SP", "string");
							//this.dsGridComboProc.addColumn("CLOB", "string");
							this.dsGridComboProc.addRow();
							this.dsGridComboProc.setColumn(0, "TARGET", "select");
							this.dsGridComboProc.setColumn(0, "SP", "DZZPR_EXECUTE_COMMAND2");
							//this.dsGridComboProc.setColumn(0, "CLOB", "DS_COMBOLIST");
								
							this.dsGridComboParam = new Dataset();
							this.dsGridComboParam.addColumn("DS_COMMAND", "string");
						}
						
						var prow = this.dsGridComboParam.addRow();
						if (ds_combolist.indexOf("@AUTH_ID_USER") > -1) {
							ds_combolist = ds_combolist.replace("@AUTH_ID_USER", "'"+this.objApp.gdsUserInfo.getColumn(0, "ID_USER")+"'");
						}
						if (ds_combolist.indexOf("@AUTH_CD_CORP") > -1) {
							ds_combolist = ds_combolist.replace("@AUTH_CD_CORP", "'"+this.objApp.gdsUserInfo.getColumn(0, "CD_CORP")+"'");
						}
						if (ds_combolist.indexOf("@AUTH_CD_DEPT") > -1) {							
							ds_combolist = ds_combolist.replace("@AUTH_CD_DEPT", "'"+this.objApp.gdsUserInfo.getColumn(0, "CD_DEPT")+"'");
						}					
						
						this.dsGridComboParam.setColumn(prow, "DS_COMMAND", ds_combolist);
						
						var dsGridComboList = new Dataset();
						if(objForm.gfnLookup(this, comboDsId) != null) {
							objForm.removeChild(comboDsId);
						}
						objForm.addChild(comboDsId, dsGridComboList);
						usComboList.push(comboDsId);
						
	// 						objForm.addChild("dsGridComboProc", dsGridComboProc);
	// 						objForm.addChild("dsGridComboParam", dsGridCombo);
	// 						objForm.addChild("dsGridComboList", dsGridComboList);					
					} 
					else {
						this._gfnGridComboSet(ds_combolist, "bind_" + comboDsId);
					}
				}
				
				objGrid.setCellProperty("body", i, "combotype", "caseifilterlike");
				objGrid.setCellProperty("body", i, "comboautoselect", true);				
				objGrid.setCellProperty("body", i, "combocodecol", "CODE");
				objGrid.setCellProperty("body", i, "combodatacol", "TEXT");
				objGrid.setCellProperty("body", i, "combodataset", "bind_" + comboDsId);
			}
			
			// nexa, ie 만 적용가능. 지정이 안된경우 현재ime모드로 작동. (한글지정 컬럼 편집후 계속 한글입력상태..)
			// 불편하기 때문에 제거. 
// 			if (!this.gfnIsNull(ty_ime)) {
// 				if (ty_ime == "한글") {
// 					objGrid.setCellProperty( "body", i, "editimemode", "hangul" );
// 					objGrid.setCellProperty( "body", i, "textareaimemode", "hangul" );
// 				}
// 				else if (ty_ime == "영문") {
// 					objGrid.setCellProperty( "body", i, "editimemode", "alpha" );
// 					objGrid.setCellProperty( "body", i, "textareaimemode", "alpha" );
// 				}
// 			}

			if (edittype == "text") {
				if(no_maxlength > 0) {
					objGrid.setCellProperty( "body", i, "editmaxlength", no_maxlength);
				}
				
				if(ty_inputmode == "upper" || ty_inputmode == "lower") {
					objGrid.setCellProperty( "body", i, "editinputmode", ty_inputmode);
				}
			}
			else if (edittype == "textarea") {
				if(no_maxlength > 0) {
					objGrid.setCellProperty( "body", i, "textareamaxlength", no_maxlength);
				}
				objGrid.setCellProperty( "body", i, "textareascrolltype", "vertical");
				
				if(ty_inputmode == "upper" || ty_inputmode == "lower") {
					objGrid.setCellProperty( "body", i, "textareainputmode", ty_inputmode);
				}
			}
// 			else if (edittype == "checkbox") {
// 				objGrid.setCellProperty("body", i, "subsumtext", "");
// 			}
			
			if (ty_input == "CHECKBOX_YN" || ty_input == "CHECKBOXALL_YN") {
				objGrid.setCellProperty( "body", i, "expr", "expr:" + ds_field + "=='Y'?'1':'0'");
			}			
			
			if (!this.gfnIsNull(no_group) && nexacro.toNumber(no_group) > 0) {
				arr_group.push(no_group + ":" + ds_field + ":" + ds_header);
			}
			if (!this.gfnIsNull(no_merge) && nexacro.toNumber(no_merge) > 0) {
				objGrid.setCellProperty("body", i, "suppress", no_merge);
			}
		
			if (!this.gfnIsNull(ty_summary)) {
				objGrid.setCellProperty("summ", i, "textAlign", ty_align.toLowerCase());
				if (displaytype=="combotext" || displaytype=="checkboxcontrol" || ty_input=="CALENDAR_Y" || ty_input=="CALENDAR_YM" || ty_input=="CALENDAR_YMD" || ty_input=="DATETIME") {
					objGrid.setCellProperty("summ", i, "displaytype", "text");
				} else {
					objGrid.setCellProperty("summ", i, "displaytype", displaytype);
				}
					
				if (displaytype == "mask") {
					objGrid.setCellProperty("summ", i, "maskeditformat", ds_combolist);
					objGrid.setCellProperty("summ", i, "maskedittrimtype", "both");
					objGrid.setCellProperty("summ", i, "maskedittype", "string");
					
					if (ty_celltype == "INT" || ty_celltype == "DOUBLE") {
						objGrid.setCellProperty("summ", i, "maskeditlimitbymask", "decimal");	
						objGrid.setCellProperty("summ", i, "maskedittype", "number");
					}
				}
				
				if(this.gfnIsNull(ex_summary)) {
					var expr_summ = "";
					switch (ty_summary) {
						case "SUM":
							expr_summ = "getCaseSum";
							break;
						case "AVG":
							expr_summ = "getCaseAvg";
							break;
						case "MAX":
							expr_summ = "getCaseMax";
							break;
						case "MIN":
							expr_summ = "getCaseMin";
							break;
						case "CNT":
							expr_summ = "getCaseCount";
							ty_summary = "COUNT";
							break;
					}
					if (expr_summ != "") {				
						if (expr_summ != "getCaseCount" && per_apply) {
							objGrid.setCellProperty("summ", i, "text", "expr:comp._comp_gfnAppendCommaPer(dataset." + expr_summ + "(\"nx_flag!='#'\",\"" + ds_field + "\")" + "," + per_fixed + ", " + (per_comma==true?"true":"false") + ")" + "+'" + per_giho + "'");
						} else {
							objGrid.setCellProperty("summ", i, "text", "expr:dataset." + expr_summ + "(\"nx_flag!='#'\",\"" + ds_field + "\")");
						}						
					}
				} else {
					var expr_summ = "";
					switch (ty_summary) {
						case "SUM":
							expr_summ = "getCaseSum";
							break;
						case "AVG":
							expr_summ = "getCaseAvg";
							break;
						case "MAX":
							expr_summ = "getCaseMax";
							break;
						case "MIN":
							expr_summ = "getCaseMin";
							break;
						case "CNT":
							expr_summ = "getCaseCount";
							ty_summary = "COUNT";
							break;
					}
					if (expr_summ != "") {				
						if (expr_summ != "getCaseCount" && per_apply) {
							objGrid.setCellProperty("summ", i, "text", "expr:comp._comp_gfnAppendCommaPer(dataset." + expr_summ + "(\"nx_flag!='#' && " + ex_summary + "=='Y'\",\"" + ds_field + "\")" + "," + per_fixed + ", " + (per_comma==true?"true":"false") + ")" + "+'" + per_giho + "'");
						} else {
							objGrid.setCellProperty("summ", i, "text", "expr:dataset." + expr_summ + "(\"nx_flag!='#' && " + ex_summary + "=='Y'\",\"" + ds_field + "\")");
						}						
					}
				}
				
				usTySummary.push({CD_FIELD: ds_field, TY_SUMMARY: ty_summary});
			}
		}
	}

// 	if (arr_group.length > 0) {
// 		arr_group = arr_group.sort();
// 		var arr_group_conv = [];
// 		for(var g = 0; g < arr_group.length; g++) {
// 			arr_group_conv.push(arr_group[g].split(':')[1]);
// 		}
// 		objDs.set_keystring("S:-nx_flag,G:" + arr_group_conv.join(','));
// 	}

	objGrid.yn_grouppanel = "N";
	if (objGrid._IsTree != true && grid_yn_grouppanel == "Y") {
		objGrid.yn_grouppanel = grid_yn_grouppanel;
		objGrid.grouppanel.set_height(30);
	}
	
	objGrid.HeadRows = grid_headerrows;
	objGrid.IsFirstGroup = false;
	objGrid.usGroup = arr_group;
	
	objGrid.usReadOnlyY = usReadOnlyY;
	objGrid.usReadOnlyU = usReadOnlyU;
	objGrid.usColumnInfo = usColumnInfo;
	objGrid.usRequired = usRequired;
	objGrid.usCodefind = usCodefind;
	objGrid.usCodefindTxt = usCodefindTxt;
	objGrid.usCodefindInfo = usCodefindInfo;
	objGrid.usCalendarY = usCalendarY;
	objGrid.usCalendarYM = usCalendarYM;
	objGrid.usComboList = usComboList;
	objGrid.usMultiLine = usMultiLine;
	objGrid.usAtReadOnly = usAtReadOnly;
	objGrid.usAtRowHidden = usAtRowHidden;
	objGrid.usCheckBoxYN = usCheckBoxYN;
	objGrid.usTySummary = usTySummary;
	objGrid.usButtonTxt = usButtonTxt;
	
	//objDs.addEventHandler("cancolumnchange", this._dataset_cancolumnchange, this);
	if(objGrid.render != true) {
		objDs.addEventHandler("oncolumnchanged", this._dataset_oncolumnchanged, this);	
		objDs.addEventHandler("onload", this._dataset_onload, this);
		objDs.addEventHandler("onrowsetchanged", this._dataset_onrowsetchanged, this);
	}
	
	objGrid.set_enableevent(true);
	objGrid.set_enableredraw(true);
	objDs.set_enableevent(true);
	
	if (usComboList.length > 0) {
		var arrRtnDs = [];
		for(var c = 0 ; c < usComboList.length; c++) {
			//arrRtnDs.push(usComboList[c] + "=select" + c + "0");
			arrRtnDs.push(usComboList[c] + "=select" + c);
		}
		this._grd_transaction("gridcombo", objGrid.id, "dsGridComboProc", "select=dsGridComboParam", arrRtnDs.join(' '), true);
	}
	
// 		objForm.removeChild("dsGridInfoParam");
// 		objForm.removeChild("dsGridInfo");
// 		objForm.removeChild("dsGridSpec");

	this._grd_head_onmouseover(objGrid, objForm);
	
	if(objGrid.render != true) {
		if (is_total) {
			// summary height
			objGrid.setRealRowSize(-2, 30);
		}

		if (usComboList.length == 0) {
			var func = this.lookupFunc(objGrid.AfterInit);
			if (func != null) {
				func.call(objGrid);
			}
			objGrid.render = true;
		}
	}
	
	// 그리드 레이아웃 변경시 처리할 이벤트 호출을 위함
	var func = this.lookupFunc(objGrid.AfterLoad);
	if (func != null) {
		func.call(objGrid, objDs);
	}
};

pForm._gfnGridHeaderSet = function(objGrid, objSpec, grid_headerrows) {
	
	var cnt_enter = 0;
	var defHeadHeight = 32;
	var defHeadHeight2 = 30;
	if(grid_headerrows >= 0) {
		objGrid.setCellProperty("head", 0, "text", "");
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ncol = objGrid.appendContentsCol();
			var ds_header1 = objSpec.getColumn(i, "DS_HEADER1");
			var ty_input = objSpec.getColumn(i, "TY_INPUT");
			var ds_field 	= objSpec.getColumn(i, "DS_FIELD");
			var rm_bigo 	= objSpec.getColumn(i, "RM_BIGO");
			
			if(!this.gfnIsNull(ds_header1)) {
				var ec = (ds_header1.match(/\n/g) || []).length;
				if(ec > cnt_enter) {
					cnt_enter = ec;
				}
			}
			
			objGrid.setCellProperty("head", ncol, "text", ds_header1);
			objGrid.setCellProperty("head", ncol, "tooltiptext", rm_bigo);
			objGrid.setCellProperty("head", ncol, "id", ds_field + "__headCell_" + ncol + "#1");
			if(objSpec.getColumn(i, "YN_ESSENTIAL") == "Y") {
				//objGrid.setCellProperty("head", ncol, "textDecoration", "underline");
				objGrid.setCellProperty("head", ncol, "cssclass", "essential");
			}
			//this._gfnGridGetGridCellObject(objGrid, "head", ncol).head_field = ds_field+"1";
			if(ty_input == "CHECKBOX" || ty_input == "CHECKBOXALL" || ty_input == "CHECKBOX_YN" || ty_input == "CHECKBOXALL_YN") {
				this._gfnGridGetGridCellObject(objGrid, "head", ncol).ty_input = ty_input;
				if(ds_header1 == "체크" || ds_header1 == "선택") { // || ty_input == "CHECKBOXALL") {
					this._gfnGridGetGridCellObject(objGrid, "head", ncol).chkupdate = "N";
				}			
				if(grid_headerrows == 1 && (ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN")) {
					objGrid.setCellProperty("head", ncol, "text", "");				
					objGrid.setCellProperty("head", ncol, "displaytype", "checkboxcontrol");
					objGrid.setCellProperty("head", ncol, "edittype", "checkbox");
				}
			}
		}
		
		if(grid_headerrows == 0) {
			objGrid.setFormatRowProperty(0, "size", 0);
			objGrid.setFormatRowProperty(1, "size", defHeadHeight);
		}
		else if(grid_headerrows == 1) {
			objGrid.setFormatRowProperty(0, "size", defHeadHeight);
		}
		
		if(grid_headerrows > 0 && cnt_enter >= grid_headerrows) {
			objGrid.setFormatRowProperty(0, "size", defHeadHeight + (cnt_enter*8) + ((cnt_enter-1)*7));
		}
	}
	if(grid_headerrows > 1) {
		nrow = objGrid.appendContentsRow("head");
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ds_header2 = objSpec.getColumn(i, "DS_HEADER2");
			var ty_input = objSpec.getColumn(i, "TY_INPUT");
			var ds_field 	= objSpec.getColumn(i, "DS_FIELD");
			var rm_bigo 	= objSpec.getColumn(i, "RM_BIGO");
			
			var ncol = objSpec.rowcount * nrow + i;			
			objGrid.setCellProperty("head", ncol, "text", ds_header2);
			objGrid.setCellProperty("head", ncol, "tooltiptext", rm_bigo);
			objGrid.setCellProperty("head", ncol, "id", ds_field + "__headCell_" + ncol + "#2");
			if(objSpec.getColumn(i, "YN_ESSENTIAL") == "Y") {
				//objGrid.setCellProperty("head", ncol, "textDecoration", "underline");
				objGrid.setCellProperty("head", ncol, "cssclass", "essential");
			}
			//this._gfnGridGetGridCellObject(objGrid, "head", ncol).head_field = ds_field+"2";
			if(ty_input == "CHECKBOX" || ty_input == "CHECKBOXALL" || ty_input == "CHECKBOX_YN" || ty_input == "CHECKBOXALL_YN") {
				this._gfnGridGetGridCellObject(objGrid, "head", ncol).ty_input = ty_input;
				if(ds_header2 == "체크" || ds_header2 == "선택") { // || ty_input == "CHECKBOXALL") {
					var chkCol = this.gfnGetHeadRowCellIndex(objGrid, 1, ds_field);
					this._gfnGridGetGridCellObject(objGrid, "head", chkCol).chkupdate = "N";
				}			
				if(grid_headerrows == 2 && (ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN")) {
					objGrid.setCellProperty("head", ncol, "text", "");				
					objGrid.setCellProperty("head", ncol, "displaytype", "checkboxcontrol");
					objGrid.setCellProperty("head", ncol, "edittype", "checkbox");
				}
			}
		}
		objGrid.setFormatRowProperty(0, "size", defHeadHeight2);
		objGrid.setFormatRowProperty(1, "size", defHeadHeight2);
	}
	if(grid_headerrows == 3) {
		nrow = objGrid.appendContentsRow("head");
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ds_header3 = objSpec.getColumn(i, "DS_HEADER3");
			var ty_input = objSpec.getColumn(i, "TY_INPUT");
			var ds_field 	= objSpec.getColumn(i, "DS_FIELD");
			var rm_bigo 	= objSpec.getColumn(i, "RM_BIGO");
			
			var ncol = objSpec.rowcount * nrow + i;
			objGrid.setCellProperty("head", ncol, "text", ds_header3);
			objGrid.setCellProperty("head", ncol, "tooltiptext", rm_bigo);
			objGrid.setCellProperty("head", ncol, "id", ds_field + "__headCell_" + ncol + "#3");
			if(objSpec.getColumn(i, "YN_ESSENTIAL") == "Y") {
				//objGrid.setCellProperty("head", ncol, "textDecoration", "underline");
				objGrid.setCellProperty("head", ncol, "cssclass", "essential");
			}
			//this._gfnGridGetGridCellObject(objGrid, "head", ncol).head_field = ds_field+"3";
			if(ty_input == "CHECKBOX" || ty_input == "CHECKBOXALL" || ty_input == "CHECKBOX_YN" || ty_input == "CHECKBOXALL_YN") {
				this._gfnGridGetGridCellObject(objGrid, "head", ncol).ty_input = ty_input;
				if(ds_header3 == "체크" || ds_header3 == "선택") { // || ty_input == "CHECKBOXALL") {
					var chkCol = this.gfnGetHeadRowCellIndex(objGrid, 2, ds_field);
					this._gfnGridGetGridCellObject(objGrid, "head", chkCol).chkupdate = "N";
				}			
				if(grid_headerrows == 3 && (ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN")) {
					objGrid.setCellProperty("head", ncol, "text", "");				
					objGrid.setCellProperty("head", ncol, "displaytype", "checkboxcontrol");
					objGrid.setCellProperty("head", ncol, "edittype", "checkbox");
				}
			}
		}
		objGrid.setFormatRowProperty(2, "size", defHeadHeight2);
	}
	
	if(grid_headerrows == 2) {
		// rowspan, colspan
		var cols = 0; // merge 되면서 cell index가 조정된다.
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ds_header1 = objSpec.getColumn(i, "DS_HEADER1");
			var ds_header2 = objSpec.getColumn(i, "DS_HEADER2");
			var ty_input = objSpec.getColumn(i, "TY_INPUT");
			
			if (ds_header1 == ds_header2) {
				if((ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN") && (ds_header2 == "선택" || ds_header2 == "체크")) {
				} else {
					var colspan = 0;
					for(var j = (i + 1); j < objSpec.rowcount; j++) {
						if(ds_header1 == objSpec.getColumn(j, "DS_HEADER1") && ds_header2 == objSpec.getColumn(j, "DS_HEADER2")) {
							colspan++;
						} else {
							break;
						}
					}
					var rtn = objGrid.mergeContentsCell("head", 0, i, 1, i+colspan, i-cols, false);
					if(rtn > -1) {
						cols = cols + colspan;
						i += colspan;
					}
				}
			}
			else if (ds_header1 != ds_header2) {
				var colspan = 0;
				for(var j = (i + 1); j < objSpec.rowcount; j++) {
					if(ds_header1 == objSpec.getColumn(j, "DS_HEADER1")) {
						colspan++;
					}
					else {
						break;
					}
				}
				if(colspan > 0) {
					var rtn = objGrid.mergeContentsCell("head", 0, i, 0, i+colspan, i-cols, false);
					if(rtn > -1) {
						cols = cols + colspan;
					}
				}
			}
		}
		objGrid.mergeContentsCell("head", 0, 0, 1, 0, 0, false);
	}
	else if(grid_headerrows == 3) {
		// rowspan 먼저하고 colspan
		var row1 = 0; // merge 되면서 cell index가 조정된다.
		var cols = 0; // merge 되면서 cell index가 조정된다.
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ds_header1 = objSpec.getColumn(i, "DS_HEADER1");
			var ds_header2 = objSpec.getColumn(i, "DS_HEADER2");
			var ds_header3 = objSpec.getColumn(i, "DS_HEADER3");
			var ty_input = objSpec.getColumn(i, "TY_INPUT");
			
			if (ds_header1 != ds_header2 && ds_header2 == ds_header3) {
				var colspan = 0;
				for(var j = (i + 1); j < objSpec.rowcount; j++) {
					if(ds_header1 == objSpec.getColumn(j, "DS_HEADER1")) {
						colspan++;
					} else {
						break;
					}
				}
				if(colspan > 0) {
					var rtn = objGrid.mergeContentsCell("head", 0, i, 0, i+colspan, i-cols, false);
					if(rtn > -1) {
						cols = cols + colspan;
					}
				}
				if((ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN") && (ds_header3 == "선택" || ds_header3 == "체크")) {
				} else {
					objGrid.mergeContentsCell("head", 1, i, 2, i, objSpec.rowcount + (i - row1 - cols), false);
				}
			}
			else if (ds_header1 == ds_header2 && ds_header2 != ds_header3) {
				var colspan = 0;
				for(var j = (i + 1); j < objSpec.rowcount; j++) {
					if(ds_header1 == objSpec.getColumn(j, "DS_HEADER1")
						&& ds_header2 == objSpec.getColumn(j, "DS_HEADER2")) {
						colspan++;
					} else {
						break;
					}
				}
				var rtn = objGrid.mergeContentsCell("head", 0, i, 1, i+colspan, i-cols, false);
				if(rtn > -1) {
					cols = cols + colspan;
				}
				row1++;
			}
			else if (ds_header1 == ds_header2 && ds_header2 == ds_header3) {
				if((ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN") && (ds_header3 == "선택" || ds_header3 == "체크")) {
					objGrid.mergeContentsCell("head", 0, i, 1, i, i-cols, false);					
					row1++;
				} else {
					objGrid.mergeContentsCell("head", 0, i, 2, i, i-cols, false);
					row1++;
				}
			}
			else if (ds_header1 != ds_header2 && ds_header2 != ds_header3) {
				var colspan = 0;
				for(var j = (i + 1); j < objSpec.rowcount; j++) {
					if(ds_header1 == objSpec.getColumn(j, "DS_HEADER1")) {
						colspan++;
					} else {
						break;
					}
				}
				if(colspan > 0) {
					var rtn = objGrid.mergeContentsCell("head", 0, i, 0, i+colspan, i-cols, false);
					if(rtn > -1) {
						cols = cols + colspan;
					}
				}
			}
		}
		
		// colspan
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ds_header1 = objSpec.getColumn(i, "DS_HEADER1");
			var ds_header2 = objSpec.getColumn(i, "DS_HEADER2");
		
			if(ds_header1 != ds_header2) {
				var colspan = 0;
				for(var j = (i + 1); j < objSpec.rowcount; j++) {
					if(ds_header1 == objSpec.getColumn(j, "DS_HEADER1")) {
						colspan++;
					}
					else {
						break;
					}
				}
				if(colspan > 0) {
					var rtn = objGrid.mergeContentsCell("head", 0, i, 0, i+colspan, i-cols, false);
					if(rtn > -1) {
						cols = cols + colspan;
					}
				}
			}
		}
		for(var i = 1; i < objSpec.rowcount; i++) {
			var ds_header2 = objSpec.getColumn(i, "DS_HEADER2");
			var ds_header3 = objSpec.getColumn(i, "DS_HEADER3");
			
			if(ds_header2 != ds_header3) {
// 				var ds_field = objSpec.getColumn(i, "DS_FIELD");
// 				var ridx = this.gfnGetHeadCellIndex(objGrid, ds_field);
			
				var colspan = 0;
				for(var j = (i + 1); j < objSpec.rowcount; j++) {
					if(ds_header2 == objSpec.getColumn(j, "DS_HEADER2")) {
						colspan++;
					}
					else {
						break;
					}
				}
				if(colspan > 0) {
					// 현재 셀기준 앞쪽의 rowspan구하기
					var rowspan = 0;
					for(var k = 1; k < i; k++) {
						if(objSpec.getColumn(k, "DS_HEADER1") == objSpec.getColumn(k, "DS_HEADER2")) {
							rowspan++;
						}
					}
					
					var startIdx = objSpec.rowcount + i - rowspan - cols;
					var rtn = objGrid.mergeContentsCell("head", 1, i, 1, i + colspan, startIdx, false);
					if(rtn > -1) {
						cols = cols + colspan;
					}
				}
			}
		}
		objGrid.mergeContentsCell("head", 0, 0, 2, 0, 0, false);
	}
	
	if(grid_headerrows > 0) {
		objGrid.setFormatRowProperty(grid_headerrows, "size", 30);
	}
};

pForm._gfnGridComboSet = function(ds_combolist, comboDsId) {
	if(this.gfnIsNull(ds_combolist)) return;
	
	var ds_combo = new Dataset();
	ds_combo.addColumn("CODE", "string");
	ds_combo.addColumn("TEXT", "string");
	
	ds_combolist.split('|').forEach(function(item, index, arrary) {
		if(item.indexOf(':') > -1) {
			var ct = item.split(':');
			var nrow = ds_combo.addRow();
			ds_combo.setColumn(nrow, "CODE", ct[0]);
			ds_combo.setColumn(nrow, "TEXT", ct[1]);
		}
		else {											
			var nrow = ds_combo.addRow();
			ds_combo.setColumn(nrow, "CODE", item);
			ds_combo.setColumn(nrow, "TEXT", item);
		}
	});
	
	if(this.gfnLookup(this, comboDsId) != null) {
		this.removeChild(comboDsId);
	}
	this.addChild(comboDsId, ds_combo);
};

pForm._dataset_onload = function(objDs,e)
{	
	objDs.set_enableevent(false);
	if(objDs.getColumnInfo("nx_flag") == null) {
		objDs.addColumn("nx_flag", "string");
	}
	if(objDs.getColumnInfo("nx_sort") == null) {
		objDs.addColumn("nx_sort", "string");
	}
	objDs.set_enableevent(true);
	
	var objGrid = objDs.bindgrid;
	objGrid._flcomplete = false;
	
	if (e != null && e.reason == Dataset.REASON_LOAD && objGrid.usAllCheck != null) {
		var arrAllCheck = objGrid.usAllCheck;
		for(var i = 0; i < arrAllCheck.length; i++) {
			var nHeadCell = arrAllCheck[i];
			if(objGrid.getCellProperty("head", nHeadCell, "text") == "1") {
				objGrid.setCellProperty("head", nHeadCell, "text", "0");
			}
		}
		objGrid.usAllCheck = null;
	}
	
	if (objGrid.yn_filter != "Y") {
		if(objDs.rowcount > 0) {
			if(objDs.getColumn(0, this.ucFlag) == "#") {
				objDs.deleteRow(0);
			}
		}
	}
	
	this._grd_filter_row_add(objGrid, objDs, true, (e==null?true:false));
	
	var isSetKey = false;
	var dsKeystring = "S:-nx_sort";
	if(objGrid.usTySummary.length > 0) {
		var usTySummary = objGrid.usTySummary;
		for(var c = 0; c < usTySummary.length; c++) {
			if(objDs.colinfos[usTySummary[c].CD_FIELD]!=null) {
				objDs.colinfos[usTySummary[c].CD_FIELD].set_prop(usTySummary[c].TY_SUMMARY);
			}
		}
		isSetKey = true;
		dsKeystring = objDs.keystring;
	}
	
	if(objGrid.IsFirstGroup == false) {
		objGrid.IsFirstGroup = true;
		objGrid._dsKeyString = "";
		var arr_group = objGrid.usGroup;
		if (arr_group.length > 0) {
			arr_group = arr_group.sort();
			var arr_group_col = [];
			var arr_group_nm = [];
			var arr_group_ref = [];
			for(var g = 0; g < arr_group.length; g++) {
				var spl_group = arr_group[g].split(':');
				arr_group_col.push(spl_group[1]);
				arr_group_nm.push(spl_group[2]);
				var hidx = this.gfnGetHeadRowCellIndex(objGrid, objGrid.HeadRows, spl_group[1]);
				if(hidx > - 1) {
					var refCell = this._gfnGridGetGridCellObject(objGrid, "head", hidx);
					arr_group_ref.push(refCell);
				}
			}
			
			if(arr_group_col.length > 0) {
				isSetKey = false;
				//dsKeystring = "S:-nx_sort,G:" + arr_group_col.join(',');
				//this.gfnMakeReverseSubsumTree(objGrid, arr_group_col, 200);
				var objGroupPanel = objGrid.grouppanel;
				objGroupPanel.col_group = arr_group_col;
				objGroupPanel.col_name = arr_group_nm;
				objGroupPanel.col_ref = arr_group_ref;
				this._grd_group_panel_build(objGrid);
			} else {
				isSetKey = true;
// 				//dsKeystring = "";
// 				dsKeystring = "S:-nx_sort";
// 				objDs.set_keystring(dsKeystring);
			}
			objGrid._dsKeyString = dsKeystring;			
		}
	}

	if(isSetKey) {		
		objDs.set_keystring(dsKeystring);
		if(objGrid.yn_filter == "Y" && objDs.reversesubsum == true) {
			if(objDs.rowcount > 0) {
				if (objDs.getRowType(0) == Dataset.ROWTYPE_GROUP) {
					objDs.deleteRow(0);
				}
			}
		}
	}
	
	// Row Hidden
	this._grd_row_hidden(objGrid, objDs);
	
	this._grd_filter_row_set(objGrid, objDs);
	this._grd_filter_row_fix(objGrid, objDs);
	
	if (e != null && e.reason == Dataset.REASON_LOAD) {
		this._grd_head_onmouseover(objGrid, this);
	}
};

pForm._grd_row_hidden = function(objGrid, objDs) {
	
	if (objGrid.usAtRowHidden.length > 0) {
		var arr_hidden_rows = [];
		for(var r = 0; r < objGrid.usAtRowHidden.length; r++) {

			var json = objGrid.usAtRowHidden[r];

			for(var row = 0; row < objDs.rowcount; row++) {

				var hidden = false;
				var val = objDs.getColumn(row, json.DS_FIELD);
				if(val == null) continue;

				if(!this.gfnIsNull(json.AT_ROWHIDDEN)) {

					var at_rowhidden = json.AT_ROWHIDDEN.trim();				
					var exp = at_rowhidden.substring(0, 2);
					var exp2 = at_rowhidden.substring(0, 1);

					var at_rowhidden_val = at_rowhidden;
					if(at_rowhidden_val.indexOf("'") > 0) {
						at_rowhidden_val = at_rowhidden.substring(at_rowhidden.indexOf("'")+1);
						at_rowhidden_val = at_rowhidden_val.substring(0, at_rowhidden_val.lastIndexOf("'"));
					} else {
						if(exp == "==" || exp == "!=") {
							at_rowhidden_val = at_rowhidden_val.substring(2);
						}
						else if(exp2 == ">" || exp2 == "<") {
							at_rowhidden_val = at_rowhidden_val.substring(1);
							
							if(at_rowhidden_val.indexOf("=") == 0) {
								at_rowhidden_val = at_rowhidden_val.substring(1);
							}
						}
					}

					if(exp == "==") {
						if(val.toString() == at_rowhidden_val) {
							hidden = true;
						}
					}
					else if(exp == "!=") {
						if(val.toString() != at_rowhidden_val) {
							hidden = true;
						}
					}
					else if(exp2 == ">" || exp2 == "<") {
						var val1;
						var val2;
						if(nexacro.isNumeric(val) && nexacro.isNumeric(at_rowhidden_val)) {
							val1 = nexacro.toNumber(val);
							val2 = nexacro.toNumber(at_rowhidden_val);
						} else {
							val1 = val.toString();
							val2 = at_rowhidden_val.toString();
						}
								
						if(exp == ">=") {
							if(val1 >= val2) {
								hidden = true;
							}
						}
						else if(exp == "<=") {
							if(val1 <= val2) {
								hidden = true;
							}
						}
						else if(exp2 == ">") {
							if(val1 > val2) {
								hidden = true;
							}
						}
						else if(exp2 == "<") {
							if(val1 < val2) {
								hidden = true;
							}
						}		
					}					
				}
				
				if(hidden) {
					arr_hidden_rows.push(row);
				}
			}
		}
		
		objGrid.set_enableredraw(false);
		for(var i = (arr_hidden_rows.length -1); i > -1; i--) {
			objGrid.setRealRowSize(arr_hidden_rows[i], 0);
		}
		objGrid.set_enableredraw(true);
	}
};

pForm._grd_filter_row_add = function(objGrid, objDs, isRender, isLayout) {
	if (isRender == null) isRender = true;
	if ((objGrid.init_filter != true || isLayout!=true) && objGrid.yn_filter == "Y") {
		objGrid.init_filter = true;
		//objGrid.set_enableevent(false);
		var filterstr = objDs.filterstr;
		objDs.set_filterstr("");
		objDs.set_enableevent(false);
		var nrow = objDs.insertRow(0);
		objDs.setColumn(nrow, this.ucFlag, "#");
		objDs.setColumn(nrow, this.ucSort, "#");
		if(!this.gfnIsNull(filterstr)) {
			var usFilter = objGrid.usFilter;
			for(var f=0;f<usFilter.length;f++) {
				if(usFilter[f].TYPE == "#") {
					objDs.setColumn(nrow, usFilter[f].CD_FIELD, usFilter[f].VALUE);
				}
			}
		}
		objDs.set_enableevent(true);
		objDs.set_filterstr(filterstr);
		
		if(isRender && objDs.rowcount > 0) {
		
			if(!this.gfnIsNull(objDs.keystring)) {
				objDs.updateSortGroup();
			}
			// Dataset기준으로 Grid 반영시키기
			objDs.on_fire_onrowsetchanged(0, 1, 12);
		}
		
		//objGrid.set_enableevent(true);
		if(objGrid.rowcount > 1 && (this.gfnIsNull(objGrid.oldrow) || objGrid.oldrow == -1)) {
			objGrid.oldcell = 0;
			objGrid.oldrow = 1;
		}
	} else {
		if(objGrid.yn_filter != "Y") {
			objGrid.init_filter = false;
			var filterstr = objDs.filterstr;
			objDs.set_filterstr("");
			if(!this.gfnIsNull(filterstr)) {
				objDs.set_filterstr(filterstr);
			}
			
			if(objGrid.rowcount > 0 && (this.gfnIsNull(objGrid.oldrow) || objGrid.oldrow == -1)) {
				objGrid.oldcell = 0;
				objGrid.oldrow = 0;
			}
		}
		if(objDs.rowcount > 0) {
			// Dataset기준으로 Grid 반영시키기
			objDs.on_fire_onrowsetchanged(0, 1, 12);
		}
	}
};

pForm._dataset_onrowsetchanged = function(objDs,e) {
	if(e.reason == Dataset.REASON_SORTGROUP) {
		var objGrid = objDs.bindgrid;
		this._grd_filter_row_set(objGrid, objDs, true);
	}
};

pForm._grd_filter_row_set = function(objGrid, objDs, isDrop) {
	if (objGrid.yn_filter == "Y" && !this.gfnIsNull(objDs.keystring)) {
		var curKeyString = objDs.keystring;
		if(curKeyString.indexOf("G:") > -1) {
			curKeyString = curKeyString.substring(curKeyString.indexOf("G:")+2);
			if(curKeyString.indexOf(",S:") > -1) {
				curKeyString = curKeyString.substring(0, curKeyString.indexOf(",S:"));
			}
			
			var spl_key = curKeyString.split(',');
	
			var cnt = spl_key.length-1;
// 			if(isDrop == true) {
// 				cnt = 0;
// 			}
			
			if (objDs.reversesubsum == true) {
				if(isDrop != true) {
					cnt = -1;
				}
// 				for(var i = -1; i < cnt ; i++) {
// 					var grow = i+1;
// 					if (objDs.getRowType(grow) == Dataset.ROWTYPE_GROUP) {
// 						objDs.deleteRow(grow);
// 						//objGrid.setRealRowSize(grow, 0);
// 					}
// 				}
				for(var i = cnt; i >= -1 ; i--) {
					var grow = i+1;
					if (objDs.getRowType(grow) == Dataset.ROWTYPE_GROUP) {
						objDs.deleteRow(grow);
						//objGrid.setRealRowSize(grow, 0);
					}
				}
			} 
			else {
				if(isDrop != true) {
					cnt = 0;
				}
				for(var i = cnt; i > -1 ; i--) {
					var grow = i+1;
					if (objDs.getRowType(grow) == Dataset.ROWTYPE_GROUP) {
						objDs.deleteRow(grow);
						//objGrid.setRealRowSize(grow, 0);
					}
				}
			}
			//objDs.applyChange();
		}
	}
}

pForm._grd_filter_row_fix = function(objGrid, objDs, isFilterRow) {
	if(isFilterRow==null) isFilterRow = false;
	if(objGrid.yn_filter == "Y") {
		if(objDs.rowcount > 0 && objDs.getColumn(0, this.ucFlag) == "#") {
			// setFixedRow 트리 미지원. 강제로 적용되도록 _hasTree 제어
			if(isFilterRow == true) {
				if(objGrid.getCellProperty("body", objGrid.currentcell, "edittype") == "combo") {
					this._grd_combo_fix(objGrid);
				}
				this.gfnSetTimer(objGrid, function() {
					if(objGrid._fixed_height == 0) {
						if (objGrid.IsTree == true) {
							objGrid._hasTree = false;
							objGrid.setFixedRow(0);
							objGrid._hasTree = true;
						} else {
							objGrid.setFixedRow(0);
						}
					}
				}, 100);
			} else {
				if(objGrid._fixed_height == 0) {
					if (objGrid.IsTree == true) {
						objGrid._hasTree = false;
						objGrid.setFixedRow(0);
						objGrid._hasTree = true;
					} else {
						objGrid.setFixedRow(0);
					}
				}
			}
		}
	}
}

pForm._dataset_filter_row_apply = function(objDs, isFilterRow) {
	if(isFilterRow==null) isFilterRow = true;
	var objGrid = objDs.bindgrid;
	if(objGrid.isFilterRowStop == true) return;
	
	var usFilter = [];
	if(isFilterRow) {
		if(objDs.rowcount > 0) {
			if (objDs.getColumn(0, this.ucFlag) == "#") {
				for(var c = 0; c < objDs.colinfos.length; c++) {				
					var colid = objDs.colinfos[c].name;
					if (colid==this.ucFlag || colid==this.ucSort) continue;
					var val = objDs.getColumn(0, colid);
					if(!this.gfnIsNull(val)) {
						usFilter.push({CD_FIELD: colid, VALUE: val, TYPE: '#'});
					}
				}
			}
		}
	} else {
		if(!this.gfnIsNull(objGrid.usFilter)) {
			usFilter = objGrid.usFilter;
		}
	}
	objGrid.usFilter = usFilter;
	
	var usFilterOr = [];
	if(!this.gfnIsNull(objGrid.usFilterOr)) {
		usFilterOr = objGrid.usFilterOr;
	}
	
	var arrFilter = [];
	var arrFilterOr = [];
	
	for(var f = 0; f < usFilter.length; f++) {
		arrFilter.push("String(" + usFilter[f].CD_FIELD + ").toLocaleUpperCase().indexOf('" + usFilter[f].VALUE.toString().toLocaleUpperCase() + "')!=-1");
	}	
		
	for(var key in usFilterOr) {
		if(usFilterOr.hasOwnProperty(key)) {
			var arrKeyFilter = [];
			for(var f = 0; f < usFilterOr[key].length; f++) {
				var filterOr = usFilterOr[key];
				var filterOrVal = filterOr[f].VALUE;
				if (filterOrVal.indexOf("'")) {
					filterOrVal = filterOrVal.replace(/\'/g, "\\'");
				}
				
				if(filterOrVal == "#empty#") {
					arrKeyFilter.push("(" + filterOr[f].CD_FIELD + "== null || nexacro.replaceAll(String(" + filterOr[f].CD_FIELD + "),' ', '')=='')");
				} 
				else if(filterOr[f].VALUE == "#notempty#") {
					arrKeyFilter.push("(" + filterOr[f].CD_FIELD + "!= null && nexacro.replaceAll(String(" + filterOr[f].CD_FIELD + "),' ', '')!='')");
				}
				else if(filterOr[f].TYPE == "#notequal#") {
					arrKeyFilter.push("String(" + filterOr[f].CD_FIELD + ").toLocaleUpperCase() != '" + filterOrVal.toString().toLocaleUpperCase() + "'");
				}
				else {
					arrKeyFilter.push("String(" + filterOr[f].CD_FIELD + ").toLocaleUpperCase()=='" + filterOrVal.toString().toLocaleUpperCase() + "'");
				}
			}
			if(arrKeyFilter.length > 0) {
				arrFilterOr.push("(" + arrKeyFilter.join(" || ") + ")");
			}
		}
	}
	
	if(arrFilter.length > 0 || arrFilterOr.length > 0) {
		var filterstr = "";
		var filterflag = (objDs.getColIndex('nx_flag') > -1) ? "nx_flag=='#' || " : "";
		
		if(arrFilter.length > 0 && arrFilterOr.length == 0) {
			filterstr = filterflag + "(" + arrFilter.join(" && ") + ")";
		}
		else if(arrFilter.length == 0 && arrFilterOr.length > 0) {
			filterstr = filterflag + "(" + arrFilterOr.join(" && ") + ")";
		}
		else if(arrFilter.length > 0 && arrFilterOr.length > 0) {
			filterstr = filterflag + "(" + arrFilter.join(" && ") + ") && (" + arrFilterOr.join(" && ") + ")";
		}
		
		objDs.set_filterstr(filterstr);
	} else {
		objDs.set_filterstr("");
	}	
 	objDs.set_enableevent(false);
	this._grd_filter_row_set(objGrid, objDs, true);
 	objDs.set_enableevent(true);
	
	this._grd_filter_row_fix(objGrid, objDs, true);
};

pForm._dataset_cancolumnchange = function(objDs,e) 
{
	if(objDs.getRowLevel(e.row) > 0) {
		return false;
	}
	return true;
};

pForm._dataset_oncolumnchanged = function(objDs,e)
{	
	var row = e.row;
	var flag = objDs.getColumn(row, this.ucFlag);	
	var objGrid = objDs.bindgrid;
	var cell = objGrid.getBindCellIndex("body", e.columnid);
	var chkupdate = objGrid.getCellProperty("head", this.gfnGetHeadCellIndex(objGrid, e.columnid), "chkupdate");
	if (e.columnid != this.ucFlag && e.columnid != this.ucSort 
		&& flag != "I" && flag != "D" && flag != "DU" && flag != "U"
		&& flag != "#" && chkupdate != "N")  {
		objDs.set_enableevent(false);
		objDs.setColumn(row, this.ucFlag, "U");
		objDs.set_enableevent(true);
		if(objGrid.sub == "true") {
			this.gfnSetFormSubStatus(this, "U");
		} else {
			this.gfnSetFormStatus(this, "U");
		}
	}
	
	// 체크박스YN 변환 - 필터로우도 적용되야 하기 때문에 필터로우 처리전에
	var arrCheckYN = objGrid.usCheckBoxYN;	
	if (this.gfnIsExistInArray(arrCheckYN, e.columnid)) {
		objDs.set_enableevent(false);
		if(e.newvalue == '1')
		{
			objDs.setColumn(row,e.columnid,'Y');
		} else if(e.newvalue == '0') {
			if (flag == "#") {
				objDs.setColumn(row,e.columnid,'');  
			} else {
				objDs.setColumn(row,e.columnid,'N');  
			}
		}
		objDs.set_enableevent(true);
	}
	
	if (!this._grd_entercell(objGrid, row, cell)) return;
	//if (this.gfnIsNull(e.newvalue)) return;
	
	// 필터로우 처리
	if (flag == "#") {
		this._dataset_filter_row_apply(objDs);
		return;		
	}	
	
	// 유효성검사 (달력, 코드파인드..)	
	// 년도 달력
	var arrCal = objGrid.usCalendarY;
	if (this.gfnIsExistInArray(arrCal, e.columnid)) {
		if (this.gfnTrim(e.newvalue).length < 4 || !this.gfnIsDate(e.newvalue)) {
			objDs.setColumn(row, e.columnid, "");
			
			if (!this.gfnIsNull(e.newvalue)) {
				var xy = this.gfnConvertXY(this, [0,20], objGrid._getAccessibilityCurrentCell(row,cell));
				this._grd_calendar_y_popup(objGrid, row, cell, xy[0], xy[1], e.columnid, false);
					
				if(objGrid._codeFindManual != true) {
					this.gfnSetTimer(objGrid,
						function()
						{
							objGrid.setCellPos(cell, row);
						}, 1
					);
				}
			}
		}
	}
	
	// 월 달력
	var arrCalYM = objGrid.usCalendarYM;
	if (this.gfnIsExistInArray(arrCalYM, e.columnid)) {
		if (this.gfnTrim(e.newvalue).length < 6 || !this.gfnIsDate(e.newvalue)) {			
			objDs.setColumn(row, e.columnid, "");
			
			if (!this.gfnIsNull(e.newvalue)) {
				var xy = this.gfnConvertXY(this, [0,20], objGrid._getAccessibilityCurrentCell(row,cell));
				this._grd_calendar_ym_popup(objGrid, row, cell, xy[0], xy[1], e.columnid, false);
				
				if(objGrid._codeFindManual != true) {
					this.gfnSetTimer(objGrid,
						function()
						{
							objGrid.setCellPos(cell, row);
						}, 1
					);
				}
			} 			
		}
	}
	
	// 코드파인드 - CodeFindTxt 타입은 제외
	var arrCodefind = objGrid.usCodefind;
	if (this.gfnIsExistInArray(arrCodefind, e.columnid)) {
		if (e.oldvalue != e.newvalue) {
			if (!this.gfnIsNull(e.newvalue)) {
				if(this.objApp == null) {
					this.objApp = nexacro.getApplication();
				}
				var xy = this.gfnConvertXY(this.objApp.mainframe, [20,20], objGrid._getAccessibilityCurrentCell(row,cell));
				
				objGrid.forceStop = true; // 팝업이 오픈되도 포커스가 그리드에 있는 상태여서 코드파인드에서 방향키입력문제. 에디팅모드 강제중단
				this._grd_codefind_popup(objGrid, row, cell, xy[0], xy[1], e.columnid, false);
				
				if(objGrid._codeFindManual != true) {
					this.gfnSetTimer(objGrid,
						function()
						{
							objGrid.setCellPos(cell, row);
						}, 1
					);
				}
			}
			else {
				var arrInfo = objGrid.usCodefindInfo;
				var colnm = this._gfnGridGetBindColumnNameByIndex(objGrid, cell);
				var info = arrInfo[colnm];
				for (var key in arrInfo) {
					if (arrInfo.hasOwnProperty(key)) {
						if(arrInfo[key].NM_CODEFIND == info.NM_CODEFIND) {
							var cd_field = arrInfo[key].DS_FIELD;
							objDs.setColumn(row, cd_field, "");
						}
					}
				}
			}			
		}
	}	
	
	var func = this.lookupFunc(objGrid.AfterEdit);
	if (func != null) {
		func.call(objDs, e);
	}
	
};

pForm._grd_oncolresized = function(obj,e)
{
	var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.formatindex);
	if(colnm == this.ucFlag) {
		obj.setFormatColProperty(e.formatindex,"size",20);
	}
};

pForm._grd_onkeydown = function(obj, e) //(obj:nexacro.Grid,e:nexacro.KeyEventInfo)
{
	var sBrowser = system.navigatorname;
	
	if (e.ctrlkey == true &&
		(e.keycode == 65 || e.keycode == 67 || e.keycode == 86 || e.keycode == 70)) {
		
		if(e.keycode == 65){	// a 		
			if (!obj._showEditing) {
				//전체선택
				obj.clearSelect();
				var startrow = 0;
				if(obj.yn_filter == "Y") {
					startrow = 1;
				}
				obj.selectArea(startrow, 0, obj._rowcount-1, obj.getCellCount("body")-1);
			}
		}
		if(e.keycode == 67){	// c
			//copy
			if (!obj._showEditing) {
				if( sBrowser == "nexacro" || (sBrowser == "IE" && nexacro._BrowserType != "Edge")){
					this._gfnGridCopyEventForRuntime(obj, e);
				} 
// 				else if( sBrowser == "Chrome" || sBrowser == "Gecko" || sBrowser == "Opera" ){
// 					this._gfnGridCopyEventForChrome(obj, e);
// 				} 
				else {
					this._gfnGridCopyEventForEtc(obj, e);
				}
			}
		} else if(e.keycode == 86){	// v
			//paste
			if (obj._IsMultiLine != true && !obj._showEditing) {
				this._grd_paste_event(obj, e);		
			}
			else {
				// 아닐경우 기존 이벤트 제거
				document.removeEventListener('paste', this._gfnGridPasteCallback);
			}
		} else if(e.keycode == 70) { //f
			//find
			this._grd_find_panel_create(obj);
			
			e.preventDefault();
			e.stopPropagation();
			if (system.navigatorname != "nexacro") {
				event.preventDefault(); 
			}
			return false;
		}
		
	}
	else if (e.altkey == true) {
	}
	else if (e.shiftkey == true && e.keycode == 9) {
		if (obj._showEditing) {
			this._grd_edit_cell(obj, true);
		} else {
			obj.moveToPrevCell(); 
		}
		e.preventDefault();
		e.stopPropagation();
		if (system.navigatorname != "nexacro") {
			event.preventDefault(); 
		}
		return false;
	}
	else if (e.shiftkey == true && e.keycode == 122) { // shift + F11
		var param = {};
		param.CD_SYSTEM = obj.CD_SYSTEM;
		param.ID_GRID = obj.ID_GRID;
		if(!this.gfnIsNull(obj.ID_GRID)) {
			if(useGridLayout) {
				this.gfnFormOpen("DZO", "DXX_NXGRIDSPEC", "", param);
			} else {
				this.gfnFormOpen("DZO", "DXX_NXGRIDINFO", "", param);
			}
		}
		if (system.navigatorname != "nexacro") {
			event.preventDefault(); 
		}
	}
	else if(e.keycode == 27) // esc
	{
		if (obj._showEditing) {
			// 이전값으로 돌리기
			var objDs = obj.getBindDataset();
			objDs.set_enableevent(false);
			
			var row = obj.getDatasetRow(obj.currentrow);
			var colnm = this._gfnGridGetBindColumnNameByIndex(obj, obj.currentcell);
			var oldFlag = objDs.getColumn(row, this.ucFlag);
			if(this.gfnIsNull(oldFlag)) oldFlag = "";
			var oldVal = objDs.getColumn(row, colnm);
			if(oldVal==null) oldVal = "";
			if(obj._oldVal!=null) {
				oldVal = obj._oldVal;
				oldFlag = obj._oldFlag;
			}
			
			obj.showEditor(false);
			objDs.setColumn(row, colnm, oldVal);
			objDs.setColumn(row, this.ucFlag, oldFlag);
			
			if(obj._oldVal!=null) {
				obj._oldVal = null;
				obj._oldFlag = null;
			}
			
			objDs.set_enableevent(true);
			e.preventDefault();
			
// 			if(obj.getCellProperty("body", obj.currentcell, "edittype") == "combo") {
// 				this._grd_combo_fix(obj);
// 			}

			this._grd_contenteditable(obj);

		}
	}
	else if(e.shiftkey != true && e.keycode == 37) // ←
	{
		if (obj._showEditing) {
			if (obj.getEditSelectedText() != "") {
				this._grd_edit_cell(obj, true);
				e.preventDefault();
			} else {
				if(obj.getCellProperty("body", obj.currentcell, "edittype") == "combo") {
					this._grd_edit_cell(obj, true);		
					e.preventDefault();
				}
			}
		}
	}
	else if(e.shiftkey != true && (e.keycode == 9 || e.keycode == 13 || e.keycode == 39)) // tab, enter, →
	{
		if (obj._showEditing) {
			
			var objDs = obj.getBindDataset();
			var row = obj.getDatasetRow(obj.currentrow);
			
			if(obj.isDropdownCombo()) {	
				//obj.showEditor(false);
// 				this.gfnSetTimer(this,
// 					function()
// 					{					
// 						this._grd_combo_fix(obj);
// 						
// 					}, 10
// 				);
				this.gfnSetTimer(this,
					function()
					{					
						obj.moveToNextCell();
						//obj.showEditor(true);	
					}, 50
				);
			} else {
					
				if(objDs.getColumn(row, this.ucFlag) == "#") {
					this._grd_edit_cell(obj, false, true);
					e.preventDefault();
					return;
				}
				
				if (e.keycode == 9) {
					this._grd_edit_cell(obj, false);
					// tab은 e, event 둘다 적용.. 다른키는 keyup이 발생되는것으로 보아 추후 체크필요
					e.preventDefault();
					e.stopPropagation();
					if (system.navigatorname != "nexacro") {
						event.preventDefault(); 
					}
					return false;
				}
				else if (e.keycode == 39) {
					if (obj.getEditSelectedText() != "") {
						this._grd_edit_cell(obj, false);
						e.preventDefault();
					} else {
						if(obj.getCellProperty("body", obj.currentcell, "edittype") == "combo") {
							this._grd_edit_cell(obj, false);
							e.preventDefault();
						}
					}
				}
				else {
					this._grd_edit_cell(obj, false);
					e.preventDefault();
	// 					e.stopPropagation();
	//					event.preventDefault(); 
					//event.stopPropagation(); 
				}
			}
		} else {
			if(e.keycode == 13) {
				if(!obj.showEditor(true)) {
					this._grd_edit_cell(obj, false);
				} else {
					if(obj.getCellProperty("body", obj.currentcell, "edittype") == "textarea") {
						e.stopPropagation();
						if (system.navigatorname != "nexacro") {
							event.preventDefault(); 
						}
					}
				}
				if (system.navigatorname != "nexacro") {
					event.preventDefault();
				}
			}
		}
	}
	else if(e.keycode == 38) // ↑
	{
		if (obj._showEditing) {
			if(obj.isDropdownCombo()) {
			
			} else {
				if(obj.getCellProperty("body", obj.currentcell, "edittype") == "combo") {
					var objDs = obj.getBindDataset();
					var row = obj.getDatasetRow(obj.currentrow);
					if(objDs.getColumn(row, this.ucFlag) == "#") {
						e.preventDefault();	
						return false;
					}
					
					if (e.ctrlkey == true) {
						this._grd_edit_cell(obj);
					} else {
						obj.showEditor(false);
						if(obj.setCellPos(obj.currentcell, obj.currentrow-1)) {
							if(!obj.showEditor(true)) {
								//this._grd_combo_fix(obj);
							}
						}
						e.preventDefault();	
					}
				} else {
					if(obj.setCellPos(obj.currentcell, obj.currentrow-1)) {
						this._grd_edit_cell(obj);
						e.preventDefault();	
					}
				}
			}
		}
	}
	else if(e.keycode == 40) // ↓
	{
		if (obj._showEditing) {
			if(obj.isDropdownCombo()) {
			} else {
				if(obj.getCellProperty("body", obj.currentcell, "edittype") == "combo") {
					var objDs = obj.getBindDataset();
					var row = obj.getDatasetRow(obj.currentrow);
					if(objDs.getColumn(row, this.ucFlag) == "#") {
						e.preventDefault();	
						return false;
					}
						
					if (e.ctrlkey == true) {
						this._grd_edit_cell(obj);
					} else {
						obj.showEditor(false);
						if(obj.setCellPos(obj.currentcell, obj.currentrow+1)) {
							if(!obj.showEditor(true)) {
								//this._grd_combo_fix(obj);
							}
						}
						e.preventDefault();
					}
				} else {
					if(obj.setCellPos(obj.currentcell, obj.currentrow+1)) {
						this._grd_edit_cell(obj);
						e.preventDefault();	
					}
				}
			}
		} else {
			if(nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit") {
				if(obj.setCellPos(obj.currentcell, obj.currentrow+1)) {
					this._grd_edit_cell(obj);
					e.preventDefault();
				}
			}
		}
	}
	else if(e.keycode == 46) // del
	{
		if (!obj._showEditing) {
			var nStartrow = obj.selectstartrow;
			var nEndrow = obj.selectendrow;
			var nStartCol = obj.selectstartcol;
			var nEndCol = obj.selectendcol;
			var objDs = obj.getBindDataset();
			var isFilterRow = false;
			for (var k = 0; k < nStartrow.length; k++) {
				for(var r = nStartrow[k]; r <= nEndrow[k]; r++) {
					for (var c = nStartCol[k]; c <= nEndCol[k]; c++) {
						if (this._grd_entercell(obj, r, c)) {
							if(r == 0 && objDs.getColumn(obj.getDatasetRow(r), this.ucFlag) == "#") {
								isFilterRow = true;
								objDs.set_enableevent(false); 
							}
							objDs.setColumn(obj.getDatasetRow(r), this._gfnGridGetBindColumnNameByIndex(obj, c), null);
							if(isFilterRow) {
								objDs.set_enableevent(true); 
							}
						}
					}
				}
			}
			e.preventDefault();
			
			if(isFilterRow) {
				this._dataset_filter_row_apply(objDs);
// 				obj.showEditor(true); // 포커스 버그 해결
// 				obj.showEditor(false);
				
				var oform = this;
				this.gfnSetTimer(obj, function() {
					oform._grd_contenteditable(obj);
				} ,100);
			} else {
				this._grd_contenteditable(obj);
			}
		}
	}
	else if(e.keycode >= 112 && e.keycode <= 123) // F1~F12
	{
		e.preventDefault();
	} 
	else if(e.keycode == 8 || e.keycode == 19 || e.keycode == 20 || e.keycode == 21 || e.keycode == 25 || e.keycode == 45
			|| e.keycode == 91 || e.keycode == 92 || e.keycode == 93 || e.keycode == 144 || e.keycode == 145)
	{
	}
	else if(e.keycode >= 33 && e.keycode <= 36) 
	{
	}
	else 
	{
		if (e.ctrlkey == true) {
		}
		else if (e.shiftkey == true && e.keycode == 16) {		
		} else {
			var bUpdate = false;
			var flag = obj.getCellText(obj.currentrow, 0);
			if (!obj._showEditing) {
				if(e.keycode == 229) {
					if(obj.readonly==false && nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit") {
						var row = obj.getDatasetRow(obj.currentrow);
						var colnm = this._gfnGridGetBindColumnNameByIndex(obj, obj.currentcell);
						var objDs = obj.getBindDataset();
						if(this.gfnIsNull(objDs.getColumn(row, colnm))) {
							obj._oldVal = "";
							obj._oldFlag = objDs.getColumn(row, this.ucFlag);
							obj.isFilterRowStop = true;
							objDs.setColumn(row, colnm, " ");
						}
					} 
					
					obj.isFilterRowStop = false;
					this.gfnSetTimer(obj, function() {
						obj.showEditor(true);
					}, 1);					
				}
 				else {
					if(e.shiftkey == false && (obj.readonly==false && sBrowser=="IE")) {
						var row = obj.getDatasetRow(obj.currentrow);
						var colnm = this._gfnGridGetBindColumnNameByIndex(obj, obj.currentcell);
						var objDs = obj.getBindDataset();
						obj._oldVal = objDs.getColumn(row, colnm);
						obj._oldFlag = objDs.getColumn(row, this.ucFlag);
						obj.isFilterRowStop = true;
						objDs.setColumn(row, colnm, null);
					}
					
					obj.isFilterRowStop = false;
					if(obj.showEditor(true) == true) {
						bUpdate = true;
					}					
				}
			} else {
				bUpdate = true;
			}
			var edittype = obj.getCellProperty("body", obj.currentcell, "edittype");
			var expandshow = obj.getCellProperty("body", obj.currentcell, "expandshow");	
			if(edittype == "combo" || (expandshow.indexOf('show') > -1 && edittype.indexOf('none') > -1)) {
				bUpdate = false;
			}
			if(bUpdate) {
				if(flag != "I" && flag != "D" && flag != "DU" && flag != "U" && flag != "#") {
					//objDs.setColumn(obj.currentrow, this.ucFlag, "U");
					if(obj.sub == "true") {
						this.gfnSetFormSubStatus(this, "U");
					} else {
						this.gfnSetFormStatus(this, "U");
					}
				}
			}
		}
	}
	
};

/*
 * 콤보 버그 fix. 편집상태에서 비편집상태로 변경됐을때 콤보에 포커스가 존재하는지 커서 위아래 이동시 값이 변경되는 문제.
 * 현재버전 문제없음으로 사용안함.
 */ 
pForm._grd_combo_fix = function(obj) {
	var row = obj.currentrow;
	var cell = obj.currentcell;
	var cell_elem = obj._prevAreaCellObj._text_elem; // obj._getBodyCellItem(row, 1)._text_elem;
	//this.gfnSetTimer(obj, function() {
		var win = nexacro.getApplication().mainframe._window;
		win._on_sys_lbuttondown(cell_elem, "lbutton", false, false, false, 0, 0, 0, 0, 0, 0);
		win._on_sys_lbuttonup(cell_elem, "lbutton", false, false, false, 0, 0, 0, 0, 0, 0);
		obj.setCellPos(cell, row);
	//}, 10);
};

pForm._grd_edit_cell = function(obj, isPrev, isFilter) {
	obj.showEditor(false);
	
	if (isPrev == false) obj.moveToNextCell();
	if (isPrev == true) obj.moveToPrevCell();
	
	this.gfnSetTimer(obj,
		function()
		{					
// 			if (isPrev == true) {
// 				obj.moveToPrevCell(); 
// 			}
			if (!obj._showEditing && obj.forceStop != true && isFilter != true) { 
				obj.showEditor(true);
			}
		}, 10
	);
}

pForm._grd_onselectchanged = function(obj,e) {
	// e.row = datasetrow
	
	if(obj._oldVal!=null) {
		if(nexacro._Browser == "Edge" && obj._oldVal == "") {
			if(obj.getCellText(e.oldrow, e.oldcell) == " ") {
				var objDs = obj.getBindDataset();
				var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.oldcell);
				objDs.setColumn(e.oldrow, colnm, "")
			}
		} 
		obj._oldVal = null;
		obj._oldFlag = null;
	}
	
	var rtn = this._grd_entercell(obj, e.row, e.cell);
	
	if (obj._FIND_TEXT_MODE != true && obj._FIND_TEXT_ROWS != null && obj._FIND_TEXT_ROWS > -1) {
		obj._FIND_TEXT_SELCHG = true;
		obj._FIND_TEXT_ROWS = e.row;
		obj._FIND_TEXT_COLS = e.cell;
	}
	
	if(obj._cellobjOld != null) {
		obj._cellobjOld.set_cssclass("");
	}
	if(obj._old_contenteditable != null) {
		obj._old_contenteditable.setAttribute("contenteditable","false");
	}
	if(obj._old_cellelem != null) {
		obj._old_cellelem.setAttribute("gceditable","false");
	}
	
	if(e.row != e.oldrow) {
		var oldCell = obj._getCurrentBodyCell(e.oldrow, e.oldcell);
		if(oldCell != null && oldCell["_getRowControl"] != null) {
			var oldRow = oldCell._getRowControl();
			if(oldRow != null) {
				oldRow.set_cssclass("");
			}
		}
	}
	
	var curCell = obj._getCurrentBodyCell(e.row, e.cell);
	if(curCell != null && curCell["_getRowControl"] != null) {
		var curRow = curCell._getRowControl();
		if(curRow != null) {
			curRow.set_cssclass("selrow");
			obj._cellobjOld = curRow;
			obj._cellobjOldRow = curRow._rowidx;
		}
	}
	
	if (e.row != e.oldrow || e.cell != e.oldcell) {
		this._grd_contenteditable(obj, curCell, rtn);
	}
};

pForm._grd_contenteditable = function(obj, curCell, rtn) {
	if(curCell == null) curCell = obj._getCurrentBodyCell(obj.currentrow, obj.currentcell);
	
	if(rtn == null) rtn = this._grd_entercell(obj, obj.currentrow, obj.currentcell);
	if(this._gfnGridGetBindColumnNameByIndex2(obj, obj.currentcell)=="nx_flag") {
		rtn = false;
	}
	if(!rtn && obj._old_contenteditable != null) {
		obj._old_contenteditable.blur();
	}
	var browser = system.navigatorname;
	if(browser != "nexacro" && rtn == true && curCell != null) {
		if (browser != "IE" && curCell._text_elem != null && obj.getCellPropertyValue(obj.currentrow, obj.currentcell, "edittype") != "none") {
			var txtElem = document.getElementById(curCell._unique_id); // curCell._text_elem.name
			if(txtElem != null) {
				txtElem.onkeydown = function() { 
					if(event.keyCode == 229 && event.target["type"]==null) {
						this.setAttribute("contenteditable","false");
						event.preventDefault();
					}
					
					var handled = false;
					if(event.keyCode == 9 || event.keyCode == 13) {
						handled = true;
					}
					if(event.ctrlKey == true && event.keyCode == 86) {
						this.setAttribute("contenteditable","false");
					}			
					
					if(handled) {
						event.preventDefault(); 
					}
				}
				obj._old_contenteditable = txtElem;
				txtElem.setAttribute("contenteditable","true");
				txtElem.setAttribute("spellcheck","false");	
				txtElem.focus();
			}
		}
		var curCellElem = document.getElementById(curCell._unique_id);
		curCellElem.setAttribute("gceditable","true");
		obj._old_cellelem = curCellElem;
	}
};

pForm._grd_entercell = function(obj, row, cell) {
	if (row == -1 || cell == -1) {	
		obj.set_readonly(true);
		return false;
	}
	var objDs = obj.getBindDataset();
	var colnm = this._gfnGridGetBindColumnNameByIndex(obj, cell);
	var flag = objDs.getColumn(row, this.ucFlag);
	if (flag == "#") {
		obj.showEditor(false);
		obj._showEditing = false;
		obj.set_readonly(false);
		return true;
	}
	if (obj.info == "Y") {
		obj.set_readonly(true);
		return false;
	}
	if (this.gfnIsNull(this.FormInfo)) {
        obj.set_readonly(true);
		return false;
	}
	if (this.FormInfo.TY_AUTH == "R") {
        obj.set_readonly(true);
		var chkupdate = obj.getCellProperty("head", this.gfnGetHeadCellIndex(obj, colnm), "chkupdate");
		if(chkupdate != "N") {
			return false;
		}
	}
	if (flag == "D" || flag == "DU") {
        obj.set_readonly(true);
		return false;
	}
	if (objDs.getRowLevel(row) > 0) {
		obj.set_readonly(true);
		return false;
	}
	if (this._gfnGridGetBindColumnNameByIndex2(obj, cell) == "nx_flag") {
		obj.set_readonly(true);
		return false;
	}
	
	var rtn = true;
	var edittype = obj.getCellProperty("body", cell, "orgtype");
	var expandshow = obj.getCellProperty("body", cell, "expandshow");	
	if (expandshow.indexOf('show') == -1 && (edittype == "" || edittype == "none")) {
		rtn = false;
	}
	
	var arrReadOnlyY = obj.usReadOnlyY;
	if(arrReadOnlyY.length > 0) {
		if(edittype == "textarea") {
			if (this.gfnIsExistInArray(arrReadOnlyY, colnm)) {
				rtn = false;
				obj.setCellProperty("body", cell, "edittype", "expr:nx_flag=='#'?'text':'none'");
			} else {
				obj.setCellProperty("body", cell, "edittype", edittype);
			}
		} else {
			if(colnm == this.ucFlag) {
				rtn = false;
			}
			else if (this.gfnIsExistInArray(arrReadOnlyY, colnm)) {
				rtn = false;
			}	
		}
	}
	
	if (objDs.getColumn(row, this.ucFlag) != "I") {
		var arrReadOnlyU = obj.usReadOnlyU;
		if(arrReadOnlyU.length > 0) {
			if(edittype == "textarea") {
				if (this.gfnIsExistInArray(arrReadOnlyU, colnm)) {
					rtn = false;
					obj.setCellProperty("body", cell, "edittype", "expr:nx_flag=='#'?'text':'none'");
				} else {
					obj.setCellProperty("body", cell, "edittype", edittype);
				}
			} else {
				if (this.gfnIsExistInArray(arrReadOnlyU, colnm)) {
					rtn = false;
				}
			}
		}
	}
	
	if (obj.usAtReadOnly.length > 0) {
		for(var r = 0; r < obj.usAtReadOnly.length; r++) {
			 var json = obj.usAtReadOnly[r];
			 var val = objDs.getColumn(row, json.DS_FIELD);
			 if(val == null) continue;
			 
			 if(!this.gfnIsNull(json.AT_READONLY)) {
				var at_readonly = json.AT_READONLY.trim();				
				var exp = at_readonly.substring(0, 2);
				var exp2 = at_readonly.substring(0, 1);
				
				var at_readonly_val = at_readonly;
				if(at_readonly_val.indexOf("'") > 0) {
					at_readonly_val = at_readonly.substring(at_readonly.indexOf("'")+1);
					at_readonly_val = at_readonly_val.substring(0, at_readonly_val.lastIndexOf("'"));
				} else {
					if(exp == "==" || exp == "!=") {
						at_readonly_val = at_readonly_val.substring(2);
					}
					else if(exp2 == ">" || exp2 == "<") {
						at_readonly_val = at_readonly_val.substring(1);
						
						if(at_readonly_val.indexOf("=") == 0) {
							at_readonly_val = at_readonly_val.substring(1);
						}
					}
				}
				
				if(exp == "==") {
					if(val.toString() == at_readonly_val) {
						rtn = false;				
					}
				}
				else if(exp == "!=") {
					if(val.toString() != at_readonly_val) {
						rtn = false;				
					}
				}
				else if(exp2 == ">" || exp2 == "<") {
					var val1;
					var val2;
					if(nexacro.isNumeric(val) && nexacro.isNumeric(at_readonly_val)) {
						val1 = nexacro.toNumber(val);
						val2 = nexacro.toNumber(at_readonly_val);
					} else {
						val1 = val.toString();
						val2 = at_readonly_val.toString();
					}
							
					if(exp == ">=") {
						if(val1 >= val2) {
							rtn = false;				
						}
					}
					else if(exp == "<=") {
						if(val1 <= val2) {
							rtn = false;				
						}
					}
					else if(exp2 == ">") {
						if(val1 > val2) {
							rtn = false;				
						}
					}
					else if(exp2 == "<") {
						if(val1 < val2) {
							rtn = false;				
						}
					}		
				}
			 }
		}
	}
	
	// 선택 컬럼은 readonly 풀기
	var chkupdate = obj.getCellProperty("head", this.gfnGetHeadCellIndex(obj, colnm), "chkupdate");
	if(chkupdate == "N") {
		rtn = true;
	}
	
	var func = this.lookupFunc(obj.EnterCell);
	if (func != null) {
		var call_rtn =  func.call(obj, row, cell);
		if(call_rtn == true || call_rtn == false) {
			rtn = call_rtn;
		}
	}
	
	if(rtn == true) {
		obj.set_readonly(false);
	} else {
		obj.set_readonly(true);
	}
		
	return rtn;	
};

pForm._grd_oncloseup = function(obj,e) 
{
	if(obj._showEditing && obj.getCellProperty("body", e.cell, "edittype") == "combo") {
		this.gfnSetTimer(this,
			function()
			{					
				this._grd_combo_fix(obj);				
			}, 10
		);
	}
};

/*
pForm._grd_oncellclick = function(obj,e) 
{
	var cellobj = e.fromobject;
	if(cellobj.name == "treeitemtext") {
		cellobj = cellobj.parent.parent;
	}
	if(cellobj != null && cellobj["_getRowControl"] != null) {
		if(obj._cellobjOld != null) {
			obj._cellobjOld.set_cssclass("");
		}
		var cellobjrow = cellobj._getRowControl();
		if(cellobjrow != null) {
			cellobjrow.set_cssclass("selrow");
			obj._cellobjOld = cellobjrow;
			obj._cellobjOldRow = cellobjrow._rowidx;
		}
	}
};
*/

pForm._grd_onvscroll = function(obj,e)
{
	if(obj._cellobjOld != null) {
	
		var toprow = obj._toprowpos;
		var endrow = obj._endrowpos;
		if(typeof(toprow) == "object") {
			toprow = toprow[0];
		}
		if(typeof(endrow) == "object") {
			endrow = endrow[0];
		}
		if(obj._cellobjOldRow >= toprow && obj._cellobjOldRow <= endrow) {
			obj._cellobjOld.set_cssclass("selrow");
		} else {
			obj._cellobjOld.set_cssclass("");
		}
	}
};

// readonly이면 버튼 expanddown 이벤트가 타지 않기 때문에 따로 처리할 방법 필요..
// pForm._grd_onexpanddown = function(obj,e)
// {
// 	if(obj.readonly == true) {
// 		// readonly여도 멀티라인 보여주기
// 		var arrMultiLine = obj.usMultiLine;
// 		if( this.gfnIsExistInArray(arrMultiLine, colnm)) {
// 			var cr = obj.getCellRect(e.row, e.cell);  
// 			
// 			this._grd_multiline_popup(obj, e.row, e.cell, cr.left, (cr.top + cr.height), cr.width, colnm, true);
// 		}
// 	}
// }

pForm._grd_onexpandup = function(obj,e)
{
	// e.row = dataset row
	var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
	
	// 년도 달력
	var arrCal = obj.usCalendarY;
	if (this.gfnIsExistInArray(arrCal, colnm)) {
		var nX = system.screenToClientX(this, e.screenx);
		var nY = system.screenToClientY(this, e.screeny);   
		
		this._grd_calendar_y_popup(obj, e.row, e.cell, nX, nY, colnm, true);
	}
	
	// 월 달력
	var arrCalYM = obj.usCalendarYM;
	if (this.gfnIsExistInArray(arrCalYM, colnm)) {
		var nX = system.screenToClientX(this, e.screenx);
		var nY = system.screenToClientY(this, e.screeny);   
		
		this._grd_calendar_ym_popup(obj, e.row, e.cell, nX, nY, colnm, true);
	}
	
	// 코드파인드
	var arrCodefind = obj.usCodefind;
	var arrCodefindTxt = obj.usCodefindTxt;
	if (this.gfnIsExistInArray(arrCodefind, colnm)
		|| this.gfnIsExistInArray(arrCodefindTxt, colnm)) {
		if(this.objApp == null) {
			this.objApp = nexacro.getApplication();
		}
		var nX = system.screenToClientX(this.objApp.mainframe, e.screenx);
		var nY = system.screenToClientY(this.objApp.mainframe, e.screeny);   
			
		this._grd_codefind_popup(obj, e.row, e.cell, nX, nY, colnm, true);
	}
	
	
	// 멀티라인
	var arrMultiLine = obj.usMultiLine;
	if( this.gfnIsExistInArray(arrMultiLine, colnm)) {
		var cr = obj.getCellRect(e.row, e.cell);  
		
		var readonly = false;
		var arrReadOnlyY = obj.usReadOnlyY;
		if(arrReadOnlyY.length > 0) {
			var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
			if (this.gfnIsExistInArray(arrReadOnlyY, colnm)) {
				readonly = true;
			}
		}
		
		var arrReadOnlyU = obj.usReadOnlyU;
		if(arrReadOnlyU.length > 0) {
			var objDs = obj.getBindDataset();
			if (objDs.getColumn(e.row, this.ucFlag) != "I") {
				var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
				if (this.gfnIsExistInArray(arrReadOnlyU, colnm)) {
					readonly = true;
				}
			}
		}
		
		var MULTILINE_READONLY = obj.getBindDataset().getColumn(e.row, "MULTILINE_READONLY");
		var MULTILINE_EXCLUDE_COLUMNS = obj.getBindDataset().getColumn(e.row, "MULTILINE_EXCLUDE_COLUMNS");
		var MULTILINE_WIDTH = obj.getBindDataset().getColumn(e.row, "MULTILINE_WIDTH");
		
		if (MULTILINE_READONLY != undefined && !MULTILINE_EXCLUDE_COLUMNS.split(",").includes(colnm)) {
			this._grd_multiline_popup(obj, e.row, e.cell, cr.left, (cr.top + cr.height), MULTILINE_WIDTH > 0 ? MULTILINE_WIDTH : cr.width, colnm, MULTILINE_READONLY == "Y");	// 
		} else {
			this._grd_multiline_popup(obj, e.row, e.cell, cr.left, (cr.top + cr.height), MULTILINE_WIDTH > 0 ? MULTILINE_WIDTH : cr.width, colnm, readonly);
		}
	}
	
	var func = this.lookupFunc(obj.ExpandUp);
	if (func != null) {
		func.call(obj, e);
	}
};

pForm._grd_multiline_popup = function(obj, row, cell, nX, nY, width, colnm, readonly)
{
	if(readonly == null) readonly = false;
	var objDs = obj.getBindDataset();
	this.fvGridInfo = obj;
	
	if(width < 230) width = 230;
	var val = objDs.getColumn(row, colnm);
	
	var height = 160;
	if(!this.gfnIsNull(this.getOwnerFrame()._WIDTH_MULTILINE)) {
		width = this.getOwnerFrame()._WIDTH_MULTILINE;
	}
	if(!this.gfnIsNull(this.getOwnerFrame()._HEIGHT_MULTILINE)) {
		height = this.getOwnerFrame()._HEIGHT_MULTILINE;
	}
	var no_maxlength = obj.getCellProperty( "body", cell, "textareamaxlength");
	
	obj._IsMultiLine = true;
	var sPopupId = JSON.stringify({ ID: "pop_multiline", Row: row, Cell: cell, Col: colnm, ReadOnly: readonly, MaxLength: no_maxlength});
	var popdiv = new PopupDiv();
	popdiv.set_url("cmm::cmmMultiLine.xfdl");
	popdiv.set_initvalueid(val);
	popdiv.init(sPopupId,0,0,width,height,null,null);
	var comp = this.gfnLookup(this, sPopupId);
	if(comp != null) {
		comp.destroy();
	}
	this.addChild(sPopupId, popdiv);
	popdiv.show();
	popdiv.trackPopupByComponent(obj, nX, nY, null, null, "_grd_onmultiline");
};

pForm._grd_onmultiline = function(strId, val)
{
	var objGrid = this.fvGridInfo;
	objGrid._IsMultiLine = false;
	var objDs = objGrid.getBindDataset();
	var popInfo = JSON.parse(strId);
	this.removeChild(strId);
	
	var row = popInfo.Row;
	var col = popInfo.Col;
	
	if (!this.gfnIsNull(val)) {
		objDs.setColumn(row, col, val);
	}
};

pForm._grd_calendar_y_popup = function(obj, row, cell, nX, nY, colnm, isBtn) 
{
	var objDs = obj.getBindDataset();
	this.fvGridInfo = obj;
	
	var date = objDs.getColumn(row, colnm);
	if(!this.gfnIsDate(date)) {
		date = "";
	}
	
	var sPopupId = JSON.stringify({ ID: "pop_calendar_y", Row: row, Cell: cell, Col: colnm });
	var popdiv = new PopupDiv();
	//popdiv.set_cssclass("pdv_WF_MonthCalBg");
	popdiv.set_url("cmm::cmmCalYY_Pop.xfdl");
	popdiv.set_initvalueid(date);
	popdiv.init(sPopupId,0,0,187,206,null,null);
	var comp = this.gfnLookup(this, sPopupId);
	if(comp != null) {
		comp.destroy();
	}
	this.addChild(sPopupId, popdiv);
	popdiv.show();
	
	popdiv.trackPopupByComponent(this, nX, nY, null, null, "_grd_oncalendar_y");
}

pForm._grd_oncalendar_y = function(strId, val)
{
	var objGrid = this.fvGridInfo;
	var objDs = objGrid.getBindDataset();
	var popInfo = JSON.parse(strId);
	this.removeChild(strId);
	
	var row = popInfo.Row;
	var col = popInfo.Col;
	
	if (!this.gfnIsNull(val)) {
		objDs.setColumn(row, col, val);
	}
};

pForm._grd_calendar_ym_popup = function(obj, row, cell, nX, nY, colnm, isBtn) 
{
	var objDs = obj.getBindDataset();
	this.fvGridInfo = obj;
	
	var date = objDs.getColumn(row, colnm);
	if(!this.gfnIsDate(date)) {
		date = "";
	}
	
	var sPopupId = JSON.stringify({ ID: "pop_calendar_ym", Row: row, Cell: cell, Col: colnm });
	var popdiv = new PopupDiv();
	//popdiv.set_cssclass("pdv_WF_MonthCalBg");
	popdiv.set_url("cmm::cmmCalMM_Pop.xfdl");
	popdiv.set_initvalueid(date);
	popdiv.init(sPopupId,0,0,187,206,null,null);
	var comp = this.gfnLookup(this, sPopupId);
	if(comp != null) {
		comp.destroy();
	}
	this.addChild(sPopupId, popdiv);
	popdiv.show();
	
	popdiv.trackPopupByComponent(this, nX, nY, null, null, "_grd_oncalendar_ym");
}

pForm._grd_oncalendar_ym = function(strId, val)
{
	var objGrid = this.fvGridInfo;
	var objDs = objGrid.getBindDataset();
	var popInfo = JSON.parse(strId);
	this.removeChild(strId);
	
	var row = popInfo.Row;
	var col = popInfo.Col;
	
	if (!this.gfnIsNull(val)) {
		objDs.setColumn(row, col, val);
	}
};

pForm._grd_codefind_popup = function(obj, row, cell, nX, nY, colnm, isBtn) 
{
	var objDs = obj.getBindDataset();
	this.fvGridInfo = obj;
	
	var arrInfo = obj.usCodefindInfo;
	var info = arrInfo[colnm];
	
	var val = objDs.getColumn(row, colnm);
	
	if(this.gfnIsNull(val) || isBtn) {
		val = "";
	}
	
	var manual = false;
	if(obj._codeFindManual == true) {
		manual = true;
	}
	
	var oArg = { Grid:obj, Form: this, Area: info, Search: val, CodeFindName: info.CD_CODEFIND, BeforeUserDataSetParam: obj.BeforeUserDataSetParam, Manual: manual };
	var oOption = {popuptype:"codefind", title:"코드파인드", top: nY, left: nX};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
	var sPopupCallBack = "_grd_codefind_callback";
	var sPopupId = JSON.stringify({ CodeFind: info.NM_CODEFIND, Row: row, Cell: cell, Col: colnm, IsBtn: isBtn });
	var comp = this.gfnLookup(this, sPopupId);
	if(comp != null) {
		comp.destroy();
	}
	
	this.gfnOpenPopup(sPopupId,"cmm::cmmCodeFind_Pop.xfdl",oArg,sPopupCallBack,oOption);
};

pForm._grd_codefind_callback = function(strId, val) {
	var objGrid = this.fvGridInfo;
	var objDs = objGrid.getBindDataset();
	var arrInfo = objGrid.usCodefindInfo;
	var popInfo = JSON.parse(strId);
	var row = popInfo.Row;
	var cell = popInfo.Cell;
	var col = popInfo.Col;
	var isBtn = popInfo.IsBtn;
	var oldvalue = "";
	var newvalue = "";
	var codeFindData = [];
	this.removeChild(strId);
	
	var json = [];
	var isClear = false;
	var isChange = false;
	
	if (objGrid.forceStop) {
		isClear = true;
		objGrid.forceStop = false;
	}
	
	objDs.set_enableevent(false); 
	
	if (!this.gfnIsNull(val)) {
		json = JSON.parse(val);
		codeFindData = json;
		
		if (json.length > 0) {
			isClear = false;
			for (var key in arrInfo) {
				if (arrInfo.hasOwnProperty(key)) {
					if(arrInfo[key].NM_CODEFIND == popInfo.CodeFind) {
						var cd_alias = arrInfo[key].DS_RESULTALIAS;
						var cd_field = arrInfo[key].DS_FIELD;
						if(cd_field == col) {
							oldvalue = objDs.getColumn(row, cd_field, json[0][cd_alias]);;
							newvalue = json[0][cd_alias];
						}
						objDs.setColumn(row, cd_field, json[0][cd_alias]);
						
						isChange = true;
					}
				}
			}
		} else {
			isClear = true;
		}		
	}
	
	if (isClear) {
		for (var key in arrInfo) {
			if (arrInfo.hasOwnProperty(key)) {
				if(arrInfo[key].NM_CODEFIND == popInfo.CodeFind) {
					var cd_field = arrInfo[key].DS_FIELD;
					objDs.setColumn(row, cd_field, "");
					isChange = true;
				}
			}
		}
	}
	
	if (isChange) {
		var flag = objDs.getColumn(row, this.ucFlag);
		if(flag != "I" && flag != "D" && flag != "DU" && flag != "U" && flag != "#") {
			objDs.setColumn(row, this.ucFlag, "U");
			if(objGrid.sub == "true") {
				this.gfnSetFormSubStatus(this, "U");
			} else {
				this.gfnSetFormStatus(this, "U");
			}
		}
		
		var funcCD = this.lookupFunc(objGrid.AfterCDTextChanged);
		if (funcCD != null) {
			funcCD.call(popInfo.CodeFind, codeFindData, row);
		}
		
		if (isBtn == true) {
			var evt = new nexacro.DSColChangeEventInfo();
			evt.row = row;
			evt.cell = cell;
			evt.col = cell;
			evt.columnid = col;
			evt.oldvalue = oldvalue;
			evt.newvalue = newvalue;
			var func = this.lookupFunc(objGrid.AfterEdit);
			if (func != null) {
				func.call(objDs, evt);
			}
		}
	}
	
	objDs.set_enableevent(true); 
	
	if(objGrid._codeFindManual == true && !this.gfnIsNull(objGrid._cacheCodeInfoList)) {
		if(objGrid._cacheCodeInfo == null) objGrid._cacheCodeInfo = {};
		var dsCodeFind = new Dataset();
		dsCodeFind.loadXML(objGrid._cacheCodeInfoList);
		var cacheid = col;
		if(!this.gfnIsNull(objGrid._cacheCodeInfoLastParam)) {
			cacheid += "_" + objGrid._cacheCodeInfoLastParam;
		}
		objGrid._cacheCodeInfo[cacheid] = {};
		objGrid._cacheCodeInfo[cacheid].CD_CODE = objGrid._cacheCodeInfoListCode;
		objGrid._cacheCodeInfo[cacheid].DS_LIST = dsCodeFind;
	}
};

/************************************************************************
 * 복사 & 붙여넣기
 ************************************************************************/
pForm._grd_paste_event = function (obj, e)
{
	var browser = system.navigatorname;
	this._gfnGirdGetPasteData(obj, browser, this._grd_paste_callback);
	
	e.stopPropagation();
};

pForm._grd_paste_callback = function(oForm, objGrid, copyData, removeEvt) {
	
	if(removeEvt) {
		document.removeEventListener('paste', oForm._gfnGridPasteCallback);
	}
		
	if( oForm.gfnIsNull(copyData)) return;
	
	var colSeperator = "\t";
	var rowData ="";
	rowData = copyData.split("\r\n");
	var rowDataCount = rowData.length;
	if(rowDataCount < 1) {
		e.stopPropagation();
		return;
	}
	
	objGrid.updateToDataset();
	
	var datasetName = objGrid.binddataset;
	var ds = objGrid.getBindDataset();

	var grdCellCount = objGrid.getCellCount("body");
	var rowCount = ds.getRowCount();
	
	var startrow = nexacro.toNumber(objGrid.selectstartrow[objGrid.selectstartrow.length-1]);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(objGrid.selectendrow[objGrid.selectendrow.length-1]);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( objGrid.selecttype == "row" || objGrid.selecttype == "multirow"){
		startcol = 0;
		endcol = objGrid.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(objGrid.selectstartcol[objGrid.selectstartcol.length-1]);
		endcol   = nexacro.toNumber(objGrid.selectendcol[objGrid.selectendcol.length-1]);
	}
	
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false); 
	
	var currRow = endrow;
	var cellIndex = endcol;
	var maxColumnCount = 0;
	var checkIndex = {};	
	var isCodefindNotLoad = false;
	
	// 코드파인드 컬럼 체크. 복사하는 row가 10건 이상인경우
	// 코드파인드 명칭 가져오기 개선으로 사용안함.
	/*
	if(rowDataCount > 10)
	{
		var columnData = rowData[0].split(colSeperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) {
			columnLoopCount = grdCellCount;
		}

		if(maxColumnCount < columnLoopCount) {
			maxColumnCount = columnLoopCount;
		}

		var c = cellIndex;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{
			while (objGrid.getFormatColProperty(c, "size") == 0) {
				c++;
				if(c >= grdCellCount) break;
			}
			if(c >= grdCellCount) break;
			
			var colTemp = objGrid.getCellProperty("body", c, "text");
			var colid;
			if( oForm.gfnIsNull(colTemp) )
			{
				colid = objGrid.getCellProperty("body", c, "text");
			}
			else
			{
				colid = objGrid.getCellProperty("body", c, "text").substr(5);
			}
			
			if(objGrid.usCodefindInfo[colid] != null) {
				if(confirm("코드파인드 컬럼이 있습니다.\r\n코드 유효성 검사를 진행하시겠습니까?\r\n(취소시 다건 입력 속도향상. 코드 유효성은 없음.)") == false) {
					isCodefindNotLoad = true;
					break;
				}
			}
			c++;
		}
	}
	*/
	
	if(isCodefindNotLoad == true) {
		ds.set_enableevent(false); 
	}

	var cacheCodeInfo = {};
	objGrid._codeFindManual = true;
	objGrid._cacheCodeInfo = {};
	objGrid._cacheCodeInfoParamList = {};
	
	for (var i = 0; i < rowDataCount; i++)
	{
		if(rowCount <= currRow)
		{
			//oForm.gfnGridAdd(objGrid, "bottom");
		}
		
		if(rowData[i] == null || rowData[i] == "") {		
			currRow++;
			continue;
		}
		var columnData = rowData[i].split(colSeperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) {
			columnLoopCount = grdCellCount;
		}

		if(maxColumnCount < columnLoopCount) {
			maxColumnCount = columnLoopCount;
		}

		var isEdit = false;
		var isSelf = false;
		var k = 0;
		var c = cellIndex;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{
			while (objGrid.getFormatColProperty(c, "size") == 0) {
				c++;
				if(c >= grdCellCount) break;
			}
			if(c >= grdCellCount) break;
			
			var colTemp = objGrid.getCellProperty("body", c, "text");
			var colid;
			if( oForm.gfnIsNull(colTemp) )
			{
				colid = objGrid.getCellProperty("body", c, "text");
			}
			else
			{
				colid = objGrid.getCellProperty("body", c, "text").substr(5);
			}
			
			var tempValue = columnData[k];
			//if(!oForm.gfnIsNull(tempValue))
			{
				if (oForm._grd_entercell(objGrid, currRow, objGrid.getBindCellIndex("body", colid))) {
					isEdit = true;	
					ds.rowposition = currRow;
					if(ds.colinfos[colid] == null) continue;
					var coltype = ds.colinfos[colid].type.toUpperCase();
					if(coltype == "INT" || coltype == "BIGDECIMAL" || coltype == "FLOAT") {
						ds.setColumn(currRow, colid, Number(oForm.gfnRemoveComma(tempValue)));
					} else {
						var edtype = objGrid.getCellProperty("body", c, "edittype");
						if (edtype == "date") {
							if(!oForm.gfnIsNull(tempValue)) {
								tempValue = tempValue.replace(/\-/g, '');
							}
						}
						if(isCodefindNotLoad != true) {
							// 코드파인드 유효성 검사
							if(objGrid.usCodefindInfo[colid] != null) {
								var cacheid = colid;
								objGrid._cacheCodeInfoColID = colid;
								if(!oForm.gfnIsNull(objGrid._cacheCodeInfoParamList[colid])) {
									var dsCodeFindParam = new Dataset();
									var dsUserParam = new Dataset();
									
									dsCodeFindParam.loadXML(objGrid._cacheCodeInfoParamList[colid]);
									
									var lastUserParam = "";
									for(var r = 0; r < dsCodeFindParam.rowcount; r++) {
										var cd_field = dsCodeFindParam.getColumn(r, "CD_FIELD");
										dsUserParam.addColumn(cd_field, "string");
									}
									
									var func = oForm.lookupFunc(objGrid.BeforeUserDataSetParam);
									var rtn = false;
									if (func != null) {
										var nm_codefind = objGrid.usCodefindInfo[colid].NM_CODEFIND;
										if (nm_codefind.endsWith("_pop") == true) {
											nm_codefind = nm_codefind.substring(0, nm_codefind.lastIndexOf("_pop"));
										}
										var nrow = dsUserParam.addRow();
										rtn = func.call(nm_codefind, dsUserParam, nrow);
										if(rtn) {
											for(var r = 0; r < dsCodeFindParam.rowcount; r++) {
												var cd_field = dsCodeFindParam.getColumn(r, "CD_FIELD");
												lastUserParam += dsUserParam.getColumn(nrow, cd_field);
											}
										}
									}
									
									if(!oForm.gfnIsNull(lastUserParam)) {
										cacheid += "_" + lastUserParam;
									}
								}
								
								// 캐시처리. 로딩된 값은 동일한 값으로 처리
								if(cacheCodeInfo[cacheid] != null && cacheCodeInfo[cacheid][tempValue] != null) {
									isSelf = true;
									ds.set_enableevent(false);
									var cci = cacheCodeInfo[cacheid][tempValue];
									if(cci.NODATA) {
										ds.setColumn(currRow, colid, "");
									} else {
										ds.setColumn(currRow, colid, tempValue);
									}
									var infos = cci.CODEINFO;
									for(var t = 0; t < infos.length; t++) {
										ds.setColumn(currRow, infos[t].CD_FIELD, infos[t].DS_VAL);
									}
									ds.set_enableevent(true);
								} else {
									var codeInfo = [];
									var arrInfo = objGrid.usCodefindInfo;
									var info = arrInfo[colid];
									
									if(objGrid._cacheCodeInfo[cacheid] != null) {
										var _cds = objGrid._cacheCodeInfo[cacheid].DS_LIST;
										_cds.set_filterstr("String(" + objGrid._cacheCodeInfo[cacheid].CD_CODE + ").toLocaleUpperCase() == '" + tempValue + "'");
										
										
										if (_cds.rowcount == 1) {
											isSelf = true;
											ds.set_enableevent(false);
											ds.setColumn(currRow, colid, tempValue);
											
											for (var key in arrInfo) {
												if(key == colid) continue;
												if (arrInfo.hasOwnProperty(key)) {
													if(arrInfo[key].NM_CODEFIND == info.NM_CODEFIND) {
														var cd_field = arrInfo[key].DS_FIELD;
														var ds_val = _cds.getColumn(0, cd_field);
														ds.setColumn(currRow, key, ds_val);
													}
												}
											}
											
											ds.set_enableevent(true);
										} else {
											ds.setColumn(currRow, colid, tempValue);
										}
									}
									else {
										ds.setColumn(currRow, colid, tempValue);
									}
									
									if(cacheCodeInfo[cacheid]==null) {
										cacheCodeInfo[cacheid] = {};
									}
									
									var isNodata = false;
									if(oForm.gfnIsNull(ds.getColumn(currRow, colid))) {
										isNodata = true;
									}
									
									for (var key in arrInfo) {
										if(key == colid) continue;
										if (arrInfo.hasOwnProperty(key)) {
											if(arrInfo[key].NM_CODEFIND == info.NM_CODEFIND) {
												var cd_field = arrInfo[key].DS_FIELD;
												var ds_val = ds.getColumn(currRow, cd_field);
												codeInfo.push({CD_FIELD:cd_field,DS_VAL:ds_val});
											}
										}
									}
									
									cacheCodeInfo[cacheid][tempValue] = { NODATA: isNodata, CODEINFO: codeInfo };
								}
								
							} else {
								ds.setColumn(currRow, colid, tempValue);
							}
						} else {
							ds.setColumn(currRow, colid, tempValue);
							
							// 코드파인드 유효성 검사 안할시 코드 입력후 명칭부분 빈값 처리
							if(objGrid.usCodefindInfo[colid] != null) {
								var arrInfo = objGrid.usCodefindInfo;
								var info = arrInfo[colid];
								for (var key in arrInfo) {
									if(key == colid) continue;
									if (arrInfo.hasOwnProperty(key)) {
										if(arrInfo[key].NM_CODEFIND == info.NM_CODEFIND) {
											var cd_field = arrInfo[key].DS_FIELD;
											ds.setColumn(currRow, cd_field, "");
										}
									}
								}
							}
						}						
						
					}
				}
			}
			k++;
			c++;
		}
		
		if(isEdit && (isCodefindNotLoad || isSelf)) {
			var flag = ds.getColumn(currRow, oForm.ucFlag);
			if(flag != "I" && flag != "D" && flag != "DU" && flag != "U" && flag != "#") {
				ds.setColumn(currRow, oForm.ucFlag, "U");
			}
		}
		
		currRow++;
	}
	objGrid._cacheCodeInfo = null;
	objGrid._cacheCodeInfoColID = null;
	objGrid._cacheCodeInfoParamList = null;
	
	objGrid._codeFindManual = false;
	
	cacheCodeInfo = null;
	
	endrow = endrow + rowDataCount - 1;
	endcol = maxColumnCount - 1;
	
	//system.clearClipboard();

	objGrid.set_enableredraw(true);
	objGrid.set_enableevent(true);
	
	if(isCodefindNotLoad == true) {
		ds.set_enableevent(true); 
	}
	
	//objGrid.selectArea(startrow, startcol, endrow, endcol);
	objGrid.clearSelect();
	objGrid.selectArea(endrow, endcol, endrow, endcol);

};

/************************************************************************
 * 그룹패널, 그룹핑
 ************************************************************************/ 
pForm._grd_group_panel_create = function(objGrid) {
	
	var objParentForm = objGrid.parent;
	var groupPanelId = objGrid.id + "_GroupPanel";
	if(this.gfnLookup(objParentForm, groupPanelId) != null) return;
	
	var objApp = pForm.gfnGetApplication();
	
	// 그룹핑 패널 및 이벤트
	objGrid.addEventHandler("ondrag", this._grd_ondrag, this);
	this.addEventHandler("ondragmove", this._form_ondragmove, this);
	this.addEventHandler("ondrop", this._form_ondrop, this);
	
	var objGroupPanel = new Div();	
	
	var gtop = objGrid.top;
	if(typeof(gtop) == "string" && gtop.indexOf(':') > -1) {
		var top_id = gtop.split(':')[0];
		var space = gtop.split(':')[1];
		if(objParentForm[top_id] != null) {
			gtop = objParentForm[top_id]._adjust_top + objParentForm[top_id]._adjust_height + nexacro.toNumber(space);
		}
	}
	
	var gleft = null;
	var gright = null;
	var gwidth = null;
	var gheight = null;
	if(objGrid.left != null) {
		gleft = objGrid.left;
	}
	if(objGrid.right != null) {
		gright = objGrid.right;
	}
	if(objGrid.width != null) {
		gwidth = objGrid.width;
	}
	if(objGrid.height != null) {
		gheight = objGrid.height;
	}
	objGroupPanel.init(groupPanelId, gleft, gtop, gwidth, 0, gright);
	objParentForm.insertChild(0, groupPanelId, objGroupPanel);
	objGroupPanel.show();
	objGroupPanel.set_text("그룹핑영역 (그리드 헤더를 끌어서 여기에 놓으세요)");
	objGroupPanel.set_cssclass("div_GRID_Panel");
	objGroupPanel.addEventHandler("ondrop", this._grd_group_panel_ondrop, this);
	
	objGrid.set_top(groupPanelId + ":0");
	objGrid.grouppanel = objGroupPanel;
	
	var sPopMenu = "popMenu_" + groupPanelId;
	var objPopMenu = new PopupMenu(sPopMenu, 0, 0, 100, 100);
	
	objParentForm.addChild(objPopMenu.name, objPopMenu);
	
	objPopMenu.set_innerdataset(objApp.gdsGroupPanelPopupMenu);
	objPopMenu.set_captioncolumn("caption");
	objPopMenu.set_enablecolumn("enable");
	objPopMenu.set_idcolumn("id");
	objPopMenu.set_levelcolumn("level");
 	objPopMenu.addEventHandler("onmenuclick", this._grd_group_panel_onmenuclick, objParentForm);
	objPopMenu.show();	
	objPopMenu.set_itemheight(34);
	objPopMenu.bindgrid = objGrid;
	objGroupPanel.popupMenu = objPopMenu;
	objGroupPanel.addEventHandler("onrbuttondown", this._grd_group_panel_onrbuttondown, this);	
	
};

pForm._grd_ondrag = function(obj, e)
{
	obj._ML_BTN_DRAG = true;
	
	trace(" _grd_ondrag=>" );
	
	if (e.cell == 0) {
		//e.preventDefault();
		//return true;
	}
	else if (e.row < 0 && obj._global_cursor == null) {
		//obj.headblock = true;
		e.set_userdata("grouppanel");
		var coltxt = obj.getCellText(e.row, e.cell)
		if(!this.gfnIsNull(coltxt)) {
			coltxt = coltxt.replace(/\▲/g, "").replace(/\▼/g, "").replace(/\n/g, ' ');
		}
// 		var colnm 	= this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
		var cellid	= obj.getCellProperty("head", e.cell, "id");
		var refCell = this._gfnGridGetGridCellObject(obj, "head", e.cell);
		if(this.gfnIsNull(cellid)) return false;
		var colnm 	= cellid.substring(0,cellid.indexOf("__"));
		
		var cell_rect = obj.getCellRect(e.row, e.cell);
		var nX = system.screenToClientX(this, e.screenx);
		var nY = system.screenToClientY(this, e.screeny);  
		if (this["StaticGroup"] != null) {
			var static00 = this["StaticGroup"];	
			static00.bindgrid = obj;
			static00.refCell = refCell;
			static00.set_text(coltxt);
			static00.set_tooltiptext(colnm);
			static00.set_left(nX);
			static00.set_top(nY);
			static00.set_visible(true);
		} else {
			var static00 = new Static();				
			static00.init("StaticGroup", nX, nY, cell_rect.width, 26 );	
			static00.bindgrid = obj;
			static00.refCell = refCell;
			static00.set_text(coltxt);
			static00.set_tooltiptext(colnm);
			static00.set_padding("0px 7px 0px 7px");
			static00.set_background("#FAFAFA");
			static00.set_border("1px solid #D2CFCD");			
			static00.set_fittocontents("width");
			this.addChild("StaticGroup", static00);
			static00.show();		
		}
		return true;
	} 
};

pForm._grd_group_panel_ondrop = function(obj,e)
{
	if (this["StaticGroup"] != null) {	
		var static00 = this["StaticGroup"];	
		var objGrid = static00.bindgrid;
		static00.set_visible(false);
		
		this._grd_group_panel_build(objGrid, static00);
	}
};

pForm._grd_group_panel_build = function(objGrid, static00, isDel) 
{
	var objGroupPanel = objGrid.grouppanel;
	var objDs = objGrid.getBindDataset();
	var colnm = "";
	var coltxt = "";
	var colref;
	var arr_col = [];
	var arr_nm = [];
	var arr_ref = [];
	if (!this.gfnIsNull(objGroupPanel.col_group)) {
		arr_col = objGroupPanel.col_group;
		arr_nm = objGroupPanel.col_name;
		arr_ref = objGroupPanel.col_ref;
	}
	
	// 기존 item 전부 제거
	for (var i=0; i < arr_col.length; i++) {
		var staItemId = "StaticGroup_"+arr_col[i];
		var staItemRmId = staItemId+"_remove";
		var cont = objGroupPanel.removeChild(staItemId);
		if(cont != null) cont.destroy();
		cont = objGroupPanel.removeChild(staItemRmId);
		if(cont != null) cont.destroy();
	}
	
	var isChange = false;
	if (static00 != null) {
		colnm = static00.tooltiptext;
		coltxt = static00.text;
		colref = static00.refCell;
		
		var findIdx = arr_col.indexOf(colnm);
		if(isDel == true) {
			if (findIdx > -1) {
				arr_col.splice(findIdx, 1);
				arr_nm.splice(findIdx, 1);
				arr_ref.splice(findIdx, 1);
				isChange = true;
			}
		} else {
			if (findIdx == -1) {
				arr_col.push(colnm);
				arr_nm.push(coltxt);
				arr_ref.push(colref);
				objGroupPanel.col_group = arr_col;
				objGroupPanel.col_name = arr_nm;
				objGroupPanel.col_ref = arr_ref;
		// 			for(var i = 0; i < arr_col.length; i++) {
		// 				objGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", arr_col[i]), "suppress", (i+1));
		// 			}

				isChange = true;
			}
			
// 			if (arr_col.length == 1) {
// 				this._gfnGridCellFree(objGrid);
// 			}
		}
	} else {
		isChange = true;
	}	
	
	if(isChange) {
		this.gfnMakeReverseSubsumTree(objGrid, arr_col, 200);
		/*
		if(arr_col.length > 0) {
			objDs.set_keystring(G:" + arr_col.join(',') + ",S:-nx_sort");
		} else {
			objDs.set_keystring("S:-nx_sort");
		}
		*/
		this._grd_filter_row_set(objGrid, objDs, true);
	}
	
	var beforeStaId = "";
	for (var i=0; i < arr_col.length; i++) {
		var staItemId = "StaticGroup_"+arr_col[i];
		var staItemRmId = staItemId+"_remove";
		
		var staItem = new Static();
		var staItemRm = new Static();
		if(i == 0) {
			staItem.init(staItemId, 10, 3, 50, 22 );
		} else {
			staItem.init(staItemId, beforeStaId+":5", 3, 50, 22 );	
		}
		staItemRm.init(staItemRmId, staItemId+":0", 3, 15, 22 );	
		beforeStaId = staItemRmId;
		staItem.set_text(arr_nm[i]);
		staItem.set_padding("0px 7px 0px 7px");
		staItem.set_background("#ffffff");
		staItem.set_border("1px solid #D2CFCD, 0px none, 1px solid #D2CFCD, 1px solid #D2CFCD");
		staItem.set_fittocontents("width");
		
		staItemRm.set_tooltiptext(arr_col[i]);
		staItemRm.set_text("x");
		staItemRm.set_background("#ffffff");
		staItemRm.set_border("1px solid #D2CFCD, 1px solid #D2CFCD, 1px solid #D2CFCD, 0px none");
		staItemRm.set_cursor("pointer");
		staItemRm.addEventHandler("onclick", this._grd_group_panel_item_remove_onclick, this)
		staItemRm.bindgrid = objGrid;
		
		objGroupPanel.addChild(staItemId, staItem);
		objGroupPanel.addChild(staItemRmId, staItemRm);
		
		staItem.show();		
		staItemRm.show();
	}
}

pForm._grd_group_panel_item_remove_onclick = function(obj,e)
{
	var objGrid = obj.bindgrid;
	this._grd_group_panel_build(objGrid, obj, true);
}

pForm._form_ondragmove = function(obj,e)
{
	if (e.userdata == "grouppanel") {
		var static00 = this["StaticGroup"];
		if( static00.visible == true )
		{	
			var nX = system.screenToClientX(this, e.screenx)+5;
			var nY = system.screenToClientY(this, e.screeny)-15;  
			static00.move(nX, nY);
		}
	}
};

pForm._form_ondrop = function(obj,e)
{
	if (this["StaticGroup"] != null) {
		var static00 = this["StaticGroup"];		
		static00.set_visible(false);
	}
};

pForm._grd_group_panel_onrbuttondown = function (objDiv, e)
{
	var objApp = pForm.gfnGetApplication();
	
	// 대상 그리드와 셀 정보를 추가
	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));
	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0));

	objDiv.popupMenu.trackPopup(x, y);
};


pForm._grd_group_panel_onmenuclick = function (objMenu, e)
{
	var selectId   = e.id;
	var objGrid 	   = objMenu.bindgrid;
	var objGroupPanel  = objGrid.grouppanel;
	var objDs		   = objGrid.getBindDataset();
	var nCellIndex = objMenu.cellindex;	
	var nRowIndex  = objMenu.rowindex;

	switch(selectId) {
		case "groupfree": //그룹핑 해제
			/*
			objDs.set_enableevent(false);
			objDs.set_keystring(objGrid._dsKeyString);
			this._grd_filter_row_set(objGrid, objDs);
			objDs.set_enableevent(true);
			*/
			
			// 기존 item 전부 제거
			var arr_col = [];
			if (!this.gfnIsNull(objGroupPanel.col_group)) {
				arr_col = objGroupPanel.col_group;
			}
			if (arr_col.length > 0) {
				this.gfnMakeReverseSubsumTree(objGrid, [], 200);
				
				for (var i=0; i < arr_col.length; i++) {
					var staItemId = "StaticGroup_"+arr_col[i];
					var staItemRmId = staItemId+"_remove";
					var cont = objGroupPanel.removeChild(staItemId);
					if(cont != null) cont.destroy();
					cont = objGroupPanel.removeChild(staItemRmId);
					if(cont != null) cont.destroy();
				}
				
				objGroupPanel.col_group = null;
				objGroupPanel.col_name = null;
				objGroupPanel.set_text("그룹핑영역 (그리드 헤더를 끌어서 여기에 놓으세요)");
			}
			break;
		
		case "grouppanel": //그룹패널 숨기기
			objGroupPanel.set_height(0);
			objGrid.set_top(objGroupPanel.id + ":0");
			break;
			
		default: break;
	}
};

/*
 *	그리드 찾기 패널
 */
 pForm._grd_find_panel_create = function(objGrid) {
 
	var objParentForm = objGrid.parent;
	var findPanelId = objGrid.id + "_FindPanel";
	var txtSearchId = objGrid.id + "_FindPanel_Search";
	if(this.gfnLookup(objParentForm, findPanelId) != null) {
		//objParentForm.removeChild(findPanelId);
		objParentForm[findPanelId].set_visible(true);
		objParentForm[findPanelId].form[txtSearchId].setFocus();
		return;
	}
	var width = objGrid._adjust_width;
	if(width == null || width > 300) {
		width = 300;
	}
	var objFindPanel = new Div();
	objFindPanel.init(findPanelId, objGrid._adjust_left, objGrid._adjust_top, width, 45);
	
	var txtSearch = new Edit();
	var btnPrev = new Button();
	var btnNext = new Button();
	var btnClose = new Button();
	var btnPrevId = objGrid.id + "_FindPanel_Prev";
	var btnNextId = objGrid.id + "_FindPanel_Next";
	var btnCloseId = objGrid.id + "_FindPanel_Close";
	
	txtSearch.init(txtSearchId, 7, 10, null, 22, 140);
	btnPrev.init(btnPrevId, txtSearchId + ":3", 10, 50, 22);
	btnNext.init(btnNextId, btnPrevId + ":2", 10, 50, 22);
	btnClose.init(btnCloseId, btnNextId + ":7", 10, 23, 22);
	btnPrev.set_text("Prev");
	btnNext.set_text("Next");
	btnClose.set_text("X");
	
	txtSearch.bindgrid = objGrid;
	btnPrev.bindgrid = objGrid;
	btnNext.bindgrid = objGrid;
	txtSearch.bindsearch = txtSearch;
	btnPrev.bindsearch = txtSearch;
	btnNext.bindsearch = txtSearch;
	
	txtSearch.addEventHandler("onkeydown", this._grd_find_panel_search_keydown, this);
	btnPrev.addEventHandler("onclick", this._grd_find_panel_prev_click, this);
	btnNext.addEventHandler("onclick", this._grd_find_panel_next_click, this);
	btnClose.addEventHandler("onclick", this._grd_find_panel_close_click, this);
	
	objFindPanel.addChild(txtSearchId, txtSearch);
	objFindPanel.addChild(btnPrevId, btnPrev);
	objFindPanel.addChild(btnNextId, btnNext);
	objFindPanel.addChild(btnCloseId, btnClose);
	
	objParentForm.addChild(findPanelId, objFindPanel);
	//objFindPanel.set_cssclass("div_GRID_FindPanel");
	txtSearch.set_border("1px solid #A9A9A9");
	objFindPanel.set_background("#C1C1C1");
	objFindPanel.set_border("1px solid #A9A9A9");
	objFindPanel.show();
	
	txtSearch.set_autoselect(true);
	txtSearch.show();
	btnPrev.show();
	btnNext.show();
	btnClose.show();
	
	txtSearch.setFocus();
 };
 
 
 pForm._grd_find_panel_search_keydown = function(obj, e) {
	if(e.keycode == 13) {
		this._grd_find_panel_next_click(obj, e);
		if (system.navigatorname != "nexacro") {
			event.preventDefault();
		}
	}
};
 
 pForm._grd_find_panel_prev_click = function(obj, e) {
	this._grd_find_panel_prevnext(obj, e, false);
 };
 
 pForm._grd_find_panel_next_click = function(obj, e) {
	this._grd_find_panel_prevnext(obj, e, true);
 };
 
 pForm._grd_find_panel_prevnext = function(obj, e, next) {
	var search = obj.bindsearch.text;
	var objGrid = obj.bindgrid;
	if (objGrid._FIND_TEXT_ROWS == null || objGrid._FIND_TEXT != search) {
		objGrid._FIND_TEXT_ROWS = -1;
	}
	if (objGrid._FIND_TEXT_COLS == null) {
		objGrid._FIND_TEXT_COLS = -1;
	}
	
	if (objGrid._FIND_TEXT_ROWS > -1 && objGrid._FIND_TEXT_COLS > -1) {
		var bSelect = false;
		if (next) {
			for(var k=(objGrid._FIND_TEXT_COLS+1); k<objGrid.getFormatColCount(); k++){
				if(objGrid.getFormatColProperty(k, "size") == 0) continue;
				if(this._grd_find_panel_get_col(objGrid, k, search)) {
					bSelect = true;
					break;
				}
			}
		} else {
			for(var k=(objGrid._FIND_TEXT_COLS-1); k>=0; k--){
				if(objGrid.getFormatColProperty(k, "size") == 0) continue;
				if(this._grd_find_panel_get_col(objGrid, k, search)) {
					bSelect = true;
					break;
				}
			}
		}
		if(bSelect) {
			var org_selecttype = objGrid.selecttype;				
			objGrid.set_selecttype("cell");
			objGrid.setCellPos(objGrid._FIND_TEXT_COLS);
			objGrid.set_selecttype(org_selecttype);
			return;
		}
	}
	
	var objDs = objGrid.getBindDataset();
	var expr = [];
	for(var k=0; k<objGrid.getFormatColCount(); k++){
		if(objGrid.getFormatColProperty(k, "size") == 0) continue;
		var bcell = this._gfnGridGetBodyCellIndex(objGrid, k);
		if(bcell > -1) {
			var ds_field = objGrid.getCellProperty("body", bcell, "text");
			if(ds_field.indexOf("bind:") > -1) {
				ds_field = ds_field.replace("bind:", "");
				expr.push("String("+ds_field+").toLocaleUpperCase().indexOf('" + search.toLocaleUpperCase() + "') > -1");
			}
		}
	}
	if(expr.length > 0) {
		var crow = objGrid._FIND_TEXT_ROWS;		
		if(next) {
			crow++;
		} else {
			crow--;
		}
			
		if(objGrid._FIND_TEXT_ROWS < 0) {
			objGrid._FIND_TEXT_ROWS = 0;
		}
				
		var frow = objDs.findRowExpr(expr.join(" || "), crow);
		objGrid._FIND_TEXT = search;
		
		if(frow > -1) {		
			if(!next && frow > crow) {
				if(crow > 0) {
					objGrid._FIND_TEXT_ROWS = crow;
					this._grd_find_panel_prevnext(obj, e, next);
				} else {
					objGrid._FIND_TEXT_ROWS = frow;
				}				
				return;
			}		
			objGrid._FIND_TEXT_ROWS = frow;
			
			// 커서선택을 위한 처리
			var org_selecttype = objGrid.selecttype;				
			objGrid.set_selecttype("cell");
			
			objGrid._FIND_TEXT_MODE = true;
			objDs.set_rowposition(objGrid._FIND_TEXT_ROWS);
			
			var bSelect = false;
			if(next) {
				for(var k=0; k<objGrid.getFormatColCount(); k++){
					if(objGrid.getFormatColProperty(k, "size") == 0) continue;
					if(this._grd_find_panel_get_col(objGrid, k, search)) {
						bSelect = true;
						break;
					}
				}
			} else {
				for(var k=(objGrid.getFormatColCount()-1); k>=0; k--){
					if(objGrid.getFormatColProperty(k, "size") == 0) continue;
					if(this._grd_find_panel_get_col(objGrid, k, search)) {
						bSelect = true;
						break;
					}
				}
			}
			
			if(bSelect) {
				objGrid.setCellPos(objGrid._FIND_TEXT_COLS);
			}
			
			objGrid.set_selecttype(org_selecttype);
			objGrid._FIND_TEXT_MODE = false;
			objGrid._FIND_TEXT_SELCHG = false;
			
		} else {
			if(next) {
				if(objGrid._FIND_TEXT_SELCHG == true) {
					objGrid._FIND_TEXT_SELCHG = false;
					objGrid._FIND_TEXT_ROWS = 0;
					this._grd_find_panel_prevnext(obj, e, next);
				}
			} else {
				objGrid._FIND_TEXT_ROWS--;
				if(objGrid._FIND_TEXT_ROWS > -1) {
					this._grd_find_panel_prevnext(obj, e, next);
				}
				return;
			}
		}
	} else {
		objGrid._FIND_TEXT_ROWS = 0;
	}
};

pForm._grd_find_panel_get_col = function(objGrid, k, search) {
	var bcell = this._gfnGridGetBodyCellIndex(objGrid, k);
	if(bcell > -1) {
		var text = objGrid.getCellText(objGrid._FIND_TEXT_ROWS, bcell);
		if(!this.gfnIsNull(text) && text.toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) > -1) {
			objGrid._FIND_TEXT_COLS = bcell;
			return true;
		}
	}
	return false;
}
 
pForm._grd_find_panel_close_click = function(obj, e) {
	//obj.parent.parent.destroy();
	obj.parent.parent.set_visible(false);
};

pForm._grd_head_onmouseover = function(objGrid, objForm, startIdx) {
	if(startIdx==null) startIdx = 1;
	if(objGrid._headBand != null) {
		document.getElementById(objGrid._headBand._unique_id).onmouseover = function() {
			var obj = this;
			objForm._grd_head_filterlist(objGrid, obj, startIdx);			
			
			var el = document.elementFromPoint(event.pageX, event.pageY);
			if(el != null && el["id"] != null && el.id.indexOf(".cell_") > -1) {
				var ele = document.getElementById(el.id.replace(":text",""));
				if(ele != null) {
					var fl = ele.getElementsByClassName('filterlist');
					if(fl.length > 0) {
						fl[0].style.display = "block";
					}
				}
			}
		}
	}
}
 
pForm._grd_head_filterlist = function(objGrid, obj, startIdx) {
	if(objGrid._flcomplete && obj.getElementsByClassName('filterlist').length > 0) return;
	
	// 컬럼필터 적용
	var objForm = this;
	if(objGrid._bodyShowCnt == null) {
		objGrid._bodyShowCnt = 0;
		for(var b = 1; b < objGrid.getCellCount("body"); b++) {
			if(objGrid.getFormatColSize(b) == 0) continue;
			objGrid._bodyShowCnt++;
		}
	}
	var fcnt = 1;
	for(var z = startIdx; z < objGrid.getCellCount("head"); z++) {
		var ele = document.getElementById(objGrid._getCurrentHeadCell(z, true)._unique_id);
		if (ele == null) continue;
		if (ele.filterlist) {
			var fl = ele.getElementsByClassName('filterlist');
			if(fl.length > 0) {
				continue;
			}
		}
		var bodyCellIndex = objForm._gfnGridGetBodyCellIndex(objGrid, z);
		if (bodyCellIndex < 0) continue;
		
		var ty_input = objGrid.getCellProperty("head", z, "ty_input");
		if (ty_input == "CHECKBOXALL" || ty_input == "CHECKBOXALL_YN") continue;
		
		if(objGrid._bodyShowCnt == fcnt) {
			objGrid._flcomplete = true;
		}
		fcnt++;
		
		ele.filterlist = true;
		ele.onmouseover = function() {
			var fl = this.getElementsByClassName('filterlist');
			if(fl.length > 0) {
				fl[0].style.display = "block";
			}
		}
		ele.onmouseout = function() {
			var fl = this.getElementsByClassName('filterlist');
			if(fl.length > 0) {
				fl[0].style.display = "none";
			}
			var bl_Selfilter = document.getElementsByClassName('selfilter');
			for (let i = 0; i < bl_Selfilter.length; i++) {
			   bl_Selfilter[i].children[1].style.display = 'block';
			}
		}
		var divFL = document.createElement("div");
		divFL.setAttribute("style", _GC_DivFilterStyle);
		divFL.className = "filterlist";
		divFL.innerHTML = _GC_ImgFilter;
		divFL.onmouseenter = function() {
			objGrid._filterliston = true;
		}
		divFL.onmouseleave = function() {
			objGrid._filterliston = false;
		}
		ele.appendChild(divFL);
	}
}

/**
* @description 	       : ReverseSubsum을 활용한 Tree만들기 함수
* @param objGrid       : 설정할 그리드
*        arrColumnList : Tree의 그룹으로 설정할 컬럼리스트
*        nSize         : Tree를 표현할 컬럼의 Width
* @return              : 없음
*/
pForm.gfnMakeReverseSubsumTree = function (objGrid, arrColumnList, nSize)
{
	var i;
	var nCount = arrColumnList.length;
	var objDs = objGrid.getBindDataset();
	var sKeyString;
	
	//성능향상을 위해 Redraw/Event 정지
	objGrid.set_enableredraw(false);
	objDs.set_enableevent(false);
	
	//그룹핑된 컬럼이 없을 경우 초기화
	if(nCount==0)
	{			
		if(objGrid.usereversesubsum == true) {
			//그리드 컬럼 삭제
			if(objGrid.getFormatColProperty( 1, "band" ) == "left") {
				objGrid.deleteContentsCol("left", 1);
			} else {
				objGrid.deleteContentsCol("body", 1);
			}
		}
		
		//그룹핑 설정 여부 false
		objGrid.usereversesubsum = false;
		objGrid.IsTree = objGrid._IsTree;
		
		//그룹핑 Keystring 초기화
		//objDs.set_keystring("");
		objDs.set_keystring("S:-nx_sort");
	}
	//그룹핑된 컬럼이 있을 경우 그리드 컬럼 추가 및 설정
	else
	{
		//데이터셋 keystring에 설정할 그룹키 생성
		sortInfos = objGrid.sortInfos;
		sKeyString = "G:-nx_sort";
		sSortKeyString = ",S:-nx_sort";
		if(!this.gfnIsNull(objGrid.sortKeyString)) {
			sSortKeyString = ","+objGrid.sortKeyString;
		}
		var cell = -1;
		for(i=0;i<nCount;i++)
		{
			var status = "";
			if(!this.gfnIsNull(sortInfos) && sortInfos[arrColumnList[i]] != null) {
				var s = sortInfos[arrColumnList[i]].status;
				if(s>0) {
					if(s==1) {
						status = "+";
					} else {
						status = "-";
					}
				}
			}
			if(i==0)sKeyString += (status==""?"+":status)+arrColumnList[i];
			else sKeyString += "," + status + arrColumnList[i];
			
			cell = objGrid.getBindCellIndex("body", arrColumnList[i]);
		}
		
		var expr_cssclass = "";
		var no_size = 0;
		if(cell > -1) {
			expr_cssclass = objGrid.getCellProperty("body", cell, "cssclass");
			no_size = Number(objGrid.getFormatColProperty(cell, "size")) + (25*nCount);
			if(no_size < 100) {
				no_size = 100;
			}
		}
		
		if(objGrid.yn_grouppanel == "Y") {
			//reversesubsum 설정
			objDs.set_reversesubsum(true);
			
			//keystring 설정
			objDs.set_keystring(sKeyString + sSortKeyString);
			
			//expr에서 사용하기위해 컬럼리스트를 데이터셋의 변수로 등록
			objDs.treecolumnlist = arrColumnList;
			
			//그룹핑 설정여부가 false일 경우 컬럼 추가 및 설정
			if(objGrid.usereversesubsum != true)
			{
				//한번만 실행될 수 있도록 그룹핑 설정 값을 true로 설정
				objGrid.usereversesubsum = true;
				objGrid.IsTree = true;
				objGrid.tree_level_column = "#GROUP#";
				
				//그리드에 Col 삽입
				var ncol;
				if(objGrid.getFormatColProperty( 1, "band" ) == "left") {
					ncol = objGrid.insertContentsCol("left", 1);
				} else {
					ncol = objGrid.insertContentsCol("body", 0);
				}
				
				objGrid.setCellProperty("body", ncol, "cssclass", expr_cssclass);
				
				//삽입된 Column의 displaytype을 treeitemcontrol로 설정
				objGrid.setCellProperty("body", ncol, "displaytype", "treeitemcontrol");
				
				//삽입된 Column의 edittype을 tree 설정
				objGrid.setCellProperty("body", ncol, "edittype", "tree");
				
				//삽입된 Column의 text를 그룹핑된 컬럼의 정보를 표현하기 위한 Expr함수 설정
				objGrid.setCellProperty("body", ncol, "text", "expr:comp._comp_gfnSetSubSumText(currow, dataset, comp)");
				
				//treelevel 값의 증가값이 rowlevel과 반대이므로 역순으로 계산 하기위한 Expr 설정
				objGrid.setCellProperty("body", ncol, "treelevel", "expr:dataset.treecolumnlist.length>0?dataset.treecolumnlist.length-dataset.getRowLevel(currow):'0'");
			}
			
			//삽입된 Col의 사이즈 변경
			if(no_size > objGrid.getFormatColProperty(1, "size")) {
				objGrid.setFormatColProperty(1, "size", no_size);
			}
		}
		else {		
			//keystring 설정
			objDs.set_keystring(sKeyString + sSortKeyString);
		}
	}	
	
	//성능향상을 위해 Redraw/Event 재실행
	objDs.set_enableevent(true);
	objGrid.set_enableredraw(true);

	var objForm = this;	
	this.gfnSetTimer(objForm, function() {
		this._grd_head_onmouseover(objGrid, objForm);
	}, 700);
}
