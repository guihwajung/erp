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
            this.set_titletext("불명자료 반제처리");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("550");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DEPOSITFEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INTEREST_SUNAP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPRO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PAYBACK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRCPR_ADDUPBACK_HANDLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_INTEREST_SUNAP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">수납</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">수납안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("불명자료 반제처리");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("반제처리");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staSunapInfo:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staSunapInfo:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("수납일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("반제금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("보증수수료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("납입계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta09:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("대납이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","162","317","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","317","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_ACNTUNIT","sta00:5","87","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_DONG","sta02:5","sta01:4","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_maxlength("4");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FLOOR","txtNO_DONG:5","sta01:4","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_maxlength("2");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_HO","txtNO_FLOOR:5","sta01:4","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_maxlength("3");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnNO_DONGHO","txtNO_HO:5","sta01:4","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIVED","sta04:5","sta03:4","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIVED","sta06:5","sta05:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","txtAM_RECEIVED:5","sta05:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DEPOSITFEE","sta08:5","sta07:4","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","txtAM_DEPOSITFEE:5","sta07:4","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","sta10:5","sta09:4","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_INTEREST_SUNAP","sta12:5","sta11:4","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsYN_INTEREST_SUNAP");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","tclDT_RECEIVED:5","sta03:4","63","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("(반제일자)");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfCD_ACNTUNIT.form.CDTextBox","value","dsList","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_ACNTUNIT.form.DSTextBox","value","dsList","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tclDT_RECEIVED","value","dsList","DT_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_RECEIVED","value","dsList","AM_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtAM_DEPOSITFEE","value","dsList","AM_DEPOSITFEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfCD_GUJA.form.CDTextBox","value","dsList","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfCD_GUJA.form.DSTextBox","value","dsList","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.rdoYN_INTEREST_SUNAP","value","dsList","YN_INTEREST_SUNAP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_DLGADDUPBACK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();


        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_APPRO", this.getOwnerFrame().NO_APPRO);
        	this.dsList.setColumn(0, "NO_PAYBACK", this.getOwnerFrame().NO_PAYBACK);
        	this.dsList.setColumn(0, "DT_RECEIVED", this.getOwnerFrame().DT_RECEIVED);
        	this.dsList.setColumn(0, "AM_RECEIVED", this.getOwnerFrame().AM_RECEIVED);
        	this.dsList.setColumn(0, "AM_DEPOSITFEE", 0);

        	this.dsList.setColumn(0, "YN_INTEREST_SUNAP", "N");

        	this.txtAM_RECEIVED.set_readonly(true);

        	this.txtNO_DONG.setFocus();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfCD_ACNTUNIT = this.divData.form.cfCD_ACNTUNIT;
        	this.txtNO_DONG = this.divData.form.txtNO_DONG;
        	this.txtNO_FLOOR = this.divData.form.txtNO_FLOOR;
        	this.txtNO_HO = this.divData.form.txtNO_HO;
        	this.btnNO_DONGHO = this.divData.form.btnNO_DONGHO;
        	this.tclDT_RECEIVED = this.divData.form.tclDT_RECEIVED;
        	this.txtAM_RECEIVED = this.divData.form.txtAM_RECEIVED;
        	this.txtAM_DEPOSITFEE = this.divData.form.txtAM_DEPOSITFEE;
        	this.cfCD_GUJA = this.divData.form.cfCD_GUJA;
        	this.rdoYN_INTEREST_SUNAP = this.divData.form.rdoYN_INTEREST_SUNAP;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSave.addColumn("NO_APPRO", "string");
        	this.dsSave.addColumn("NO_PAYBACK", "string");
        	this.dsSave.addColumn("DT_RECEIVED", "string");
        	this.dsSave.addColumn("AM_RECEIVED", "bigdecimal");
        	this.dsSave.addColumn("AM_DEPOSITFEE", "bigdecimal");
        	this.dsSave.addColumn("CD_GUJA", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("YN_INTEREST_SUNAP", "string");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidation = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) {
        		this.gfnAlert("동을 입력하지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))) {
        		this.gfnAlert("층을 입력하지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("호를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RECEIVED"))) {
        		this.fnVaidateCallback = function() {
        			this.tclDT_RECEIVED.setFocus();
        		}
        		this.gfnAlert("수납일자(반제일자)가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}
        	if (nexacro.toNumber(this.dsList.getColumn(0, "AM_RECEIVED")) == 0) {
        		this.gfnAlert("반제금액이 입력되지 않았습니다.");
        		return false;
        	}
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_GUJA.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계좌정보가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	else if (id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "cfCD_ACNTUNIT" :
        			this.dsList.setColumn(0, "NO_DONG", "");
        			this.dsList.setColumn(0, "NO_FLOOR", "");
        			this.dsList.setColumn(0, "NO_HO", "");
        			this.dsList.setColumn(0, "CD_GUJA", "");
        			this.dsList.setColumn(0, "DS_GUJA", "");
        			break;
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "save"){
        		if (errorCode == 0) {
        			if (this.dsResult.rowcount == 0) {
        				this.gfnAlert("반제처리가 실패하였습니다.");
        			}
        			else {
        				this.fnSave_Callback = function() {
        					this.getParentContext().close(true);
        					 //this.FormBtns.Select.click();
        				}
        				this.gfnAlert(this.dsResult.getColumn(0, "MSG"), "fnSave_Callback");

        			}

        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
         	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSave = function() {
        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsSave.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsSave.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsSave.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSave.setColumn(0, "NO_APPRO", this.dsList.getColumn(0, "NO_APPRO"));
        	this.dsSave.setColumn(0, "NO_PAYBACK", this.dsList.getColumn(0, "NO_PAYBACK"));
        	this.dsSave.setColumn(0, "DT_RECEIVED", this.dsList.getColumn(0, "DT_RECEIVED"));
        	this.dsSave.setColumn(0, "AM_RECEIVED", this.dsList.getColumn(0, "AM_RECEIVED"));
        	this.dsSave.setColumn(0, "AM_DEPOSITFEE", this.dsList.getColumn(0, "AM_DEPOSITFEE"));
        	this.dsSave.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "YN_INTEREST_SUNAP", this.dsList.getColumn(0, "YN_INTEREST_SUNAP"));

        	var strSvcId    = "save";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsResult=save0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.divSearch_btnNO_DONGHO_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsList.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnDonghoPopupCallback", param);
        };

        this.fnDonghoPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsList.setColumn(0, "NO_DONG", json.DONG);
        		this.dsList.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsList.setColumn(0, "NO_HO", json.HO);
        		this.dsList.setColumn(0, "NO_UNIONMEMBER", json.UNION);
        	}
        	else {
        		this.dsList.setColumn(0, "NO_DONG", "");
        		this.dsList.setColumn(0, "NO_FLOOR", "");
        		this.dsList.setColumn(0, "NO_HO", "");
        		this.dsList.setColumn(0, "NO_UNIONMEMBER", "");
        	}
        }

        this.btnOK_onclick = function(obj,e) {
        	if(!this.fnSaveValidation()) return;

        	this.fnSave();




        };

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };


        this.divData_txtNO_DONG_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_DONG"))) {
        		this.dsList.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG").padLeft(4, "0"));
        	}
        };

        this.divData_txtNO_FLOOR_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_FLOOR"))) {
        		this.dsList.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        	}
        };

        this.divData_txtNO_HO_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_HO"))) {
        		this.dsList.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO").padLeft(3, "0"));
        	}
        };

        this.divData_txt_onkeyup = function(obj,e) {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "txtNO_DONG":
        				this.txtNO_FLOOR.setFocus();
        				break;
        			case "txtNO_FLOOR":
        				this.txtNO_HO.setFocus();
        				break;
        			case "txtNO_HO":
        				this.btnNO_DONGHO.setFocus();
        				break;
        		}
        	}
        };

        this.dsList_onvaluechanged = function(obj,e) {
        	this.gfnSetFormStatus(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.txtNO_DONG.addEventHandler("onkillfocus",this.divData_txtNO_DONG_onkillfocus,this);
            this.divData.form.txtNO_DONG.addEventHandler("onkeyup",this.divData_txt_onkeyup,this);
            this.divData.form.txtNO_FLOOR.addEventHandler("onkillfocus",this.divData_txtNO_FLOOR_onkillfocus,this);
            this.divData.form.txtNO_FLOOR.addEventHandler("onkeyup",this.divData_txt_onkeyup,this);
            this.divData.form.txtNO_HO.addEventHandler("onkillfocus",this.divData_txtNO_HO_onkillfocus,this);
            this.divData.form.txtNO_HO.addEventHandler("onkeyup",this.divData_txt_onkeyup,this);
            this.divData.form.btnNO_DONGHO.addEventHandler("onclick",this.divSearch_btnNO_DONGHO_onclick,this);
            this.divData.form.tclDT_RECEIVED.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_DLGADDUPBACK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
