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
            this.set_titletext("주택-약정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_FIELD_EXPL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_FIELD_EXPL_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_FIELD_EXPL_DELETE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"H_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"M_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INCU_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXCP_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAT_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM_SP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMinutes", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dshours", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","186","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50","1120","640",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","124","340","991","149",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","340","120","149",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","124","251","991","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","124","193","991","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divFile","118","334","992","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_SP","128","256","982","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RM_SP","5","251","120","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","124","222","991","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_MAT_PAY","5","222","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("지급자재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EXCP_CONST","5","193","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("제외공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_INCU_CONST","5","164","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("포함공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","124","164","991","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EXPL","5","75","120","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","124","75","991","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_USER_EXPL","5","46","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("현설참가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","124","46","991","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_SITE_EXPL","5","17","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_text("현장설명회 일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_taborder("24");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","124","17","991","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MAT_PAY","128","227","298","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EXCP_CONST","128","198","298","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_INCU_CONST","128","169","298","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_EXPL","128","80","982","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SITE_EXPL","128","22","132","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboH_SITE_EXPL","265","22","45","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dshours");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboM_SITE_EXPL","315","22","45","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsMinutes");
            obj.set_readonly("true");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_USER_EXPL","129","51","298","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DOXPR_USERID_BYCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_SITE_EXPL","value","dsBase","DT_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfID_USER_EXPL.form.CDTextBox","value","dsBase","ID_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccfID_USER_EXPL.form.DSTextBox","value","dsBase","DS_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccboM_SITE_EXPL","value","dsBase","M_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccboH_SITE_EXPL","value","dsBase","H_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDS_EXPL","value","dsBase","DS_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtDS_INCU_CONST","value","dsBase","DS_INCU_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtDS_EXCP_CONST","value","dsBase","DS_EXCP_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtDS_MAT_PAY","value","dsBase","DS_MAT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_RM_SP","value","dsBase","DS_RM_SP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOB_CIVL_FIELD_EXPL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.FIELD_EXPL_GUBUN = this.getOwnerFrame().FIELD_EXPL_GUBUN;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	// 파일관리자 - 조회전에는 disable
        	this.divData.form.divFile.form.set_enable(false);
        	// 첨부파일
        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);

        	if(this.FIELD_EXPL_GUBUN == "U"){
        		this.FormBtns.Select.click();
        	} else{
        		this.dsBase.set_enableevent(false);
        		this.dsBase.setColumn(0, "DT_SITE_EXPL",this.getOwnerFrame().DT_SITE_EXPL);
        		this.dsBase.setColumn(0, "H_SITE_EXPL", this.getOwnerFrame().H_SITE_EXPL);
        		this.dsBase.setColumn(0, "M_SITE_EXPL", this.getOwnerFrame().M_SITE_EXPL);
        		this.dsBase.set_enableevent(true);
        		this.gfnSetFormStatus(this, "I");
        		this.fnSetButton();
        	}
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	//this.FormBtns.Excel.set_enable(false);
        	//this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);

        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);
        	}
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
        	this.CD_CORP = "";
        	this.ccfID_USER_EXPL = this.divData.form.ccfID_USER_EXPL;
        	this.ccfID_USER_EXPL.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";	//현설의뢰자


        	this.serverTime = "";
        	this.gfnGetServerTime("serverTime");

        	this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfID_USER_EXPL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfID_USER_EXPL"){
        		dsUserParam.setColumn(nrow, "CD_CORP", this.CD_CORP);
        	}
        	return true;
         }

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(arr.length > 0)
        	{
        		switch(id)
        		{
        			case "":
        			break;
        		}
        	}
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("DT_SITE_EXPL", "string");
        	this.dsSave.addColumn("H_SITE_EXPL", "string");
        	this.dsSave.addColumn("M_SITE_EXPL", "string");
        	this.dsSave.addColumn("ID_USER_EXPL", "string");
        	this.dsSave.addColumn("DS_EXPL", "string");
        	this.dsSave.addColumn("DS_INCU_CONST", "string");
        	this.dsSave.addColumn("DS_EXCP_CONST", "string");
        	this.dsSave.addColumn("DS_MAT_PAY", "string");
        	this.dsSave.addColumn("DS_RM_SP", "string");
        	this.dsSave.addColumn("ID_FILE_ATTCH", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSave.addRow();
        }


        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsBase=select0";
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

        this.fnSave = function(obj,e){
        	this.dsSave.copyRow(0, this.dsBase, 0);

        	this.dsSave.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if(!this.fnSaveValidate()) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsBase";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if(svcID == "select") {

        			this.divData.form.divFile.form.set_enable(true);
        			// 첨부파일
        			//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        			var fileManager = {};
        			fileManager.CD_GUBUN = "DOC2";
        			fileManager.CD_DIR = [ this.getOwnerFrame().CD_PROJ ];
        			fileManager.CD_REF1 = this.getOwnerFrame().CD_PROJ;

        			if(this.FormInfo.TY_AUTH == "R") {
        				fileManager.IS_READONLY = true;
        			} else {
        				fileManager.IS_READONLY = false;
        			}
        			// div FileManager 셋팅
        			this.divData.form.divFile.form.setFileManager(fileManager);

        		} else if(svcID == "save") {
        			this.FormBtns.Select.click();
        		} else if(svcID == "delete") {
        			this.getParentContext().close(true);
        		}
        		this.fnSetButton();
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };



        this.fnSaveValidate = function(){
        // 	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_SITE_EXPL")) || this.gfnIsNull(this.dsBase.getColumn(0, "H_SITE_EXPL")) || this.gfnIsNull(this.dsBase.getColumn(0, "M_SITE_EXPL"))){
        // 		this.gfnAlert("현장설명회 일자는 필수 입력 입니다.");
        // 		return false;
        // 	}
        //
        // 	if(this.gfnIsNull(this.dsBase.getColumn(0, "ID_USER_EXPL"))){
        // 		this.gfnAlert("현설참가자는 필수 입력 입니다.");
        // 		return false;
        // 	}
        //
        // 	if(this.gfnIsNull(this.dsBase.getColumn(0, "DS_EXPL"))){
        // 		this.gfnAlert("공사개요는 필수 입력 입니다.");
        // 		return false;
        // 	}
        //
        	return true;
        }

        this.dsBase_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        		this.fnSetButton();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOB_CIVL_FIELD_EXPL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
