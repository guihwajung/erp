(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAM_EMPLOYEECARD_DLG");
            this.set_titletext("출입카드(사원증)관리");
            this.getSetter("maxwidth").set("750");
            this.getSetter("maxheight").set("410");
            if (Form == this.constructor)
            {
                this._setFormPosition(730,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENAME_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENAME_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAMPR_EMPLOYEECARD_SAVE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAMPR_EMPLOYEECARD_SELECT_DTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","52",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("both");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L","9","139","70","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_T","9","9","90","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("임직원정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TEMP","50.00%","34","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_BG_00","staCD_TEMP:-1","34",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","34","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BG","staID_SABUN:-1","34",null,"30","staCD_TEMP:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","39",null,"20","staCD_TEMP:95",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","50.00%","63","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_BG","staCD_POSITION:-1","63",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","63","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BG","staCD_DEPT:-1","63",null,"30","staCD_POSITION:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","68",null,"20","staCD_POSITION:20",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_OLD","50.00%","92","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("영문성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_OLD_BG","staDS_ENAME_OLD:-1","92",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_OLD","0","92","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("한글성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_OLD_BG","staDS_HNAME_OLD:-1","92",null,"30","staDS_ENAME_OLD:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:5","68",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME_OLD","staDS_HNAME_OLD:5","97",null,"20","staDS_ENAME_OLD:20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_imemode("hangul,full");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ENAME_OLD","staDS_ENAME_OLD:5","97",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_imemode("alpha,full");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_NEW","50.00%","172","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("영문성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ENAME_NEW_BG","staDS_ENAME_NEW:-1","172",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ENAME_NEW","staDS_ENAME_NEW:5","177",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_imemode("alpha,full");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_NEW","0","172","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("한글성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_NEW_BG","staDS_HNAME_NEW:-1","172",null,"30","staDS_ENAME_NEW:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME_NEW","staDS_HNAME_NEW:5","177",null,"20","staDS_ENAME_NEW:20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_imemode("hangul,full");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","0","201","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON_BG","staDS_REASON:-1","201",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_REASON","staDS_REASON:5","206",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txt00","17","241","670","49",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_value("※ 영문이름신청시 앞 음절만 대문자로 작성하여 주시기 바랍니다. \n    [예시] 홍길동  Hong Gil Dong (○) Hong Gildong(X)  Hong gildong(X) hong gildong(X) ");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:1","39","86","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"divData:15","70","27","51.01%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","divData:15","70","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtID_PERSON","value","dsList","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_POSITION.form.CDTextBox","value","dsList","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_POSITION.form.DSTextBox","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_HNAME_OLD","value","dsList","DS_HNAME_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_ENAME_OLD","value","dsList","DS_ENAME_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtDS_HNAME_NEW","value","dsList","DS_HNAME_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtDS_ENAME_NEW","value","dsList","DS_ENAME_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtDS_REASON","value","dsList","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_EMPLOYEECARD_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_NO_SEQ = "";
        this.fv_ID_PERSON = "";

        this.fv_CD_CORP = "";
        this.fv_ID_SABUN = "";
        this.fv_DS_HNAME = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fv_NO_SEQ = this.gfnNvl(this.getOwnerFrame().NO_SEQ, "");
        	this.fv_ID_PERSON = this.gfnNvl(this.getOwnerFrame().ID_PERSON, "");

        	this.fv_CD_CORP = this.gfnNvl(this.getOwnerFrame().CD_CORP, "");
        	this.fv_ID_SABUN = this.gfnNvl(this.getOwnerFrame().ID_SABUN, "");
        	this.fv_DS_HNAME = this.gfnNvl(this.getOwnerFrame().DS_HNAME, "");

        	if(!this.gfnIsNull(this.fv_NO_SEQ) && !this.gfnIsNull(this.fv_ID_PERSON)){
        		//기존데이타 조회
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfCD_POSITION.set_enable(false);
        		this.edtDS_HNAME_OLD.set_enable(false);
        		this.edtDS_ENAME_OLD.set_enable(false);
        		this.fnSelect();
        	}else{
        		//신규등록
        		this.dsList.clearData();
        		this.dsList.addRow();

        		//trace("CD_CORP", this.gfnNvl(this.fv_CD_CORP, this.AuthClient.CD_CORP));
        		//trace("ID_SABUN", this.gfnNvl(this.fv_ID_SABUN, this.AuthClient.ID_SABUN));

        		this.dsList.setColumn(0, "CD_CORP", this.gfnNvl(this.fv_CD_CORP, this.AuthClient.CD_CORP));
        		this.dsList.setColumn(0, "ID_SABUN", this.gfnNvl(this.fv_ID_SABUN, this.AuthClient.ID_SABUN));

        		if(!this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))){
        			this.ccfID_SABUN.form.fnCodeFindLoad();
        		}
        	}

        	//>> GR_SEARCH <=2   수정 가능 / GR_SEARCH >2 수정불가
        	if(this.FormInfo.GR_SEARCH > "2"){
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfCD_POSITION.set_enable(false);
        		this.edtDS_HNAME_OLD.set_enable(false);
        		this.edtDS_ENAME_OLD.set_enable(false);
        	}

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;
        	this.ccfCD_DEPT = this.divData.form.ccfCD_DEPT;
        	this.ccfCD_POSITION = this.divData.form.ccfCD_POSITION;
        	this.edtDS_HNAME_OLD = this.divData.form.edtDS_HNAME_OLD;
        	this.edtDS_ENAME_OLD = this.divData.form.edtDS_ENAME_OLD;

        	this.edtDS_HNAME_NEW = this.divData.form.edtDS_HNAME_NEW;
        	this.edtDS_ENAME_NEW = this.divData.form.edtDS_ENAME_NEW;
        	this.edtDS_REASON = this.divData.form.edtDS_REASON;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("NO_SEQ", "int");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("DS_HNAME_OLD", "string");
        	this.dsSave.addColumn("DS_ENAME_OLD", "string");
        	this.dsSave.addColumn("DS_HNAME_NEW", "string");
        	this.dsSave.addColumn("DS_ENAME_NEW", "string");
        	this.dsSave.addColumn("DS_REASON", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_POSITION.AfterCDTextChanged = "fnAfterCDTextChanged";
        };


         /*
          *	등록된 데이타 조회
          */
        this.fnSelect = function() {
        	if(this.gfnIsNull(this.fv_NO_SEQ)
        			||this.gfnIsNull(this.fv_ID_PERSON) ) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", this.fv_ID_PERSON);
        	this.dsSelect.setColumn(0, "NO_SEQ", this.fv_NO_SEQ);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);

         	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }


        this.btnOK_onclick = function(obj,e){
        	this.fnSave();
        };

        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) return;
        	if(!this.fnSaveValid()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

         	var nNO_SEQ = this.gfnNvl(this.dsList.getColumn(0, "NO_SEQ"), 0);
         	var flag = (nNO_SEQ == 0) ? "I" : "U";
        	this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "NO_SEQ", nNO_SEQ);
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        	this.dsSave.setColumn(nrow, "DS_HNAME_OLD", this.gfnNvl(this.dsList.getColumn(0, "DS_HNAME_OLD"),""));
        	this.dsSave.setColumn(nrow, "DS_ENAME_OLD", this.gfnNvl(this.dsList.getColumn(0, "DS_ENAME_OLD"),""));
        	this.dsSave.setColumn(nrow, "DS_HNAME_NEW", this.gfnNvl(this.dsList.getColumn(0, "DS_HNAME_NEW"),""));
        	this.dsSave.setColumn(nrow, "DS_ENAME_NEW", this.gfnNvl(this.dsList.getColumn(0, "DS_ENAME_NEW"),""));
        	this.dsSave.setColumn(nrow, "DS_REASON", this.gfnNvl(this.dsList.getColumn(0, "DS_REASON"),""));
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSaveValid = function(){
        	if(this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value) || this.gfnIsNull(this.divData.form.edtID_PERSON.value)) {
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력해주세요", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.edtDS_HNAME_NEW.value)) {
        		this.fnValidCallback = function(){
        			this.edtDS_HNAME_NEW.setFocus();
        		}
        		this.gfnAlert("한글성명을 입력해주세요", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.edtDS_ENAME_NEW.value)) {
        		this.fnValidCallback = function(){
        			this.edtDS_ENAME_NEW.setFocus();
        		}
        		this.gfnAlert("영문성명을 입력해주세요", "fnValidCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfID_SABUN"){
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.getOwnerFrame().CD_DEPT, ""));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.getOwnerFrame().CD_CORP, "%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	else if(id == "ccfCD_DEPT"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.getOwnerFrame().CD_DEPT, this.AuthClient.CD_DEPT));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.getOwnerFrame().CD_CORP, "%"));
        		dsUserParam.setColumn(nrow, "YN_DELETE", "N");
        	}
        	else if(id == "ccfCD_POSITION"){ //직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED');	//직위
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfID_SABUN"){
         		if(arr.length >0){
        			var rowData = arr[0];
        			this.divData.form.edtID_PERSON.set_value(rowData.ID_PERSON);

        			this.ccfCD_DEPT.form.CDTextBox.set_value(rowData.CD_DEPT);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(rowData.DS_DEPT);
        			this.ccfCD_POSITION.form.CDTextBox.set_value(rowData.CD_POSITION);
        			this.ccfCD_POSITION.form.DSTextBox.set_value(rowData.DS_POSITION);
        			this.edtDS_HNAME_OLD.set_value(rowData.DS_HNAME);
        			this.edtDS_ENAME_OLD.set_value(rowData.DS_ENAME);

        			this.edtDS_HNAME_NEW.set_value(rowData.DS_HNAME);
        			this.edtDS_ENAME_NEW.set_value(rowData.DS_ENAME);

         		}else{
        			this.divData.form.edtID_PERSON.set_value("");

        			this.ccfCD_DEPT.form.CDTextBox.set_value("");
        			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        			this.ccfCD_POSITION.form.CDTextBox.set_value("");
        			this.ccfCD_POSITION.form.DSTextBox.set_value("");
        			this.edtDS_HNAME_OLD.set_value("");
        			this.edtDS_ENAME_OLD.set_value("");

        			this.edtDS_HNAME_NEW.set_value("");
        			this.edtDS_ENAME_NEW.set_value("");
        		}
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("저장되었습니다.", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}else if(svcID == "select"){
        		if(this.dsList.rowcount >0){
        			var sCD_APPROVAL = this.dsList.getColumn(0, "CD_APPROVAL");
        			var sDT_ISSUE = this.dsList.getColumn(0, "DT_ISSUE"); //발급일자
        // --CD_APPROVAL
        // --01	상신
        // --03	결재완료
        // --04	반려
        			if(sCD_APPROVAL == "03" || !this.gfnIsNull(sDT_ISSUE)){
        				this.btnOK.set_enable(false);
        			}else{
        				this.btnOK.set_enable(true);
        			}
        		}
        	}
        }


        this.dsList_onvaluechanged = function(obj,e){
        	if(e.newvalue != e.oldvalue){
        		if(e.columnid == "ID_SABUN"){
        			//this.dsList.clearData();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_POSITION_BG_00.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staID_SABUN_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staCD_POSITION_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staCD_DEPT_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_ENAME_OLD_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_HNAME_OLD_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_ENAME_NEW_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_HNAME_NEW_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_REASON_BG.addEventHandler("onclick",this.sta23_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_EMPLOYEECARD_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
