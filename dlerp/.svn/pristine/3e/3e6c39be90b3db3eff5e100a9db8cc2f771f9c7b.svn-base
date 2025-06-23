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
            this.getSetter("maxwidth").set("430");
            this.getSetter("maxheight").set("440");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMAPR_PO_DETAIL_OK</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">NO_CONT</Col><Col id=\"DS_FIELD\">계약번호</Col></Row><Row><Col id=\"CD_FIELD\">DT_DELIVERY</Col><Col id=\"DS_FIELD\">납기일자</Col></Row><Row><Col id=\"CD_FIELD\">YN_E_CONT</Col><Col id=\"DS_FIELD\">계약유형</Col></Row><Row><Col id=\"CD_FIELD\">CD_INCREASE</Col><Col id=\"DS_FIELD\">재고관리구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_CONT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_DELIVERY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_INCREASE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","109","69","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","109","98","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","109","127","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","109","127","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","109","156","291","104",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","155","110","105",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","30.00%","293","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("구매승인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","293","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","0","98","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("계약유형");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","375","287","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("인도조건");
            obj.set_textAlign("right");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta45","0","127","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("재고관리구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","109","40","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","40","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("계약번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","69","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("납기일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave00","67.80%","132","109","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("현장요청구분변경");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DELIVERY","115","75","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT","115","104","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCD_DELIVERY","490","293","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCD_DELIVERY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCD_INCREASE","115","133","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("true");
            obj.set_innerdataset("dsCD_INCREASE");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","115","164","275","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONT","115","45","148","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","7","8","165","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("발주서승인");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","tclDT_DELIVERY","value","dsDetail","DT_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboYN_E_CONT","value","dsDetail","YN_E_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboCD_DELIVERY","value","dsDetail","CD_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboCD_INCREASE","value","dsDetail","CD_INCREASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txtRM_BIGO","value","dsDetail","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","txtNO_CONT","value","dsDetail","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DMA_PO_DETAIL_OK.xfdl", function() {
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

        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_CONT)) {

        		this.dsDetail.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsDetail.setColumn(0, "DT_DELIVERY", this.getOwnerFrame().DT_DELIVERY);
        		this.dsDetail.setColumn(0, "YN_E_CONT", this.getOwnerFrame().YN_E_CONT);
        		this.dsDetail.setColumn(0, "CD_DELIVERY", this.getOwnerFrame().CD_DELIVERY);
        		this.dsDetail.setColumn(0, "CD_INCREASE", this.getOwnerFrame().CD_INCREASE);
        		this.dsDetail.setColumn(0, "RM_BIGO", this.getOwnerFrame().RM_BIGO);
        	}


        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "13");


        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(1, "CD_TYPE", "AG");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(2, "CD_TYPE", "H11");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_E_CONT=combo0 dsCD_DELIVERY=combo1 dsCD_INCREASE=combo2";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
         		//this.divData.form.divData01.form.cboTY_HAJA.set_index(0);
        	}
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_VENDOR = this.divData.form.ccfCD_VENDOR;
        	//this.ccfCD_SITE = this.divData.form.ccfCD_SITE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("DT_DELIVERY", "string");
        	this.dsUpdate.addColumn("YN_E_CONT", "string");
        	this.dsUpdate.addColumn("CD_DELIVERY", "string");
        	this.dsUpdate.addColumn("CD_INCREASE", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.gfnDataValidate(this.dsDetail, this.dsRequired))return;
        	this.gfnConfirm("구매승인을 진행하시겠습니까?", "fnSaveDsDetail");
        };

        this.fnSaveDsDetail = function(svcId, val){
        	if(val){
        		this.dsUpdate.clearData();
        		var nrow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsDetail.getColumn(0, "NO_CONT"));
        		this.dsUpdate.setColumn(nrow, "DT_DELIVERY", this.dsDetail.getColumn(0, "DT_DELIVERY"));
        		this.dsUpdate.setColumn(nrow, "YN_E_CONT", this.dsDetail.getColumn(0, "YN_E_CONT"));
        		this.dsUpdate.setColumn(nrow, "CD_DELIVERY", this.dsDetail.getColumn(0, "CD_DELIVERY"));
        		this.dsUpdate.setColumn(nrow, "CD_INCREASE", this.dsDetail.getColumn(0, "CD_INCREASE"));
        		this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsDetail.getColumn(0, "RM_BIGO"));
        		this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsUpdate.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsUpdate";
        		var outData     = "";
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
        }


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };
         /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {
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
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/



        this.divData_btnSave00_onclick = function(obj,e)
        {
        	if (this.dsDetail.getColumn(0, "CD_INCREASE") == "01")
        	{
        		this.dsDetail.setColumn(0, "CD_INCREASE", "02");
        	} else
        	{
        		this.dsDetail.setColumn(0, "CD_INCREASE", "01");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staBg2.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.staBg3.addEventHandler("onclick",this.divData_staBg3_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.sta31.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.btnSave00.addEventHandler("onclick",this.divData_btnSave00_onclick,this);
            this.dsDetail.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_DETAIL_OK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
