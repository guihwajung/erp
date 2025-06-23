(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_GANTAXSINGODISKDLGMM");
            this.set_titletext("전산매체생성");
            this.getSetter("maxwidth").set("390");
            this.getSetter("maxheight").set("410");
            if (Form == this.constructor)
            {
                this._setFormPosition(359,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_GANTAXDISKMM_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","2","0","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("간이지급명세서(근로소득) 전산매체생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","72","310","200","40",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN","0","35","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","99","35","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","93","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","99","93","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","98","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0","64","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("정산년도");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","99","64","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staID_HOMETAX","0","151","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("홈텍스ID");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","0","180","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("담당부서명");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","99","151","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","99","180","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CFSELFACNT","0","122","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("세무단위");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","99","122","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CFSELFACNT","105","127","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","0","209","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("담당자명");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","99","209","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_TELNO","0","238","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("담당자전화번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","99","238","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","0","267","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("제출일");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","99","267","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoYN_GUBUN","106","40","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoYN_GUBUN_innerdataset = new nexacro.NormalDataset("rdoYN_GUBUN_innerdataset", obj);
            rdoYN_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">상반기</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">하반기</Col></Row></Rows>");
            obj.set_innerdataset(rdoYN_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ctcYY_BASE","105","69","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_HOMETAX","105","156","248","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT","105","185","248","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","105","214","248","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDS_TELNO","105","243","248","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_displaynulltext("- 없이 번호만 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","105","272","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtCont","363","-1","102","60",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_GANTAXSINGODISKDLGMM.xfdl", function() {
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
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.YY_BASE) && !this.gfnIsNull(frame.CD_CORP)){
        		this.rdoYN_GUBUN.set_value(frame.YN_GUBUN); // 작업구분
        		this.ctcYY_BASE.form.TextBox.set_value(frame.YY_BASE); // 정산년도
        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP); // 법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        	} else {
        		this.ctcYY_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));//정산년도
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);// 법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}
        	this.ctclDT_PRINT.set_value(this.gfnGetDate()); //제출일


        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
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

        	// 자료생성
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_PRINT", "string");
        	this.dsSelect.addColumn("ID_HOMETAX", "string");
        	this.dsSelect.addColumn("DS_DEPT", "string");
        	this.dsSelect.addColumn("DS_HNAME", "string");
        	this.dsSelect.addColumn("DS_TELNO", "string");
        	this.dsSelect.addColumn("YN_GUBUN", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YY_BASE", 	this.ctcYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", 	this.ccfCD_CFSELFACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_PRINT", 	this.ctclDT_PRINT.value);
        	this.dsSelect.setColumn(0, "ID_HOMETAX", this.edtID_HOMETAX.value);
        	this.dsSelect.setColumn(0, "DS_DEPT", 	this.edtDS_DEPT.value);
        	this.dsSelect.setColumn(0, "DS_HNAME", 	this.edtDS_HNAME.value);
        	this.dsSelect.setColumn(0, "DS_TELNO", 	this.edtDS_TELNO.value);
        	this.dsSelect.setColumn(0, "YN_GUBUN",	this.rdoYN_GUBUN.value);
        	//this.dsSelect.setColumn(0, "CD_CFSELFACNT", this.ccfCD_CFSELFACNT.form.CDTextBox.value);
        	//this.dsSelect.setColumn(0, "NO_APPLY", 	'1');

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//정산년도
        	if (this.gfnIsNull(this.ctcYY_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctcYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("정산년도를 입력하세요.");
        		return validate;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	//세무단위
        	if (this.gfnIsNull(this.ccfCD_CFSELFACNT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CFSELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}
        	//담당부서명
        	if (this.gfnIsNull(this.edtDS_DEPT.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.edtDS_DEPT.setFocus();
        		}
        		this.gfnAlert("담당부서명을 입력하세요.");
        		return false;
        	}
        	//담당자명
        	if (this.gfnIsNull(this.edtDS_HNAME.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.edtDS_HNAME.setFocus();
        		}
        		this.gfnAlert("담당자명을 입력하세요.");
        		return false;
        	}
        	//담당자전화번호
        		if (this.gfnIsNull(this.edtDS_TELNO.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.edtDS_TELNO.setFocus();
        		}
        		this.gfnAlert("담당자전화번호를 입력하세요.");
        		return false;
        	}

        	//제출일
        	if (this.gfnIsNull(this.ctclDT_PRINT.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_PRINT.setFocus();
        		}
        		this.gfnAlert("제출일을 입력하세요.");
        		return false;
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
        		if(this.dsList.getRowCount() == 0){
        			this.gfnAlert("신고자료가 존재하지 않습니다.간이지급명세서(근로소득) 신고자료 미존재.");
        		}else{
        			//내용 txt 생성
        			this.fnSetTextFileCont();
        			//파일 다운
        			this.fnFileDown();
        			//닫기
        			this.getParentContext().close(true);
        		}
        	}
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
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
        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSelect();
        };
        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        this.fnSetTextFileCont = function() {

        	var strCont="";

        	for(var row = 0; row < this.dsList.rowcount; row++) {
        		strCont = strCont + this.dsList.getColumn(row, "COL")+"\n";
        	}
        	this.txtCont.set_value(strCont.replace(/■/g,''));
        };

        this.fnFileDown = function() {
        	var sFilename = this.dsListSub.getColumn(0,"COL")+".txt"; // 파일명

        	var sFilecont = this.txtCont.value;
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR"); //UTF-8, EUC-KR;
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}

        	this.FileDownTransfer00.download();


        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.ctclDT_PRINT.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAU_GANTAXSINGODISKDLGMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
