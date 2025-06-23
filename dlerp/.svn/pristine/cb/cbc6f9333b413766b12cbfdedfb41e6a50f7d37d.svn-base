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
            this.set_titletext("협력업체 등록증서");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DCAPR_REGIST_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_PUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00","86","73",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00","86","44",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","86","15",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","110","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("발행");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.25%","110","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","15","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("발행번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO00","0","44","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("발행일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","115","15","235","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("제                       -                   호");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","134","19","75","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_format("####");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","237","19","55","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_hotkey("");
            obj.set_format("###");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONT","113","49","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO00_00","0","73","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONT00","113","78","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONT00_00","243","78","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","225","73","15","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_CONT","value","dsSearch","DT_PUBLISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.msk00_00","value","dsSearch","NO_PUBLISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.msk00","value","dsSearch","YY_PUBLISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclDT_CONT00","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_CONT00_00","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCA_REGIST_REPORT.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YY_PUBLISH", this.gfnGetDate().substr(0,4));
        	this.dsSearch.setColumn(0, "DT_PUBLISH", this.gfnGetDate());
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_PUBLISH", "string");
        	this.dsReport.addColumn("NO_PUBLISH", "string");
        	this.dsReport.addColumn("DT_PUBLISH", "string");
        	this.dsReport.addColumn("CD_VENDOR", "string");
        	this.dsReport.addColumn("DT_FROM", "string");
        	this.dsReport.addColumn("DT_TO", "string");

        	this.dsReport.clearData();

        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "YY_PUBLISH", this.dsSearch.getColumn(0, "YY_PUBLISH"));
        	this.dsReport.setColumn(0, "NO_PUBLISH", this.dsSearch.getColumn(0, "NO_PUBLISH"));
        	this.dsReport.setColumn(0, "DT_PUBLISH", this.dsSearch.getColumn(0, "DT_PUBLISH"));
        	this.dsReport.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsReport.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsReport.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dc/dca/DCAPR_REGIST_REPORT.ozr";

        	// 일반: gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	// SAP : gfnOpenReport(this, reportpath, inProc, inParam, inData, true);
        	// SAP 호출시 마지막인자 추가 true 설정
        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_REGIST_REPORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
