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
            this.set_titletext("일용근로소득 전산매체");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("470");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RECORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"FILEMANE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_ILYONGDISK_SELECT_DB</Col></Row><Row><Col id=\"TARGET\">selectUserInfo</Col><Col id=\"SP\">DSZPR_USER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_QUARTER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1/4분기</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2/4분기</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3/4분기</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4/4분기</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">수시제출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_QUARTER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_HOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","20","263","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("제출일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","120","259","115","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","20","233","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","120","230","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_TELNO","20","203","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("담당자전화번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_TELNO","120","200","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","20","173","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","20","143","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("담당부서명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","120","170","70","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_HOMETAX","20","113","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("홈텍스ID");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","120","140","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_HOMETAX","120","110","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_CORP","260","110","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SELFACNT","20","83","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","120","80","253","25",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","120","51","80","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","20","53","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("귀속년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_QUARTER","220","53","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("귀속분기");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccfCD_QUARTER","280","51","80","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCD_QUARTER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("국세청 신고자료 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_HNAME","200","170","200","25",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSERBYCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","110","325","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","20","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new TextArea("txtCont","363","-1","102","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctclYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_QUARTER","value","dsSearch","CD_QUARTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_SELFACNT.form.CDTextBox","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtID_HOMETAX","value","dsSearch","ID_HOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtCD_CORP","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtDS_DEPT","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfDS_HNAME.form.CDTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_HNAME","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_TELNO","value","dsSearch","DS_TELNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_EMAIL","value","dsSearch","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctclDT_PRINT","value","dsSearch","DT_PRINT");
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
        this.registerScript("DSB_SHINGODISK_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.fileConfig = {
        			host : this.gfnGetServerUrl(),
        			downloadUrl : this.gfnGetServerUrl() + "/file/downloadTxtFile.do",
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

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "YY_BASE", this.getOwnerFrame().YY_BASE);
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	//this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	//this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "CD_QUARTER", this.getOwnerFrame().CD_QUARTER);
        	this.dsSearch.setColumn(0, "DT_PRINT", this.getOwnerFrame().txtDT_PRINT);
        	this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.ID_USER);

        	this.ccfCD_SELFACNT.form.fnCodeFindLoad();

        	this.fnSelectUserInfo(this.dsSearch.getColumn(0, "DS_HNAME"));
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ccfCD_SELFACNT = this.divData.form.ccfCD_SELFACNT;
        	this.ccfDS_HNAME = this.divData.form.ccfDS_HNAME;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("CD_QUARTER", "string");
        	this.dsSelect.addColumn("CD_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_PRINT", "string");
        	this.dsSelect.addColumn("ID_HOMETAX", "string");
        	this.dsSelect.addColumn("DS_DEPT", "string");
        	this.dsSelect.addColumn("DS_HNAME", "string");
        	this.dsSelect.addColumn("DS_TELNO", "string");
        	this.dsSelect.addColumn("DS_EMAIL", "string");

        	this.dsSelectUserInfo = new Dataset();
        	this.dsSelectUserInfo.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnDataValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsSelect.setColumn(0, "CD_QUARTER", this.dsSearch.getColumn(0, "CD_QUARTER"));
        	this.dsSelect.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_PRINT", this.dsSearch.getColumn(0, "DT_PRINT"));
        	this.dsSelect.setColumn(0, "ID_HOMETAX", this.dsSearch.getColumn(0, "ID_HOMETAX"));
        	this.dsSelect.setColumn(0, "DS_DEPT", this.dsSearch.getColumn(0, "DS_DEPT"));
        	this.dsSelect.setColumn(0, "DS_HNAME", this.dsSearch.getColumn(0, "DS_HNAME"));
        	this.dsSelect.setColumn(0, "DS_TELNO", this.dsSearch.getColumn(0, "DS_TELNO"));
        	this.dsSelect.setColumn(0, "DS_EMAIL", this.dsSearch.getColumn(0, "DS_EMAIL"));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
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
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {
         	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
         	this.ccfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_SELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", "1");
        	}
        // 	else if (id == "ccfCD_SITE"){
        // 		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        // 			this.gfnAlert("법인을 먼저 입력하세요.");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        //  		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        // 	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SELFACNT") {
        	}
        	else if(id == "ccfCD_CORP") {

        	}

        }

        this.fnDataValidate = function(){

        	if(this.gfnIsNull(this.divData.form.ctclYY_BASE.form.TextBox.value)) {
        		this.divData.form.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("귀속년도가 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfCD_SELFACNT.form.CDTextBox.value)) {
        		this.ccfCD_SELFACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("세무단위가 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.divData.form.txtID_HOMETAX.value)) {
        		this.divData.form.txtID_HOMETAX.setFocus();
        		this.gfnAlert("홈텍스ID가 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.divData.form.txtDS_DEPT.value)) {
        		this.divData.form.txtDS_DEPT.setFocus();
        		this.gfnAlert("담당부서명이 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.divData.form.txtDS_HNAME.value)) {
        		this.divData.form.txtDS_HNAME.setFocus();
        		this.gfnAlert("담당자명이 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.divData.form.txtDS_TELNO.value)) {
        		this.divData.form.txtDS_TELNO.setFocus();
        		this.gfnAlert("담당자전화번호가 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.divData.form.txtDS_EMAIL.value)) {
        		this.divData.form.txtDS_EMAIL.setFocus();
        		this.gfnAlert("E-MAIL이 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.divData.form.ctclDT_PRINT.value)) {
        		this.divData.form.ctclDT_PRINT.setFocus();
        		this.gfnAlert("제출일이 입력되지 않았습니다.");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(this.dsList.getRowCount() == 0){
        			this.gfnAlert("신고자료가 존재하지 않습니다. 일용근로소득 신고자료 미존재.");
        		}else{
        			//내용 txt 생성
        			this.fnSetTextFileCont();
        			//파일 다운
        			this.fnFileDown();
        			//닫기
        			this.getParentContext().close(true);
        		}
        	} else if ( svcID == "selectUserInfo") {
        		if(this.dsUserInfo.getRowCount() == 0){
        			this.gfnAlert("고객정보가 없습니다.");
        		}else{
        			this.divData.form.txtDS_DEPT.set_value(this.dsUserInfo.getColumn(0, "DS_DEPT"));
        			this.divData.form.txtDS_TELNO.set_value(this.dsUserInfo.getColumn(0, "MOBILE"));
        			this.divData.form.txtDS_EMAIL.set_value(this.dsUserInfo.getColumn(0, "ID_EMAIL"));
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSelect();
        };
        // 취소
        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };


        this.fnSetTextFileCont = function() {
        	var strCont="";

        	for(var row = 0; row < this.dsList.rowcount; row++) {
        		strCont = strCont + this.dsList.getColumn(row, "RECORD")+"\n";
        	}
        	this.txtCont.set_value(strCont.replace(/■/g,''));
        };

        this.fnFileDown = function() {
        	var sFilename = this.dsListSub.getColumn(0,"FILEMANE")+".txt"; // 파일명
        	//var sFilename = "testfile01.txt"; // 파일명
        	var sFilecont = this.txtCont.value;
        	var encodeFileName = encodeURIComponent(sFilename);

        	//this.fnFileDownload(sFilename, sFilecont);

         	var surl = this.fileConfig.downloadUrl; // + encodeFileName;
         	this.FileDownTransfer00.set_url(surl);
         	//this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR"); //UTF-8, EUC-KR;
         	this.FileDownTransfer00.setPostData("content", sFilecont);
         	this.FileDownTransfer00.setPostData("filename", encodeFileName);
         	if( system.navigatorname =="nexacro"){
         		this.FileDownTransfer00.set_downloadfilename(sFilename);
         	}
         	this.FileDownTransfer00.download();
        };

        this.fnSelectUserInfo = function(ID_USER){

        	this.dsSelectUserInfo.clearData();
        	this.dsSelectUserInfo.addRow();

        	this.dsSelectUserInfo.setColumn(0, "ID_USER", ID_USER);

        	var strSvcId    = "selectUserInfo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectUserInfo=dsSelectUserInfo";
        	var outData     = "dsUserInfo=selectUserInfo0";
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


        this.fnFileDownload = function(filename, text) {
            var pom = document.createElement('a');
            pom.setAttribute('href', 'data:text/plain;charset=EUC-KR,' + text);
            pom.setAttribute('download', filename);

            if (document.createEvent) {
                var event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                pom.dispatchEvent(event);
            }
            else {
                pom.click();
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DSB_SHINGODISK_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
