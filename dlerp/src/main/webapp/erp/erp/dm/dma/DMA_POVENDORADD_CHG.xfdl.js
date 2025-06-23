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
            this.set_titletext("계약업체관리(변경)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_POVENDORADD_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DMAPR_POVENDORADD_CHG_UPDATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DMAPR_POVENDORADD_CHG_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DMAPR_POVENDORADD_CHG_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_CONT\"/><Col id=\"DS_SUBCON\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_03");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtSN_SEQ","ccfNO_CONT:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_CONT.form.DSTextBox","value","dsSearch","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctxtSN_SEQ","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_POVENDORADD_CHG.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_CONT)) {
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);

        		if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        		{
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		}

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_POVENDORADD_CHG");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("SN_SEQ", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("QN_DIVIDE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_DIVIDE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DIVIDE", "bigdecimal");
        	this.dsUpdate.addColumn("QN_DIVIDE_CHG", "bigdecimal");
        	this.dsUpdate.addColumn("RT_DIVIDE_CHG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DIVIDE_CHG", "bigdecimal");
        	this.dsUpdate.addColumn("DS_BIGO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_CONT", "string");
        	this.dsInsert.addColumn("SN_SEQ", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("RT_DIVIDE", "bigdecimal");
        	this.dsInsert.addColumn("QN_DIVIDE", "bigdecimal");
        	this.dsInsert.addColumn("AM_DIVIDE", "bigdecimal");
        	this.dsInsert.addColumn("QN_DIVIDE_CHG", "bigdecimal");
        	this.dsInsert.addColumn("RT_DIVIDE_CHG", "bigdecimal");
        	this.dsInsert.addColumn("AM_DIVIDE_CHG", "bigdecimal");
        	this.dsInsert.addColumn("DS_BIGO", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CONT", "string");
        	this.dsDelete.addColumn("SN_SEQ", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");

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

        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "NO_PO", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsList.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        				this.dsInsert.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsInsert.setColumn(nrow, "RT_DIVIDE", this.dsList.getColumn(i, "RT_DIVIDE"));
        				this.dsInsert.setColumn(nrow, "QN_DIVIDE", this.dsList.getColumn(i, "QN_DIVIDE"));
        				this.dsInsert.setColumn(nrow, "AM_DIVIDE", this.dsList.getColumn(i, "AM_DIVIDE"));
        				this.dsInsert.setColumn(nrow, "QN_DIVIDE_CHG", this.dsList.getColumn(i, "QN_DIVIDE_CHG"));
        				this.dsInsert.setColumn(nrow, "RT_DIVIDE_CHG", this.dsList.getColumn(i, "RT_DIVIDE_CHG"));
        				this.dsInsert.setColumn(nrow, "AM_DIVIDE_CHG", this.dsList.getColumn(i, "AM_DIVIDE_CHG"));
        				this.dsInsert.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        				this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "QN_DIVIDE", this.dsList.getColumn(i, "QN_DIVIDE"));
        				this.dsUpdate.setColumn(nrow, "RT_DIVIDE", this.dsList.getColumn(i, "RT_DIVIDE"));
        				this.dsUpdate.setColumn(nrow, "AM_DIVIDE", this.dsList.getColumn(i, "AM_DIVIDE"));
        				this.dsUpdate.setColumn(nrow, "QN_DIVIDE_CHG", this.dsList.getColumn(i, "QN_DIVIDE_CHG"));
        				this.dsUpdate.setColumn(nrow, "RT_DIVIDE_CHG", this.dsList.getColumn(i, "RT_DIVIDE_CHG"));
        				this.dsUpdate.setColumn(nrow, "AM_DIVIDE_CHG", this.dsList.getColumn(i, "AM_DIVIDE_CHG"));
        				this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_CONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.txtNO_CONT.setFocus();
        		}
        		this.gfnAlert("계약번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DMX_CFVENDORINS_SITE") {
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		var nrow = this.dsList.rowposition;

               if(e.columnid == "RT_DIVIDE")
        		{
        			var qn_tt_hado = nexacro.toNumber(this.dsList.getColumn(nrow, "QN_TT_HADO"), 0);
        			var rt_divide = nexacro.toNumber(this.dsList.getColumn(nrow, "RT_DIVIDE"), 0);
        			var am_tt_hado = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_TT_HADO"), 0);

        			this.dsList.setColumn(nrow, "QN_DIVIDE", qn_tt_hado * rt_divide * 0.01);
        			this.dsList.setColumn(nrow, "AM_DIVIDE", am_tt_hado * rt_divide * 0.01);
        		}
        		else if(e.columnid == "RT_DIVIDE_CHG")
        		{
        			var qn_tt_hado_chg = nexacro.toNumber(this.dsList.getColumn(nrow, "QN_TT_HADO_CHG"), 0);
        			var rt_divide_chg = nexacro.toNumber(this.dsList.getColumn(nrow, "RT_DIVIDE_CHG"), 0);
        			var am_tt_hado_chg = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_TT_HADO_CHG"), 0);

        			this.dsList.setColumn(nrow, "QN_DIVIDE_CHG", qn_tt_hado_chg * rt_divide_chg * 0.01);
        			this.dsList.setColumn(nrow, "AM_DIVIDE_CHG", am_tt_hado_chg * rt_divide_chg * 0.01);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_POVENDORADD_CHG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
