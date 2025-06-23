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
            this.set_titletext("미수금현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_MISU_SELECT_3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"NO_NAPCHA1\" type=\"INT\" size=\"256\"/><Column id=\"AM_MISU\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"DT_RECEIVED\"/><Col id=\"NO_NAPCHA1\"/><Col id=\"AM_MISU\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_NAPCHA","ctclDT_START:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("연체월수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_NAPCHA","staNO_NAPCHA:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_MISU","txtNO_NAPCHA:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("미수금");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtAM_MISU","staAM_MISU:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtNO_NAPCHA","value","dsSearch","NO_NAPCHA1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.txtAM_MISU","value","dsSearch","AM_MISU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_MISUSTATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSbAcntunitTypeChange();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
         	this.btnReminder= this.gfnFormButtonAdd("Reminder", "fnReminder");
         	this.btnNotice  = this.gfnFormButtonAdd("Notice", "fnNotice");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.txtNO_NAPCHA = this.divSearch.form.txtNO_NAPCHA;
        	this.txtAM_MISU = this.divSearch.form.txtAM_MISU;
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_MISUSTATE");

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.UserInfo.DR_SPACE01);
        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.UserInfo.DR_SPACE02);
        	this.dsSearch.setColumn(0, "DT_RECEIVED", this.gfnGetDate());

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.setFocus();

        	this.btnReminder.set_enable(false);
        	this.btnNotice.set_enable(false);
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("DT_RECEIVED", "string");
        	this.dsSelect.addColumn("NO_NAPCHA1", "int");
        	this.dsSelect.addColumn("AM_MISU", "BIGDECIMAL");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));  //사업자코드
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));		//종류
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));		//차수
        	this.dsSelect.setColumn(0, "DT_RECEIVED", this.dsSearch.getColumn(0, "DT_RECEIVED"));				//기준날짜
        	this.dsSelect.setColumn(0, "NO_NAPCHA1", this.dsSearch.getColumn(0, "NO_NAPCHA1"));					//기준일자와 약정일차이
        	this.dsSelect.setColumn(0, "AM_MISU", this.dsSearch.getColumn(0, "AM_MISU"));						//제외미수금

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_RECEIVED"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("기준일자가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0){
        			this.btnReminder.set_enable(true);
        			this.btnNotice.set_enable(true);
        		}else{
        			this.btnReminder.set_enable(false);
        			this.btnNotice.set_enable(false);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSbAcntunitTypeChange = function() {
        	if((this.UserInfo.DR_SPACE03 != "1" &&  this.UserInfo.DR_SPACE03 != "2") &&  this.UserInfo.DR_SPACE04 =="N" )
        	{
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_DONG"), "size", 0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_FLOOR"), "size", 0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_HO"), "size", 0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_UNIONMEMBER"), "size", 60);
        	}else{
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_DONG"), "size", 60);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_FLOOR"), "size", 60);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_HO"), "size", 60);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "NO_UNIONMEMBER"), "size", 0);
        	}
        }

        this.fnReminder = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");

        	this.gfnFormOpen("DRC", "Drc_DunningLetter", "fnPopupCallback", param);
        }

        this.fnNotice = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");

        	this.gfnFormOpen("DRC", "Drc_CancelNotify", "fnPopupCallback", param);
        }

        this.fnPopupCallback = function(svcID, val) {
        	//this.FormBtns.Select.click();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.txtNO_NAPCHA.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.txtAM_MISU.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_MISUSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
