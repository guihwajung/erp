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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_VENDOR_STATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">year</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_YEAR_MAX_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SCORE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SCORE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_REGIST\"/><Col id=\"YR_MAGAM\"/><Col id=\"NO_SEQ\"/><Col id=\"DS_VENDOR\"/><Col id=\"AM_SCORE_FR\"/><Col id=\"AM_SCORE_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">001</Col><Col id=\"DS_CODE\">1/4분기</Col></Row><Row><Col id=\"CD_CODE\">002</Col><Col id=\"DS_CODE\">2/4분기</Col></Row><Row><Col id=\"CD_CODE\">003</Col><Col id=\"DS_CODE\">3/4분기</Col></Row><Row><Col id=\"CD_CODE\">004</Col><Col id=\"DS_CODE\">4/4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">등록</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","staYR_MAGAM:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","ctclYR_MAGAM:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFEVALUE_NOSEQ");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","ccfNO_SEQ:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:0.0","10.0","193","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_REGIST","0.0","staYR_MAGAM:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("업체등록시기");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_REGIST","staTY_REGIST:0.0","staYR_MAGAM:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_SCORE","ccfNO_SEQ:0.0","staYR_MAGAM:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("총점");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SCORE_FR","staAM_SCORE:0.0","staYR_MAGAM:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.getSetter("inputtype").set("number");
            obj.set_format("9999.99");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctxtAM_SCORE_FR:0.0","staYR_MAGAM:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SCORE_TO","sta00:0.0","staYR_MAGAM:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.getSetter("inputtype").set("number");
            obj.set_format("9999.99");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTY_REGIST","value","dsSearch","TY_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtAM_SCORE_FR","value","dsSearch","AM_SCORE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtAM_SCORE_TO","value","dsSearch","AM_SCORE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_EVALUEMAGAM_VENDOR_STATUS.xfdl", function() {
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

        	this.fnSetYear();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnDamAllChg = this.gfnFormButtonAdd("btnDamAllChg", "fnDamAllChg");
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
        	this.divSearch.form.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUEMAGAM_VENDOR_STATUS");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("TY_REGIST", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("AM_SCORE_FR", "bigdecimal");
        	this.dsSelect.addColumn("AM_SCORE_TO", "bigdecimal");
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

        	this.dsSelect.setColumn(0, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "TY_REGIST", this.dsSearch.getColumn(0, "TY_REGIST"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));

        	var am_score_fr = this.dsSearch.getColumn(0, "AM_SCORE_FR");
        	var am_score_to = this.dsSearch.getColumn(0, "AM_SCORE_TO");

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "AM_SCORE_FR")))
        	{
        		am_score_fr = 0;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "AM_SCORE_TO")))
        	{
        		am_score_to = 100;
        	}

        	this.dsSelect.setColumn(0, "AM_SCORE_FR", am_score_fr);
        	this.dsSelect.setColumn(0, "AM_SCORE_TO", am_score_to);

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        // 	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsUpdate.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        //  				this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        // 				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        // 				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        // 				this.dsUpdate.setColumn(nrow, "YN_FLAG", this.dsList.getColumn(i, "YN_FLAG"));
        //
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsUpdate.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "update=dsUpdate";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_MAGAM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYR_MAGAM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가분기를 입력하세요.", "fnVaidateCallback");
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
        	else if(svcID == "year")
        	{
        		if(this.dsYear.rowcount > 0)
        		{
        			this.dsSearch.setColumn(0, "YR_MAGAM", this.dsYear.getColumn(0, "YR_MAGAM"));
        			this.dsSearch.setColumn(0, "NO_SEQ", this.dsYear.getColumn(0, "NO_SEQ"));

        			this.divSearch.form.ccfNO_SEQ.form.fnCodeFindLoad();
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfNO_SEQ")
        	{
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DC");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "D01");
        		dsUserParam.setColumn(nrow, "YR_MAGAM",this.dsSearch.getColumn(0, "YR_MAGAM"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        	}

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        this.fnSetYear = function()
        {
        	this.dsYearSelect = new Dataset();
        	this.dsYearSelect.addColumn("YR_MAGAM", "string");
        	this.dsYearSelect.addColumn("TY_SYSTEM", "string");
        	this.dsYearSelect.clearData();
        	this.dsYearSelect.addRow();

        	this.dsYearSelect.setColumn(0, "YR_MAGAM", this.gfnGetDate().substr(0,4));
        	this.dsYearSelect.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        	var strSvcId    = "year";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "year=dsYearSelect";
        	var outData     = "dsYear=year0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsNO_SEQ.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUEMAGAM_VENDOR_STATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
