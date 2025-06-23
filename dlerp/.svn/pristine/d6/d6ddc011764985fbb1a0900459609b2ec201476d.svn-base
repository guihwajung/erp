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
            this.set_titletext("주요하자사례");
            this.getSetter("maxwidth").set("1390");
            this.getSetter("maxheight").set("780");
            if (Form == this.constructor)
            {
                this._setFormPosition(1390,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CT_HOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JEOBUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MEASURE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BLUEPRINT\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BLUEPRINTNM\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE01\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE01NM\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE02\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_IMAGE02NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DBBPR_CASEDETAIL_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBBPR_CASEDETAIL_UPDATE </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJAJS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAdd", this);
            obj._setContents("<ColumnInfo><Column id=\"PN_SC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTELHOME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTEL\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPECBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KBCIL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_IPJU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("주 요 하 자 사 례");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_font("normal bold 20pt/normal \"Arial\"");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,"680","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","261","30","96","44",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("0");
            obj.set_text("제    목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar00","350","30","858","44",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC00","357","34","843","36",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem01","261","85","96","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_text("1. 현 장 명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","350","85","397","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC01","357","92","383","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02","261","120","96","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_text("3. 공종명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02","350","120","397","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02","357","127","383","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03","747","85","123","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_text("2. 세 대 수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03","868","85","340","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03","875","92","324","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("11");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem04","747","119","123","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("4. 세대&타입");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar04","868","120","340","35",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC04","875","128","324","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("14");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05","261","159","96","92",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("15");
            obj.set_text("5. 접수내용   & 문제점");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05","350","159","858","92",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC05","357","166","843","75",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("17");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem06","261","250","96","92",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("18");
            obj.set_text("6. 대책사항  & 조치사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar06","350","250","858","92",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC06","357","257","843","75",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("20");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem07","261","341","96","159",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("21");
            obj.set_text("7. 향후대책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar07","350","341","858","159",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC07","357","348","843","142",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("23");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem08","261","499","96","92",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("24");
            obj.set_text("8. 전달사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar08","350","499","858","92",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC08","357","506","843","75",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("26");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Button("btnPic1","600","651","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("관련도면");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnPic2","750","651","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가사진");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataMain.form.edtPN_SC00","value","dsList","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataMain.form.edtPN_SC01","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataMain.form.edtPN_SC03","value","dsList","CT_HOUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMain.form.edtPN_SC02","value","dsList","DS_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMain.form.edtPN_SC04","value","dsList","DS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataMain.form.edtPN_SC05","value","dsList","DS_JEOBUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataMain.form.edtPN_SC06","value","dsList","DS_DEAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.edtPN_SC07","value","dsList","DS_MEASURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.edtPN_SC08","value","dsList","DS_MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBB_CASEDETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.filepath = "/DB/SIZEINFO/";
        this.NO_HADOCONT = "";
        this.DS_HADOCONT = "";

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

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);

        	this.fnSelect();

        	//this.fnBtnSendSmsEnble();

        	//this.fnSetCombo();

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
        //  this.btnPic1 = this.gfnFormButtonAdd("btnPic1", "fnPic1");
        // 	this.btnPic2 = this.gfnFormButtonAdd("btnPic2", "fnPic2");
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
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SEQ", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("CT_HOUSE", "int");
        	this.dsUpdate.addColumn("DS_TYPE", "string");
        	this.dsUpdate.addColumn("DS_JEOBUS", "string");
        	this.dsUpdate.addColumn("DS_DEAL", "string");
        	this.dsUpdate.addColumn("DS_MEASURE", "string");
        	this.dsUpdate.addColumn("DS_MESSAGE", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        //	if (!this.fnSelectValidate()) return false;

        //	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
          *	조회 버튼
          */
        this.fnSelectAdd = function() {
        	//if (!this.fnSelectValidate()) return false;

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//if (!this.fnSaveValidate()) return false;

        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(0, "NO_SEQ"));
        	this.dsUpdate.setColumn(nrow, "CT_HOUSE", this.dsList.getColumn(0, "CT_HOUSE"));
        	this.dsUpdate.setColumn(nrow, "DS_TYPE", this.dsList.getColumn(0, "DS_TYPE"));
        	this.dsUpdate.setColumn(nrow, "DS_JEOBUS", this.dsList.getColumn(0, "DS_JEOBUS"));
        	this.dsUpdate.setColumn(nrow, "DS_DEAL", this.dsList.getColumn(0, "DS_DEAL"));
        	this.dsUpdate.setColumn(nrow, "DS_MEASURE", this.dsList.getColumn(0, "DS_MEASURE"));
        	this.dsUpdate.setColumn(nrow, "DS_MESSAGE", this.dsList.getColumn(0, "DS_MESSAGE"));
        	this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        this.fnSelectValidate = function(strType) {

        }
        /*
         *	저장 Validate
         */
         this.fnSaveValidate = function() {

        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {

        // 		this.gfnGridAfterSelect(this.dxGrid);

        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
         	}
        };

        this.fnPopupCallback = function(strId, val) {
        // 	if( val.bSave ){
        // 		this.FormBtns.Select.click();
        // 	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnPic1 = function(obj,e) //도면 팝업
        {
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.NO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBB_CASEBLUEPRINT", "fnPopCallBack", param);
        };

        this.fnPic2 = function(obj,e) { //추가사진 팝업
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.NO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBB_CASEIMAGE", "fnPopCallBack", param);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnPic1.addEventHandler("onclick",this.fnPic1,this);
            this.btnPic2.addEventHandler("onclick",this.fnPic2,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DBB_CASEDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
