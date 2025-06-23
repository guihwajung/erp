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
            this.set_titletext("부가세 마감");
            this.getSetter("maxwidth").set("480");
            this.getSetter("maxheight").set("240");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">magamCreate</Col><Col id=\"SP\">DHVPR_TOTALCALC_CREATE</Col></Row><Row><Col id=\"TARGET\">magamCancel</Col><Col id=\"SP\">DHVPR_TOTALCALC_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","42",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","10","32","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT","10","61","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","104","32",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","104","61",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","111","37","319","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT00","10","90","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","104","90",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYY_MAGAM","111","66","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("cedtDT_FROM","217","95","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staWAVE","307","95","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("cedtDT_TO","322","95","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","111","95","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_ccboNO_TAX_innerdataset = new nexacro.NormalDataset("divData_form_ccboNO_TAX_innerdataset", obj);
            divData_form_ccboNO_TAX_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_ccboNO_TAX_innerdataset);
            obj.set_text("1기예정");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","104","3",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT00","10","3","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","111","8","319","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","10","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("마감");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","148",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","227",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_SELFACNT.form.CDTextBox","value","dsMagam","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclYY_MAGAM.form.TextBox","value","dsMagam","YY_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccboNO_TAX","value","dsMagam","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cedtDT_TO","value","dsMagam","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cedtDT_FROM","value","dsMagam","DT_FROM");
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
        this.registerScript("DHV_VATCONTROLDLG.xfdl", function() {
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

        	this.P_PROC_TYPE = this.getOwnerFrame().P_PROC_TYPE;

        	if(this.P_PROC_TYPE == "CANCEL"){
        		this.staTitle.set_text("마감 취소");
        	}

        	if ( !this.gfnIsNull(this.getOwnerFrame().CD_CORP) ) {
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        	}

        	if ( !this.gfnIsNull(this.getOwnerFrame().CD_SELFACNT) ) {
        		this.ccfCD_SELFACNT.form.CDTextBox.set_value(this.getOwnerFrame().CD_SELFACNT);
        		this.ccfCD_SELFACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_SELFACNT);
        	}

        	this.ccboNO_TAX.set_index(0);
        	this.ctclYY_MAGAM.form.TextBox.set_value(this.gfnGetDate().substr(0, 4));

        	this.fnSetDate(this.gfnGetDate().substr(0, 4), "1");


        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	// 팝업사이즈 조정
         	var nWidth = "480px";
         	var nHeight = "290px";
         	this.getOwnerFrame().set_width(nWidth);
         	this.getOwnerFrame().set_height(nHeight);

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
        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_SELFACNT = this.divData.form.ccfCD_SELFACNT;
        	this.ctclYY_MAGAM   = this.divData.form.ctclYY_MAGAM;
        	this.ccboNO_TAX     = this.divData.form.ccboNO_TAX;
        	this.cedtDT_FROM    = this.divData.form.cedtDT_FROM;
        	this.cedtDT_TO      = this.divData.form.cedtDT_TO;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SELFACNT.CodeFindName = "DHX_CFSELFACNT_MULTI";
        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsMagamParam = new Dataset();
        	this.dsMagamParam.addColumn("CD_SELFACNT", "string");
        	this.dsMagamParam.addColumn("YM_MAGAM", "string");
        	this.dsMagamParam.addColumn("YM_MAGAM_FROM", "string");
        	this.dsMagamParam.addColumn("CD_CORP", "string");
        	this.dsMagamParam.addColumn("ID_INSERT", "string");
        }

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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "magamCreate"){
        		if (errorCode == 0) {
        			this.gfnAlert("마감 작업이 완료되었습니다.", "fnMsgCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if(svcID == "magamCancel"){
        		if (errorCode == 0) {
        			this.gfnAlert("마감취소 작업이 완료되었습니다.", "fnMsgCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnMsgCallback = function() {
        	this.getParentContext().close("SUSESS");
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {

        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        		case "ccfCD_SELFACNT":	//세무단위
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		break;
        	}

        	return true;
        };


         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_SELFACNT.form.fnCodeFindClear();
        		break;

        		case "ccfCD_SELFACNT":	//세무단위
        			if (arrData.length > 0) {
        				var strCdSelfAcnt = "";
        				var strDsSelfAcnt = "";
        				for(var r = 0; r < arrData.length; r++) {
        					strCdSelfAcnt += arrData[r]["CD_DEPT_SELFACNT"]+",";
        					strDsSelfAcnt += arrData[r]["DS_DEPT_SELFACNT"]+",";
        				}

        				strCdSelfAcnt = strCdSelfAcnt.substr(0,strCdSelfAcnt.length-1);
        				strDsSelfAcnt = strDsSelfAcnt.substr(0,strDsSelfAcnt.length-1);

        				this.ccfCD_SELFACNT.form.CDTextBox.set_value(strCdSelfAcnt);
        				this.ccfCD_SELFACNT.form.DSTextBox.set_value(strDsSelfAcnt);

        			}
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ccfCD_SELFACNT.form.CDTextBox.value)){
        		this.gfnAlert("세무단위는 필수입니다.");
        		this.ccfCD_SELFACNT.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYY_MAGAM.form.TextBox.value)){
        		this.gfnAlert("작성년도는 필수입니다.");
        		this.ctclYY_MAGAM.form.TextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ccboNO_TAX.value)){
        		this.gfnAlert("작성기수는 필수입니다.");
        		this.ccboNO_TAX.setFocus();
        		return;
        	}

        	var strMsg  = "마감작업을 하시겠습니까?";
        	if(this.P_PROC_TYPE == "CANCEL"){
        		strMsg  = "마감 취소 작업을 하시겠습니까?";
        	}

        	this.gfnConfirm(strMsg, "fnMagamCallBack");

        };

        this.fnMagamCallBack = function (strId, val)
        {
        	if(val == false) return;

        	this.dsMagamParam.clearData();
        	var nRow = this.dsMagamParam.addRow();

        	var YM_MAGAM = nexacro.replaceAll(this.cedtDT_TO.value,"-","");
        	var YM_MAGAM_FROM = nexacro.replaceAll(this.cedtDT_FROM.value,"-","");

        	//처리할 데이터 담기
        	this.dsMagamParam.setColumn(nRow, "CD_SELFACNT" , this.ccfCD_SELFACNT.form.CDTextBox.value);

        // 	this.dsMagamParam.setColumn(nRow, "YM_MAGAM"    , nexacro.replaceAll(this.cedtDT_TO.value,"-",""));
        // 	this.dsMagamParam.setColumn(nRow, "YM_MAGAM_FROM" , nexacro.replaceAll(this.cedtDT_FROM.value,"-",""));
        	this.dsMagamParam.setColumn(nRow, "YM_MAGAM"    , this.gfnGetLastDate(YM_MAGAM + "01"));
        	this.dsMagamParam.setColumn(nRow, "YM_MAGAM_FROM" , YM_MAGAM_FROM + "01");

        	this.dsMagamParam.setColumn(nRow, "CD_CORP" 	, this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsMagamParam.setColumn(nRow, "ID_INSERT"   , this.AuthClient.ID_USER);

        	var strSvcId  = "magamCreate";
        	if(this.P_PROC_TYPE == "CANCEL"){
        		strSvcId  = "magamCancel";
        	}

        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = strSvcId +"=dsMagamParam";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnSetDate = function(ymMagam, noTax) {

        	var dtFrom ;
        	var dtTo;

        	if(this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {

        		dtFrom = "";
        		dtTo = "";

        	} else {

        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01";
        				dtTo = ymMagam + "-03";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04";
        				dtTo = ymMagam + "-06";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07";
        				dtTo = ymMagam + "-09";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10";
        				dtTo = ymMagam + "-12";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}
        	this.cedtDT_FROM.set_value(dtFrom);
        	this.cedtDT_TO.set_value(dtTo);

        }

        this.dsMagam_onvaluechanged = function(obj,e)
        {
        	switch(e.columnid) {
        		case "YY_MAGAM" :
        			this.fnSetDate(e.newvalue, this.dsMagam.getColumn(e.row, "NO_TAX"));
        			break;
        		case "NO_TAX" :
        			this.fnSetDate(this.dsMagam.getColumn(e.row, "YY_MAGAM"), e.newvalue);
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_DEPT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.staCD_DEPT00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsMagam.addEventHandler("onvaluechanged",this.dsMagam_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_VATCONTROLDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
