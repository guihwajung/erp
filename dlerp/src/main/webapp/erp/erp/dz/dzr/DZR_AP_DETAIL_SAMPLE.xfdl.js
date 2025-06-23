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
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_RISK_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWAPR_RISKDTLS_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"ID_AP_TYPE\"/><Col id=\"V1\"/><Col id=\"V2\"/><Col id=\"V3\"/><Col id=\"V4\"/><Col id=\"DS_ETITLE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","divDataMaster:10",null,"140","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","objGrid:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("변경상세내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta00:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataMaster.form.sta02","text","dsListMaster","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataMaster.form.sta03","text","dsListMaster","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataMaster.form.sta05","text","dsListMaster","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMaster.form.sta07","text","dsListMaster","DS_ETITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMaster.form.sta09","text","dsListMaster","NO_DOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataApprTitle.form.staApprNm","text","dsListMaster","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_AP_DETAIL_SAMPLE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid1 = this.divData.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//결재본문 그리드 세팅
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_RISK_APP");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWA_RISKDTLS_APP");

        	//가로 스크롤이 생기지 않게 세팅
        	this.dxGrid.set_scrollbartype("none default");
        	this.dxGrid1.set_scrollbartype("none default");

        	//헤더색상 변경
        	this.dxGrid.set_enableredraw(false);
        	for(var i = 0; i < this.dxGrid.getCellCount("head"); i++) {
        		this.dxGrid.setCellProperty("head",i,"background","#7DA2A9");
        		//this.dxGrid.setCellProperty("head",i,"color","#7DA2A9");
        	}
        	this.dxGrid.set_enableredraw(true);

        	this.dxGrid1.set_enableredraw(false);
        	for(var i = 0; i < this.dxGrid1.getCellCount("head"); i++) {
        		this.dxGrid1.setCellProperty("head",i,"background","#7DA2A9");
        		//this.dxGrid1.setCellProperty("head",i,"color","#7DA2A9");
        	}
        	this.dxGrid1.set_enableredraw(true);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_RISK", "string");
        	this.dsSelect.addColumn("CD_SRCH", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("TY_WRK", "string");
        	this.dsSelect1.addColumn("CD_SITE", "string");
        	this.dsSelect1.addColumn("NO_RISK", "string");
        	this.dsSelect1.addColumn("NO_HADOCONT", "string");
        	this.dsSelect1.addColumn("NO_SEQCONT", "string");
        }


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        //결재본분 조회
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.objApp.getActiveForm().divWork.form.dsListMaster.getColumn(0, "V_PARAM01"));
        	this.dsSelect.setColumn(0, "NO_RISK", this.objApp.getActiveForm().divWork.form.dsListMaster.getColumn(0, "V_PARAM02"));
        	this.dsSelect.setColumn(0, "CD_SRCH", "");

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect1.setColumn(0, "CD_SITE", this.objApp.getActiveForm().divWork.form.dsListMaster.getColumn(0, "V_PARAM01"));
        	this.dsSelect1.setColumn(0, "NO_RISK", this.objApp.getActiveForm().divWork.form.dsListMaster.getColumn(0, "V_PARAM02"));
        	this.dsSelect1.setColumn(0, "NO_HADOCONT", "");
        	this.dsSelect1.setColumn(0, "NO_SEQCONT", "");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect select1=dsSelect1";
         	var outData     = "dsList=select0 dsList1=select10";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
        };
        this.loadIncludeScript("DZR_AP_DETAIL_SAMPLE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
