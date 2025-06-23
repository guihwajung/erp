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
            this.set_titletext("원천세전자신고");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YR_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YR_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INCOME_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT_SELFACNT\"/><Col id=\"YR_TAX\"/><Col id=\"YR_PAY\"/><Col id=\"DT_ACCOUNT\"/><Col id=\"TY_INCOME_TYPE\"/><Col id=\"YN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_GANTAXSINGO_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INCOME_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">사업소득</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsText", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("원천세 전자신고 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staTITLE:10","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staTITLE:10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("귀속년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta15:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta15:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("지급년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta18:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("제출일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","sta00:5","staTITLE:15",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYR_TAX","sta15:5","sta01:4","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYR_PAY","sta02:5","sta18:4","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ACCOUNT","sta06:5","sta03:4","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_INCOME_TYPE","105","sta07:4","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_INCOME_TYPE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","36.00%",null,"50","20",null,"40",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.00%",null,"50","20",null,"40",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_GUBUN","186","113","164","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoYN_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_GUBUN_innerdataset", obj);
            divData_form_rdoYN_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">상반기</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">하반기</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsList","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclYR_TAX.form.TextBox","value","dsList","YR_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclYR_PAY.form.TextBox","value","dsList","YR_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboTY_INCOME_TYPE","value","dsList","TY_INCOME_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.rdoYN_GUBUN","value","dsList","YN_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_GANTAX_SINGO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

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
        	this.ccfCD_DEPT_SELFACNT = this.divData.form.ccfCD_DEPT_SELFACNT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsList.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	this.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();
        	//this.ccfCD_DEPT_SELFACNT.form.DSTextBox.set_value(this.dsUserInfo.getColumn(0, "DS_DEPT_SELFACNT"));

         	this.dsList.setColumn(0, "YR_TAX", this.gfnGetDate().substr(0,4));
        	this.dsList.setColumn(0, "YR_PAY", this.gfnGetDate().substr(0,4));
        	this.dsList.setColumn(0, "DT_ACCOUNT", this.gfnGetDate());
         	this.dsList.setColumn(0, "TY_INCOME_TYPE", "30");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YR_TAX", "string");
        	this.dsSelect.addColumn("DT_ACCOUNT", "string");
        	this.dsSelect.addColumn("TY_INCOME_TYPE", "string");
        	this.dsSelect.addColumn("YR_PAY", "string");
        	this.dsSelect.addColumn("YN_GUBUN", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "select") {
        		//trace(this.dsText.saveXML());
        		if (this.dsText.rowcount <= 2) {
        			this.gfnAlert("생성할 자료가 존재하지 않습니다.");
        			return;
        		}
        		else {
        			this.fnFileDownload();
        		}
        	}

        	else if (svcID == "nocorp") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT_SELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_DEPT_SELFACNT") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			//this.strSaupNo = arr[0]["NO_CORP"];
        			this.strSaupNo = arr[0]["NO_SJC"];	// 사업자번호
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsList_oncolumnchanged = function(obj,e)
        {
        };

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsList.getColumn(0, "CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "YR_TAX", this.dsList.getColumn(0, "YR_TAX"));
        	this.dsSelect.setColumn(0, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsSelect.setColumn(0, "TY_INCOME_TYPE", this.dsList.getColumn(0, "TY_INCOME_TYPE"));
        	this.dsSelect.setColumn(0, "YR_PAY", this.dsList.getColumn(0, "YR_PAY"));
        	this.dsSelect.setColumn(0, "YN_GUBUN", this.dsList.getColumn(0, "YN_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsText=select0";
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


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_DEPT_SELFACNT"))){
        		strMsg += "세무단위는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YR_TAX"))) {
        		strMsg += "귀속년도는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YR_PAY"))) {
        		strMsg += "지급년도는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_ACCOUNT"))) {
        		strMsg += "제출일자는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_INCOME_TYPE"))) {
        		strMsg += "구분은 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }


        this.fnFileDownload = function () {
        	if (this.dsText.rowcount <= 0) {
        		return false;
        	}

        	var data="";
        	for(var i=0;i<this.dsText.rowcount;i++){
        		data = data + this.dsText.getColumn(i,"LIST");
        		if(i == this.dsText.rowcount -1){
        			;
        		}else{
        			data = data + "\n";
        		}
        	}
        	//trace("data==>", data);

        	var GUBUN = "";
        	switch(this.dsList.getColumn(0, "TY_INCOME_TYPE")) {
        		case "30":
        			GUBUN = "SF";
        			break;
        		case "40":
        			GUBUN = "SF";
        			break;
        		case "50":
        			GUBUN = "SF";
        			break;
        		default:
        	}

        	var sFilename = GUBUN + this.strSaupNo.substr(0, this.strSaupNo.length-3) + "." + this.strSaupNo.substr(this.strSaupNo.length-3, 3);
        	var sFilecont = data;
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();

        	this.gfnAlert("파일 생성이 완료되었습니다.");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHV_GANTAX_SINGO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
