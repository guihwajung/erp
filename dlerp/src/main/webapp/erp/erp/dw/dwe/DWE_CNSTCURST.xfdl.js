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
            this.set_titletext("공사현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWEPR_CNSTCURST01_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWEPR_CNSTCURST02_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWEPR_CNSTCURST03_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DWEPR_CNSTCURST04_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DWEPR_CNSTCURST05_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DWEPR_CNSTCURST06_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWEPR_CNSTCURST02_SAVE</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DWEPR_CNSTCURST03_SAVE</Col></Row><Row><Col id=\"TARGET\">save4</Col><Col id=\"SP\">DWEPR_CNSTCURST05_SAVE</Col></Row><Row><Col id=\"TARGET\">save5</Col><Col id=\"SP\">DWEPR_CNSTCURST06_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"SP\">DWEPR_CNSTCURST_EXECUTE</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"AM_UNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAM_UNIT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_UNIT","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("금액단위");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAM_UNIT","staAM_UNIT:0.0","10.0","68","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsAM_UNIT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"92","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_wheelscrollrow("2");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataMedium","0","divDataTop:10",null,"297","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","-5","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_text("손익현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Div("divDataMedium2","0","divDataMedium:10",null,"92","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataMedium2.form);
            obj.set_taborder("0");
            obj.set_text("공정현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium2.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMedium2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium2.addChild(obj.name, obj);

            obj = new Div("divDataMedium3","0","divDataMedium2:10",null,"222","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataMedium3.form);
            obj.set_taborder("0");
            obj.set_text("연도별 사업계획/실적");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium3.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","sta03:5",null,null,"0","10",null,null,null,null,this.divData.form.divDataMedium3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium3.addChild(obj.name, obj);

            obj = new Div("divDataMedium4","0","divDataMedium3:0",null,"252","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataMedium4.form);
            obj.set_taborder("0");
            obj.set_text("주요 Risk 지표변동현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium4.addChild(obj.name, obj);

            obj = new Grid("objGrid4","0","sta03:5",null,null,"0","10",null,null,null,null,this.divData.form.divDataMedium4.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium4.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataMedium4:0",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("주요이슈 및 Risk Factor 모니터링");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid5","0","sta03:5",null,null,"0","10",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboAM_UNIT","value","dsSearch","AM_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWE_CNSTCURST.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0, "AM_UNIT", (this.getOwnerFrame().AM_UNIT));
        		this.FormBtns.Select.click();

        	}else{
        		this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate());
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
        	this.btnCnstCurstCrt = this.gfnFormButtonAdd("btnCnstCurstCrt", "fnCnstCurstCrt");
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.cboAM_UNIT = this.divSearch.form.cboAM_UNIT;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataMedium.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataMedium2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.divDataMedium3.form.objGrid3;
        	this.dxGrid4 = this.divData.form.divDataMedium4.form.objGrid4;
        	this.dxGrid5 = this.divData.form.divDataBottom.form.objGrid5;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWE_CNSTCURST01");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWE_CNSTCURST02");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWE_CNSTCURST03");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DW", "DWE_CNSTCURST04");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DW", "DWE_CNSTCURST05");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DW", "DWE_CNSTCURST06");
        	this.dxGrid5.set_autosizingtype("row");

        	// 셀 수정가능 여부
        	this.dxGrid1.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("AM_UNIT", "string");

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_WRK", "string");
        	this.dsSave1.addColumn("ID_USER", "string");
        	this.dsSave1.addColumn("CD_SITE", "string");
        	this.dsSave1.addColumn("YM_WORK", "string");
        	this.dsSave1.addColumn("CD_PLITEM", "string");
        	this.dsSave1.addColumn("AM_INVMRVW", "bigdecimal");
        	this.dsSave1.addColumn("RT_INVMRVW", "bigdecimal");
        	this.dsSave1.addColumn("AM_SITEEBGT", "bigdecimal");
        	this.dsSave1.addColumn("RT_SITEEBGT", "bigdecimal");
        	this.dsSave1.addColumn("AM_SILHENG", "bigdecimal");
        	this.dsSave1.addColumn("RT_SILHENG", "bigdecimal");

        	this.dsSave2 = new Dataset();
        	this.dsSave2.addColumn("TY_WRK", "string");
        	this.dsSave2.addColumn("ID_USER", "string");
        	this.dsSave2.addColumn("CD_SITE", "string");
        	this.dsSave2.addColumn("YM_WORK", "string");
        	this.dsSave2.addColumn("DS_PRGSCURST", "string");

        	this.dsSave4 = new Dataset();
        	this.dsSave4.addColumn("TY_WRK", "string");
        	this.dsSave4.addColumn("ID_USER", "string");
        	this.dsSave4.addColumn("CD_SITE", "string");
        	this.dsSave4.addColumn("YM_WORK", "string");
        	this.dsSave4.addColumn("CD_IDCR", "string");
        	this.dsSave4.addColumn("AM_IDCR", "bigdecimal");
        	this.dsSave4.addColumn("DS_RSN", "string");

        	this.dsSave5 = new Dataset();
        	this.dsSave5.addColumn("TY_WRK", "string");
        	this.dsSave5.addColumn("ID_USER", "string");
        	this.dsSave5.addColumn("CD_SITE", "string");
        	this.dsSave5.addColumn("YM_WORK", "string");
        	this.dsSave5.addColumn("CD_ISS", "string");
        	this.dsSave5.addColumn("SN_ISS", "int");
        	this.dsSave5.addColumn("DS_CTS", "string");
        	this.dsSave5.addColumn("DS_RMKS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "AM_UNIT", this.dsSearch.getColumn(0, "AM_UNIT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select2=dsSelect select3=dsSelect select4=dsSelect select5=dsSelect";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20 dsList3=select30 dsList4=select40 dsList5=select50";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid5, "bottom"); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid5);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var arr_in = [];

        	// 손익현황
        	this.dsSave1.clearData();
        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		if(flag == "U") {
        			var nrow = this.dsSave1.addRow();
        			this.dsSave1.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave1.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        			this.dsSave1.setColumn(nrow, "CD_PLITEM", this.dsList1.getColumn(i, "CD_PLITEM"));
        			this.dsSave1.setColumn(nrow, "AM_INVMRVW", this.dsList1.getColumn(i, "AM_INVMRVW"));
        			this.dsSave1.setColumn(nrow, "RT_INVMRVW", this.dsList1.getColumn(i, "RT_INVMRVW"));
        			this.dsSave1.setColumn(nrow, "AM_SITEEBGT", this.dsList1.getColumn(i, "AM_SITEEBGT"));
        			this.dsSave1.setColumn(nrow, "RT_SITEEBGT", this.dsList1.getColumn(i, "RT_SITEEBGT"));
        			this.dsSave1.setColumn(nrow, "AM_SILHENG", this.dsList1.getColumn(i, "AM_SILHENG"));
        			this.dsSave1.setColumn(nrow, "RT_SILHENG", this.dsList1.getColumn(i, "RT_SILHENG"));
        		}
        	}
        	if(this.dsSave1.rowcount > 0) {
        		arr_in.push("save1=dsSave1");
        	}

        	// 공정현황
        	this.dsSave2.clearData();
        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		if(flag == "U") {
        			var nrow = this.dsSave2.addRow();
        			this.dsSave2.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave2.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave2.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        			this.dsSave2.setColumn(nrow, "DS_PRGSCURST", this.dsList2.getColumn(i, "DS_PRGSCURST"));
        		}
        	}
        	if(this.dsSave2.rowcount > 0) {
        		arr_in.push("save2=dsSave2");
        	}

        	// 주요RISK
        	this.dsSave4.clearData();
        	for (var i = 0; i < this.dsList4.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList4, i);
        		if(flag == "U") {
        			var nrow = this.dsSave4.addRow();
        			this.dsSave4.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave4.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave4.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave4.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        			this.dsSave4.setColumn(nrow, "CD_IDCR", this.dsList4.getColumn(i, "CD_IDCR"));
        			this.dsSave4.setColumn(nrow, "AM_IDCR", this.dsList4.getColumn(i, "AM_TMON"));
        			this.dsSave4.setColumn(nrow, "DS_RSN", this.dsList4.getColumn(i, "DS_RSN"));
        		}
        	}
        	if(this.dsSave4.rowcount > 0) {
        		arr_in.push("save4=dsSave4");
        	}

        	// 주요이슈
        	this.dsSave5.clearData();
        	for (var i = 0; i < this.dsList5.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList5, i);
        		switch(flag) {
        		case "I" :
        		case "U" :
        		case "D" :
        			var nrow = this.dsSave5.addRow();
        			this.dsSave5.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave5.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave5.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave5.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        			this.dsSave5.setColumn(nrow, "CD_ISS", this.dsList5.getColumn(i, "CD_ISS"));
        			this.dsSave5.setColumn(nrow, "SN_ISS", this.dsList5.getColumn(i, "SN_ISS"));
        			this.dsSave5.setColumn(nrow, "DS_CTS", this.dsList5.getColumn(i, "DS_CTS"));
        			this.dsSave5.setColumn(nrow, "DS_RMKS", this.dsList5.getColumn(i, "DS_RMKS"));
        		break;
        		}
        	}
        	if(this.dsSave5.rowcount > 0) {
        		arr_in.push("save5=dsSave5");
        	}


        	if (this.dsSave1.rowcount == 0 && this.dsSave2.rowcount == 0 && this.dsSave4.rowcount == 0 && this.dsSave5.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = arr_in.join(' ');
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

        	}else if(this.gfnIsNull(this.divSearch.form.ctclYM_WORK.form.TextBox.value)){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.", "fnVaidateCallback");
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.gfnAlert("현황자료생성 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			// 초기 선택값은 아래 3가지 방법으로 가능
         			this.divSearch.form.cboAM_UNIT.set_index(0);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid1, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// 손익현황 관련(CD_PLITEM = '60' 금액컬럼만 수정가능하게 처리)
        	if(this.dsList1.getColumn(row, "CD_PLITEM") == "60") {
        		if(colnm == "AM_INVMRVW" || colnm == "AM_SITEEBGT" || colnm == "AM_SILHENG"){
        			return true;
        		}else{
        			return false;
        		}
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        		this.gfnGridClear(this.dxGrid5);
        	}
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        		this.gfnGridClear(this.dxGrid5);
        	}
        };


         // 작업 버튼 클릭 이벤트
         this.fnCnstCurstCrt = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.ccfCD_SITE.form.DSTextBox.value
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n기존 공사현황자료를 삭제 이후 재생성합니다."
        			+ "\n\n현황자료 생성 하시겠습니까?";

        	this.gfnConfirm(msg, "fnConfirm_Confirm");
        }

        this.fnConfirm_Confirm = function(strId, val) {
        	if(val == true) {
        		this.fnExec();
        	}
        }

        /*
         *	작업 처리
         */
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	var nRow = this.dsList.rowposition;

        	this.dsExec.setColumn(0, "TY_WRK", "CRT");
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

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


         // 첨부파일 버튼
         this.fnAttachFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (this.dsList.rowcount < 1) { return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DWD2";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };


        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	var nrow = this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "71");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsAM_UNIT=combo0";
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


        // 손익현황 그리드 자동산식
        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){

        		// 사업손익 row 인덱스
        		var row70 = this.dsList1.findRow("CD_PLITEM", "70");

        		// 일반관리비 : CD_PLITEM = '50' 인 경우
        		if(this.dsList1.getColumn(e.row, "CD_PLITEM") == "50"){
        			if(e.columnid == "RT_INVMRVW") {	// 비율
        				this.dsList1.setColumn(e.row, "AM_INVMRVW", nexacro.floor(nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "10", "AM_INVMRVW"), 0) * nexacro.toNumber(this.dsList1.getColumn(e.row, "RT_INVMRVW"), 0) * 0.01));

        				this.dsList1.setColumn(row70, "AM_INVMRVW", nexacro.floor(nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_INVMRVW"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_INVMRVW"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_INVMRVW"), 0)));
        			}else if(e.columnid == "RT_SITEEBGT") {	// 비율
        				this.dsList1.setColumn(e.row, "AM_SITEEBGT", nexacro.floor(nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "10", "AM_SITEEBGT"), 0) * nexacro.toNumber(this.dsList1.getColumn(e.row, "RT_SITEEBGT"), 0) * 0.01));

        				this.dsList1.setColumn(row70, "AM_SITEEBGT", nexacro.floor(nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_SITEEBGT"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_SITEEBGT"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_SITEEBGT"), 0)));
        			}else if(e.columnid == "RT_SILHENG") {	// 비율
        				this.dsList1.setColumn(e.row, "AM_SILHENG", nexacro.floor(nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "10", "AM_SILHENG"), 0) * nexacro.toNumber(this.dsList1.getColumn(e.row, "RT_SILHENG"), 0) * 0.01));

        				this.dsList1.setColumn(row70, "AM_SILHENG", nexacro.floor(nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_SILHENG"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_SILHENG"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_SILHENG"), 0)));
        			}
        			else if(e.columnid == "AM_INVMRVW") {	// 금액
        				this.dsList1.setColumn(row70, "AM_INVMRVW", nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_INVMRVW"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_INVMRVW"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_INVMRVW"), 0));
        			}else if(e.columnid == "AM_SITEEBGT") {	// 금액
        				this.dsList1.setColumn(row70, "AM_SITEEBGT", nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_SITEEBGT"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_SITEEBGT"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_SITEEBGT"), 0));
        			}else if(e.columnid == "AM_SILHENG") {	// 금액
        				this.dsList1.setColumn(row70, "AM_SILHENG", nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_SILHENG"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_SILHENG"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_SILHENG"), 0));
        			}
        		}

        		// 금융비용 :  CD_PLITEM = '60' 인 경우
        		if(this.dsList1.getColumn(e.row, "CD_PLITEM") == "60"){
        			if(e.columnid == "AM_INVMRVW") {	// 금액
        				this.dsList1.setColumn(row70, "AM_INVMRVW", nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_INVMRVW"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_INVMRVW"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_INVMRVW"), 0));
        			}else if(e.columnid == "AM_SITEEBGT") {	// 금액
        				this.dsList1.setColumn(row70, "AM_SITEEBGT", nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_SITEEBGT"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_SITEEBGT"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_SITEEBGT"), 0));
        			}else if(e.columnid == "AM_SILHENG") {	// 금액
        				this.dsList1.setColumn(row70, "AM_SILHENG", nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "40", "AM_SILHENG"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "50", "AM_SILHENG"), 0) - nexacro.toNumber(this.dsList1.lookup("CD_PLITEM", "60", "AM_SILHENG"), 0));
        			}
        		}
        	}
        };

        //주요 Risk 지표변동현황 그리드 자동산식
        this.dsList4_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "AM_TMON" || e.columnid == "AM_PMON") {
        			this.dsList4.setColumn(e.row, "AM_PL", nexacro.toNumber(this.dsList4.getColumn(e.row, "AM_TMON"), 0) - nexacro.toNumber(this.dsList4.getColumn(e.row, "AM_PMON"), 0));
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList4.addEventHandler("onvaluechanged",this.dsList4_onvaluechanged,this);
        };
        this.loadIncludeScript("DWE_CNSTCURST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
