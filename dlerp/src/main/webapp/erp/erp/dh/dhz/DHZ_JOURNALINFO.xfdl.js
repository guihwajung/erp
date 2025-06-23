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
            this.set_titletext("자동전표분개정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_JOURNAL_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DHZPR_JOURNAL_T_TYPE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AUTOSLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_AUTOSLIP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_AUTOSLIP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("자동전표코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_AUTOSLIP","staCD_AUTOSLIP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","31.49%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","900","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta00:4","900",null,null,"0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:10","1",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("Parameter 추가사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("statxtYN_NATION","objGridSub:10","sta01:3",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("\r\n☆ 중복여부 ☆\r\n한 계정이 여러번 중복시 제일 처음 계정에 대한 중복여부는 \'N\'\r\n나머지의 경우는 \'Y\'로 설정\r\n\r\n☆ 부가세가 있을 경우 ☆\r\n거래구분(I/O) 증빙코드 증빙구분 투자유형 매입불공제코드 투자계정 거래처종류\r\n거래처코드  개인/법인구분  접대비여부 접대비지출코드 공급가 부가가치세 외화금액\r\n통화코드 봉사료 신용카드번호 과세특례구분 부가세적요\r\n\r\n☆ 예산이 있을 경우 ☆\r\n부서/임원코드 프로젝트코드 비목코드 세목코드 예산사용자 예산적요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_color("black");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_background("white");
            obj.set_font("normal 11pt/normal \"Arial\"");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_AUTOSLIP.form.CDTextBox","value","dsSearch","CD_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_AUTOSLIP.form.DSTextBox","value","dsSearch","DS_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHZ_JOURNALINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_AUTOSLIP) && !this.gfnIsNull(this.getOwnerFrame().DS_AUTOSLIP)) {
        		this.dsSearch.setColumn(0, "CD_AUTOSLIP", this.getOwnerFrame().CD_AUTOSLIP);
        		this.dsSearch.setColumn(0, "DS_AUTOSLIP", this.getOwnerFrame().DS_AUTOSLIP);

        		this.FormBtns.Select.click();
        	}

        	this.ccfCD_AUTOSLIP.form.CDTextBox.setFocus();
        };

        this.fnSetExtendButton = function() {

        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_AUTOSLIP = this.divSearch.form.ccfCD_AUTOSLIP;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_AUTOSLIP", "string");
        }

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_JOURNAL_INFO");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHZ_JOURNAL_INFO2");

        	this.ccfCD_AUTOSLIP.CodeFindName = "DHX_CFAUTOSLIP";
        	this.ccfCD_AUTOSLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_AUTOSLIP", this.gfnTrim(this.dsSearch.getColumn(0, "CD_AUTOSLIP")));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect detail=dsSelect";
        	var outData     = "dsList=select0 dsListSub=detail0";
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_AUTOSLIP"))) {
        		this.ccfCD_AUTOSLIP.form.CDTextBox.setFocus();
        		this.gfnAlert("자동전표코드를 입력하세요.");
        		return false;
        	}

        	return true;
        }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_AUTOSLIP") {
                dsUserParam.setColumn(nrow, "TY_AUTOSLIP", this.dsSearch.getColumn(0, "CD_AUTOSLIP"));
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
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_AUTOSLIP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncellclick",this.fnCellClick,this);
            this.divData.form.divDataBottom.form.sta00.addEventHandler("onclick",this.divData_sta00_onclick,this);
            this.divData.form.divDataBottom.form.sta01.addEventHandler("onclick",this.divData_sta00_onclick,this);
            this.divData.form.divDataBottom.form.statxtYN_NATION.addEventHandler("onclick",this.divData_statxtYN_NATION_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHZ_JOURNALINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
