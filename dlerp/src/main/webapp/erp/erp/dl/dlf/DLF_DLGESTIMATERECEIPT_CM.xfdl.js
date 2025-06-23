(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("별도계약예상수납안내");
            this.getSetter("maxwidth").set("950");
            this.getSetter("maxheight").set("670");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_ITEMCONTRACT_SELECT_NoService</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DRFPR_RECEIPTINFO_DATE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCalc</Col><Col id=\"SP\">DRFPR_RECEIPTINFO_CALCULATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_RECEIVED\"/><Col id=\"AM_RECEIVED\"/><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_UNIONMEMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCalc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("수납정보");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta00:10",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","objGrid:10","100.00%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","staTITLE:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("수납기준일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","staTITLE:5","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","staTITLE:5","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("입금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","staTITLE:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIVED","sta01:4","staTITLE:7","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIVED","sta03:4","staTITLE:7","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf",null,"staTITLE:7","70","26","2",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta01:10",null,"250","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_RECEIVED","value","dsSearch","DT_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtAM_RECEIVED","value","dsSearch","AM_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLF_DLGESTIMATERECEIPT_CM.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT"   , this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG"	   , this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR"	   , this.getOwnerFrame().NO_FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO"		   , this.getOwnerFrame().NO_HO);
        	this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid         = this.divData.form.objGrid;
        	this.dxGridSub      = this.divData.form.objGridSub;

        	this.tclDT_RECEIVED = this.divData.form.tclDT_RECEIVED;
        	this.txtAM_RECEIVED = this.divData.form.txtAM_RECEIVED;
        	this.staTITLE       = this.divData.form.staTITLE;

        	this.btnConf        = this.divData.form.btnConf;

        	// 수납기준일자.
        	this.dsSearch.setColumn(0, "DT_RECEIVED", this.gfnGetDate());

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid   , this.dsList   , "DR", "DRF_DLGESTIMATERECEIPT_1");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DR", "DRF_DLGESTIMATERECEIPT");

        	this.btnConf.addEventHandler("onclick", this.fnButtonClick, this);

        	this.dxGrid.set_selecttype("cell");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"			, "string");
        	this.dsSelect.addColumn("TY_GUBUN"				, "string");
        	this.dsSelect.addColumn("NO_CHASU"				, "string");
        	this.dsSelect.addColumn("NO_DONG" 				, "string");
        	this.dsSelect.addColumn("NO_FLOOR"				, "string");
        	this.dsSelect.addColumn("NO_HO"         		, "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER"		, "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT"   		, "string");
        	this.dsSelectSub.addColumn("TY_GUBUN"	   		, "string");
        	this.dsSelectSub.addColumn("NO_CHASU"	   		, "string");
        	this.dsSelectSub.addColumn("NO_DONG" 	   		, "string");
        	this.dsSelectSub.addColumn("NO_FLOOR"	   		, "string");
        	this.dsSelectSub.addColumn("NO_HO"         		, "string");
        	this.dsSelectSub.addColumn("NO_UNIONMEMBER"		, "string");
        	this.dsSelectSub.addColumn("DT_RECEIVED"   		, "string");
        	this.dsSelectSub.addColumn("NO_CONTRACT"   		, "string");

        	this.dsSelectCalc = new Dataset();
        	this.dsSelectCalc.addColumn("CD_ACNTUNIT"   	, "string");
        	this.dsSelectCalc.addColumn("TY_GUBUN"	   		, "string");
        	this.dsSelectCalc.addColumn("NO_CHASU"	   		, "string");
        	this.dsSelectCalc.addColumn("NO_DONG" 	   		, "string");
        	this.dsSelectCalc.addColumn("NO_FLOOR"	   		, "string");
        	this.dsSelectCalc.addColumn("NO_HO"         	, "string");
        	this.dsSelectCalc.addColumn("NO_UNIONMEMBER"	, "string");
        	this.dsSelectCalc.addColumn("DT_RECEIVED"   	, "string");
        	this.dsSelectCalc.addColumn("NO_CONTRACT"   	, "string");
        	this.dsSelectCalc.addColumn("AM_RECEIVED"   	, "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectSub = function() {

        	// 데이터가 세팅 된 이후에 변경되므로 선 잠금세팅.
        	this.dxGridSub.set_enableredraw(false);
        	this.dsListSub.set_enableevent(false);

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSub.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectSub.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectSub.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectSub.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectSub.setColumn(0, "DT_RECEIVED"   , this.dsSearch.getColumn(0, "DT_RECEIVED"));
        	this.dsSelectSub.setColumn(0, "NO_CONTRACT"   , this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectCalc = function() {

        	this.dsSelectCalc.clearData();
        	this.dsSelectCalc.addRow();

        	this.dsSelectCalc.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectCalc.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectCalc.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectCalc.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectCalc.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectCalc.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectCalc.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectCalc.setColumn(0, "DT_RECEIVED"   , this.dsSearch.getColumn(0, "DT_RECEIVED"));
        	this.dsSelectCalc.setColumn(0, "NO_CONTRACT"   , this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRACT"));
        	this.dsSelectCalc.setColumn(0, "AM_RECEIVED"   , this.dsSearch.getColumn(0, "AM_RECEIVED"));

        	var strSvcId    = "selectCalc";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectCalc=dsSelectCalc";
        	var outData     = "dsListCalc=selectCalc0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        };



        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	if(svcID == "selectSub") {
        		this.fnSelectCalc();
        	}
        	if(svcID == "selectCalc") {

        		if(this.dsSearch.getColumn(0, "AM_RECEIVED") > 0) {
        			this.dxGridSub.set_binddataset(this.dsListCalc);
        		} else {
        			this.dxGridSub.set_binddataset(this.dsListSub);
        		}

        		this.fnGridcalculatorSetter();

        		this.dxGridSub.set_enableredraw(true);
        		this.dsListSub.set_enableevent(true);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.FormBtns.SubSelect.click();
        		this.staTITLE.set_text("계약번호 [" + this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRACT") + "] 의 예상수납안내입니다.");

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {


        	}
        };

        this.fnButtonClick = function(obj,e) {
        	this.fnSelectCalc();
        }

        this.fnGridcalculatorSetter = function() {

        	var i = 0, j = 0, len = this.dsListSub.rowcount, bgRows = [], bgColors = [];

        	for(i = 0; i < len; ++i) {

        		var cha     = this.dsListSub.getColumn(i, "CHA");
        		var tyNapip = this.dsListSub.getColumn(i, "TY_NAPIP");

        		if(tyNapip == "납부금액" || tyNapip == "미수금" || tyNapip == "합계") {
        			this.dsListSub.setColumn(i, "AM_TOTAL", "");
        			this.dsListSub.setColumn(i, "DD_DAY"  , "");

        			bgRows.push(i);
        			bgColors.push("BACK_GangJo");
        		}

        		if(tyNapip == "") {
        			for(j = 0; j < this.dsListSub.colcount; ++j) {
        				this.dsListSub.setColumn(i, this.dsListSub.getColID(j), "");

        				bgRows.push(i);
        				bgColors.push("BACK_Frozen");
        			}
        		}

        		if(cha == "C") {
        			if(this.dsListSub.getColumn(i, "DT_ENDAGREE") <= this.gfnGetDate()) {
        				bgRows.push(i);
        				bgColors.push("BACK_Sum");
        			}
        		}
        	}
        	this.fnModifyGridBgColorAtRow(this.dxGridSub, bgRows, bgColors);
        }

        /**
        *
        *	$rowIdxs = [1, 2, 4]
        *	$colors  = [red, blue, yellow]
        */
        this.fnModifyGridBgColorAtRow = function($grid, $rowIdxs/* Array */, $colors/* Array */) {

        	var i = 0, j = 0, k = 0, dataset = $grid.getBindDataset()
        						   , iLen    = $grid.getBindDataset().rowcount
        						   , jLen    = $grid.getBindDataset().colcount;

        	for(j = 0; j < jLen; ++j) {
        		var rtnExpr = "expr:";
        		for(i = 0; i < iLen; ++i) {
        			for(k = 0; k < $rowIdxs.length; ++k) {
        				if(i == $rowIdxs[k]) {
        					rtnExpr += 'currow' + " == '" + $rowIdxs[k] + "'?'" + $colors[k] + "':''" + (k == ($rowIdxs.length - 1) ? "" : " || ");
        				}
        			}
        		}
        		$grid.setCellProperty("body", j, "cssclass", (rtnExpr == "expr:" ? "" : rtnExpr));
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tclDT_RECEIVED.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DLF_DLGESTIMATERECEIPT_CM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
