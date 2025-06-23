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
            this.set_titletext("집행일자 수정");
            this.getSetter("maxwidth").set("315");
            this.getSetter("maxheight").set("220");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_EXECDTL_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EXEC_KRW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","2","0",null,null,"-12","-2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","40","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("집행요청일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","129","40","131","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","86","184","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","142","184","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQ","135","45","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10","220","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("집행일자 수정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","69","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("집행통화");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00","129","69","131","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CURR","135","74","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_CURR");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","98","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("집행금액(집행화)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00","129","98","131","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","20","127","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("집행금액(원화)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00","129","127","131","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EXEC_KRW","135","132","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EXEC","135","103","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_format("#,###,###,###,###,###,##0.00");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_REQ","value","dsList","DT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccboCD_CURR","value","dsList","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.mskAM_EXEC_KRW","value","dsList","AM_EXEC_KRW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.mskAM_EXEC","value","dsList","AM_EXEC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFB_MODIFY_REQUEST_CURR_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.gubun = "";
        this.cdCurr = "";
        this.amAmt = 0;
        this.amAmtKrw = 0;

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

        	//this.getOwnerFrame().set_width(300);
        	//this.getOwnerFrame().set_height(160);

        	// 1.집행수정일자 버튼 클릭하여 수정시 (undefined)
        	// 2.일괄배정시 집행일자 일괄처리시 (DFBPR_EXECDTL_INSERT)
        	// 청구 data 저장 처리
        	this.gubun = this.getOwnerFrame().GUBUN;
        	this.cdCurr = this.getOwnerFrame().CD_CURR;
        	this.amAmt = this.getOwnerFrame().AM_AMT;
        	this.amAmtKrw = this.getOwnerFrame().AM_ACCOUNT;
        	//trace("this.gubun :: " + this.gubun);


        	// 이전 화면에서 데이터 받기.
         	this.dsList.setColumn(0, "SEQ_EXEC", this.getOwnerFrame().SEQ_EXEC);


        	if (!this.gfnIsNull(this.getOwnerFrame().DT_REQ)) {
        		this.dsList.setColumn(0, "DT_REQ", this.getOwnerFrame().DT_REQ);
        	}
        	if (!this.gfnIsNull(this.getOwnerFrame().CD_CURR)) {
        		this.dsList.setColumn(0, "CD_CURR", this.getOwnerFrame().CD_CURR);
        	}
        	if (!this.gfnIsNull(this.getOwnerFrame().AM_AMT)) {
        		this.dsList.setColumn(0, "AM_EXEC", this.getOwnerFrame().AM_AMT);
        	}
        	if (!this.gfnIsNull(this.getOwnerFrame().AM_ACCOUNT)) {
        		this.dsList.setColumn(0, "AM_EXEC_KRW", this.getOwnerFrame().AM_ACCOUNT);
        	}

        	this.divData.form.mskAM_EXEC.set_enableevent(false);
        	this.divData.form.mskAM_EXEC_KRW.set_enableevent(false);
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
         this.ccboCD_CURR = this.divData.form.ccboCD_CURR;
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
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsInsert.addColumn("DT_REQ", "string");
        	this.dsInsert.addColumn("CD_CURR", "string");
        	this.dsInsert.addColumn("AM_EXEC", "bigdecimal");
        	this.dsInsert.addColumn("AM_EXEC_KRW", "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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
        	}else if(svcID == "combo") {
        		this.ccboYT_TRAN.set_index(0);

        	}else
        	{
        		this.gfnAlert(errorMsg);
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

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var json = {};

        	json.DT_REQ = this.dsList.getColumn(0, "DT_REQ");	// 집행요청일자
        	json.CD_CURR = this.dsList.getColumn(0, "CD_CURR");	// 집행통화
        	json.AM_EXEC = this.dsList.getColumn(0, "AM_EXEC");	// 집행금액(집행화)
        	json.AM_EXEC_KRW = this.dsList.getColumn(0, "AM_EXEC_KRW");	// 집행금액(원화)

        	this.getParentContext().close(JSON.stringify(json));
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";


        	trace("집행요청일자는->" + this.dsList.getColumn(0, "DT_REQ"));

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_REQ"))) {
        		strMsg += "집행요청일자는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }


         this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "40");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_CURR=combo0";
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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.ccboCD_CURR.addEventHandler("canitemchange",this.divData_ccboCD_CURR_canitemchange,this);
        };
        this.loadIncludeScript("DFB_MODIFY_REQUEST_CURR_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
