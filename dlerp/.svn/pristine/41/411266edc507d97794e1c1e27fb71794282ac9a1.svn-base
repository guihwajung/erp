(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCA_REGISTLIST_APROVE");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_REGISTLIST_APROVE_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCZPR_IDMANAGEAPPROVAL_PW_INIT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">print</Col><Col id=\"SP\">DCAPR_REGIST_HISTORY_PRINT</Col></Row><Row><Col id=\"TARGET\">appr</Col><Col id=\"SP\">DCAPR_REGISTLIST_APROVE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_GUBUN\"/><Col id=\"CD_COSTCLASS\"/><Col id=\"CD_LICCOST\"/><Col id=\"CD_LICENSE\"/><Col id=\"CD_VENDOR\"/><Col id=\"CD_MODULE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_GUBUN","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("등록구분");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccbo_Gubun","staCD_GUBUN:0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsGubun");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccbo_TyGubun","ccbo_Gubun:0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccbo_TyGubun_innerdataset = new nexacro.NormalDataset("divSearch_form_ccbo_TyGubun_innerdataset", obj);
            divSearch_form_ccbo_TyGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ALL</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">DC</Col><Col id=\"datacolumn\">외주</Col></Row><Row><Col id=\"codecolumn\">DM</Col><Col id=\"datacolumn\">자재</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccbo_TyGubun_innerdataset);
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccbo_TyGubun:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta01:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DC");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GUBUN00","ccfCD_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("업체구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
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
            obj = new BindItem("item0","divSearch.form.ccbo_Gubun","value","dsSearch","CD_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccbo_TyGubun","value","dsSearch","CD_MODULE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_REGISTLIST_APROVE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DCA_REGISTLIST_onload = function(obj,e)
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print.
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRegAprove = this.gfnFormButtonAdd("RegAprove", "fnRegAprove");
        	//this.btnRegPrint = this.gfnFormButtonAdd("btnRegPrint", "fnRegPrint");	// 협력업체대장출력
        	//this.btnCredit = this.gfnFormButtonAdd("Credit", "fnCredit");	// PW재생성&메일
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.divSearch.form.ccbo_TyGubun.set_value(this.FormInfo.DS_PARAM);
        	this.ccbo_Gubun = this.divSearch.form.ccbo_Gubun;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_VENDOR.CodeFindName = "DCX_CFVendor_06";
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_REGISTLIST_APROVE");

        	// 그리드 더블 클릭 이벤트
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("CD_GUBUN", "string");
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("CD_LICENSE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_MODULE", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_VENDOR", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_VENDOR", "string");
        	this.dsReport.addColumn("DT_INPUT", "string");
        	this.dsReport.addColumn("CD_MODULE", "string");
        	this.dsReport.addColumn("ID_USER", "string");
        };

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

        	this.dsSelect.setColumn(0, "CD_GUBUN", this.dsSearch.getColumn(0, "CD_GUBUN"));
        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
            this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
            this.dsSelect.setColumn(0, "CD_LICENSE", this.dsSearch.getColumn(0, "CD_LICENSE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_MODULE", this.dsSearch.getColumn(0, "CD_MODULE"));

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
         *	PW재생성 및 메일전송
         */
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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
        this.fnSelectValidate = function() {
           var validate = true;

           return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
         /
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.dsGubun.insertRow(0);
        			this.dsGubun.setColumn(0, "CD_CODE", "");
        			this.dsGubun.setColumn(0, "DS_CODE", "전체");
        			this.divSearch.form.ccbo_Gubun.set_index(0);
        			//this.divSearch.form.ccbo_Gubun.set_index(1);
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appr"){
        		if (errorCode == 0) {
        			this.gfnAlert("승인되었습니다.");
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
         // 그리드 더블 클릭 이벤트
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDetail();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj, e) {
        	if(e.pretext != e.posttext) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(this.dsList.rowcount != 0){
        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };


        // 업체상세정보 버튼 클릭시 팝업화면 호출
        this.fnDetail = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.DT_INPUT = this.dsList.getColumn(this.dsList.rowposition, "DT_INPUT");
        	param.SDS_PARAM = this.FormInfo.DS_PARAM;
        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DCA", "DCA_REGISTDETAIL", "", param);
        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "17");

        // 	// 같은 SP 다중건 조회는 row 추가해서
        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        // 	this.dsCombo.setColumn(1, "CD_TYPE", "50");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsGubun=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnRegAprove = function(){
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("승인 하시겠습니까?", "fnRegAprove_CallBack");
        }

        this.fnRegAprove_CallBack = function(strId, val){

        	if(val == true){

        		var today = new Date();
        		var todate = ""; //현재날짜
        		todate = today.getFullYear().toString();
        		todate += this.inZero(today.getMonth()+1, 2);
        		todate += this.inZero(today.getDate(), 2);

        		this.dsApprove = new Dataset();
        		this.dsApprove.addColumn("ID_USER", "string");
        		this.dsApprove.addColumn("CD_VENDOR", "string");
        		this.dsApprove.addColumn("DT_CHANGE", "string");

        		this.dsApprove.clearData();
        		this.dsApprove.addRow();

        		this.dsApprove.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsApprove.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        		this.dsApprove.setColumn(0, "DT_CHANGE", todate);

        		if (this.dsList.rowcount == 0) return;

        		var strSvcId    = "appr";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appr=dsApprove";
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
        }

        this.inZero = function(p1,p2){
        	var zero ="";
        	for(var i=0; i<p2;i++) zero +="0";
        	return zero.toString().concat(p1).match(new RegExp("\\d{"+p2+"}$"));
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCA_REGISTLIST_onload,this);
            this.divSearch.form.ccbo_Gubun.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccbo_TyGubun.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccfCD_VENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_REGISTLIST_APROVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
