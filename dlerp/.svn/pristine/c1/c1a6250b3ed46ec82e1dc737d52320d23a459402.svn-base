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
            this.set_titletext("부외자산관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_ASSET_OUT_STATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMBPR_ASSET_OUT_OUT_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DMBPR_ASSET_OUT_OUT_APPROVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_ACT_FR\"/><Col id=\"DT_ACT_TO\"/><Col id=\"TY_ACT\"/><Col id=\"TY_APPROVAL\">Y</Col><Col id=\"TY_STATUS\"/><Col id=\"DS_ASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SYSTEM:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_async("true");
            obj.getSetter("FitToContents").set("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM","0.0","staCD_SYSTEM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_APPROVAL","staID_DAM:0.0","staCD_SYSTEM:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboTY_APPROVAL_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_APPROVAL_innerdataset", obj);
            divSearch_form_ccboTY_APPROVAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_APPROVAL_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORDER","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("취득일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACT_FR","staDT_ORDER:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_ACT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACT_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM00","ccfCD_SITE:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_STATUS","staID_DAM00:0.0","staCD_SYSTEM:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboTY_STATUS_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_STATUS_innerdataset", obj);
            divSearch_form_ccboTY_STATUS_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">결재완료</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">결재중</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미결재</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_STATUS_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM01","ctclDT_ACT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("취득구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ACT","staID_DAM01:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboTY_ACT_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_ACT_innerdataset", obj);
            divSearch_form_ccboTY_ACT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">구입</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_ACT_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK","ccboTY_STATUS:0.0","staCD_SYSTEM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("품명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_ASSET","staTY_JAJIK:0.0","staCD_SYSTEM:10.0","199","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","-5",null,null,"0","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_ACT_FR","value","dsSearch","DT_ACT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_ACT_TO","value","dsSearch","DT_ACT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_ACT","value","dsSearch","TY_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTY_APPROVAL","value","dsSearch","TY_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboTY_STATUS","value","dsSearch","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtDS_ASSET","value","dsSearch","DS_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMB_ASSET_OUT_STATUS.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_ACT_FR", this.gfnAddMonth(today, -3));
        	this.dsSearch.setColumn(0, "DT_ACT_TO", this.gfnGetLastDate(today));
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
         	var id_group = this.FormInfo.ID_GROUP;
         	var gr_search = this.FormInfo.GR_SEARCH;
         	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnAPPCANCEL = this.gfnFormButtonAdd("btnAPPCANCEL", "fnAPPCANCEL");
        	this.btnHistory = this.gfnFormButtonAdd("btnHistory", "fnHISTORY");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_ASSET_OUT_STATUS");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFCOST_TREE_01") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
        		dsUserParam.setColumn(nrow, "CD_STDAGG", "");
        	}
        	else if (id == "DZX_CFSITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	else if (id == "DMB_CFASSET_OUT"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE","string");
        	this.dsSelect.addColumn("DT_ACT_FR","string");
        	this.dsSelect.addColumn("DT_ACT_TO","string");
        	this.dsSelect.addColumn("TY_ACT","string");
        	this.dsSelect.addColumn("TY_APPROVAL","string");
        	this.dsSelect.addColumn("DS_ASSET","string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK","string");
        	this.dsSave.addColumn("NO_INV","string");
        	this.dsSave.addColumn("NO_OUT","string");
        	this.dsSave.addColumn("TY_OUT","string");
        	this.dsSave.addColumn("CD_SITE_IN","string");
        	this.dsSave.addColumn("CT_OUT","int");
        	this.dsSave.addColumn("UP_OUT","bigdecimal");
        	this.dsSave.addColumn("AM_OUT","bigdecimal");
        	this.dsSave.addColumn("DT_OUT","string");
        	this.dsSave.addColumn("TY_ACCOUNT","string");
        	this.dsSave.addColumn("DS_REM","string");
        	this.dsSave.addColumn("ID_USER","string");

        	/*
        	this.dsSave.addColumn("NO_ASSET","string");
        	this.dsSave.addColumn("DS_ASSET","string");
        	this.dsSave.addColumn("TY_REG","string");
        	this.dsSave.addColumn("DT_INV","string");
        	this.dsSave.addColumn("DS_VENDOR","string");
        	this.dsSave.addColumn("TY_ACT","string");
        	this.dsSave.addColumn("NM_MNG","string");
        	this.dsSave.addColumn("DS_PLACE","string");
        	this.dsSave.addColumn("YN_JUNYOUNG","string");
        	this.dsSave.addColumn("SZ_SIZE_ASSET","string");
        	this.dsSave.addColumn("DS_UNIT_ASSET","string");
        	this.dsSave.addColumn("CD_LICCOST","string");
        	this.dsSave.addColumn("DS_ITEM","string");
        	this.dsSave.addColumn("SZ_SIZE","string");
        	this.dsSave.addColumn("DS_UNIT","string");
        	*/

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_APROVE", "string");
        	this.dsExecute.addColumn("NO_INV", "string");
        	this.dsExecute.addColumn("NO_OUT", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	// if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0,"CD_SITE",this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0,"DT_ACT_FR",this.dsSearch.getColumn(0, "DT_ACT_FR"));
        	this.dsSelect.setColumn(0,"DT_ACT_TO",this.dsSearch.getColumn(0, "DT_ACT_TO"));
        	this.dsSelect.setColumn(0,"TY_ACT",this.dsSearch.getColumn(0, "TY_ACT"));
        	this.dsSelect.setColumn(0,"TY_APPROVAL",this.dsSearch.getColumn(0, "TY_APPROVAL"));
        	this.dsSelect.setColumn(0,"DS_ASSET",this.dsSearch.getColumn(0, "DS_ASSET"));

        	console.log(this.dsSearch.saveXML());

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
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.gfnAlert("현장코드를 선택 하세요");
        		return false;
        	}

        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var nrow = this.gfnGridDel(this.dxGrid);
        	if(this.dsList.getColumn(nrow, "TY_APPROVAL") == "Y")
        	{
        		this.gfnAlert("승인된 건은 삭제가 불가능합니다.");
        		return false;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();

        				this.dsSave.setColumn(nrow,"TY_WRK", flag);
        				this.dsSave.setColumn(nrow,"NO_INV",this.dsList.getColumn(i, "NO_INV"));
        				this.dsSave.setColumn(nrow,"NO_OUT",this.dsList.getColumn(i, "NO_OUT"));
        				this.dsSave.setColumn(nrow,"TY_OUT",this.dsList.getColumn(i, "TY_OUT"));
        				this.dsSave.setColumn(nrow,"CD_SITE_IN",this.dsList.getColumn(i, "CD_SITE_IN"));
        				this.dsSave.setColumn(nrow,"CT_OUT",this.dsList.getColumn(i, "CT_OUT"));
        				this.dsSave.setColumn(nrow,"UP_OUT",this.dsList.getColumn(i, "UP_OUT"));
        				this.dsSave.setColumn(nrow,"AM_OUT",this.dsList.getColumn(i, "AM_OUT"));
        				this.dsSave.setColumn(nrow,"DT_OUT",this.dsList.getColumn(i, "DT_OUT"));
        				this.dsSave.setColumn(nrow,"TY_ACCOUNT",this.dsList.getColumn(i, "TY_ACCOUNT"));
        				this.dsSave.setColumn(nrow,"DS_REM",this.dsList.getColumn(i, "DS_REM"));
        				this.dsSave.setColumn(nrow,"ID_USER",this.AuthClient.ID_USER);

        				break;

        				/*
        				this.dsSave.setColumn(nrow,"DS_ASSET",this.dsList.getColumn(i, "DS_ASSET"));
        				this.dsSave.setColumn(nrow,"TY_ASSET",this.dsList.getColumn(i, "TY_ASSET"));
        				this.dsSave.setColumn(nrow,"SZ_SIZE_ASSET",this.dsList.getColumn(i, "SZ_SIZE_ASSET"));
        				this.dsSave.setColumn(nrow,"DS_UNIT_ASSET",this.dsList.getColumn(i, "DS_UNIT_ASSET"));
        				this.dsSave.setColumn(nrow,"TY_REG",this.dsList.getColumn(i, "TY_REG"));
        				this.dsSave.setColumn(nrow,"DT_INV",this.dsList.getColumn(i, "DT_INV"));
        				this.dsSave.setColumn(nrow,"DS_VENDOR",this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow,"CT_INV",this.dsList.getColumn(i, "CT_INV"));
        				this.dsSave.setColumn(nrow,"UP_INV",this.dsList.getColumn(i, "UP_INV"));
        				this.dsSave.setColumn(nrow,"AM_INV",this.dsList.getColumn(i, "AM_INV"));
        				this.dsSave.setColumn(nrow,"TY_ACT",this.dsList.getColumn(i, "TY_ACT"));
        				this.dsSave.setColumn(nrow,"CD_SITE_IN",this.dsList.getColumn(i, "CD_SITE_IN"));
        				this.dsSave.setColumn(nrow,"CD_LICCOST",this.dsList.getColumn(i, "CD_LICCOST"));
        				this.dsSave.setColumn(nrow,"DS_ITEM",this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsSave.setColumn(nrow,"SZ_SIZE",this.dsList.getColumn(i, "SZ_SIZE"));
        				this.dsSave.setColumn(nrow,"DS_UNIT",this.dsList.getColumn(i, "DS_UNIT"));
        				this.dsSave.setColumn(nrow,"NM_MNG",this.dsList.getColumn(i, "NM_MNG"));
        				this.dsSave.setColumn(nrow,"DS_PLACE",this.dsList.getColumn(i, "DS_PLACE"));
        				this.dsSave.setColumn(nrow,"YN_JUNYOUNG",this.dsList.getColumn(i, "YN_JUNYOUNG"));
        				this.dsSave.setColumn(nrow,"TY_ACCOUNT",this.dsList.getColumn(i, "TY_ACCOUNT"));
        				this.dsSave.setColumn(nrow,"DS_REM",this.dsList.getColumn(i, "DS_REM"));
        				this.dsSave.setColumn(nrow,"ID_USER",this.AuthClient.ID_USER);
        				*/
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}

        		this.gfnAlert("현장코드를 선택하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
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
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	 if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
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
        	}
        };

        this.fnAPP = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("승인하시려는 건을 선택하세요.");
        		return false;
        	}

        	var msg = "승인 처리를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnAPP_callback", "Y");
        }

        this.fnAPPCANCEL = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("승인취소하시려는 건을 선택하세요.");
        		return false;
        	}

        	var msg = "승인 취소 처리를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnAPP_callback", "N");
        }

        this.fnAPP_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsExecute.clearData();

        		var nrow = this.dsExecute.addRow();

        		this.dsExecute.setColumn(nrow, "TY_APROVE", strId);
        		this.dsExecute.setColumn(nrow, "NO_INV", this.dsList.getColumn(this.dsList.rowposition, "NO_INV"));
        		this.dsExecute.setColumn(nrow, "NO_OUT", this.dsList.getColumn(this.dsList.rowposition, "NO_OUT"));
        		this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        		if (this.dsExecute.rowcount == 0) return;

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
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

        this.fnHISTORY = function(obj,e)
        {
        	if(this.dsList.rowposition < 0){
        			this.gfnAlert("선택된 행이 없습니다.");
        			return false;
        	}

           var strNO_ASSET = this.dsList.getColumn(this.dsList.rowposition, "NO_ASSET");
           var strDS_ASSET = this.dsList.getColumn(this.dsList.rowposition, "DS_ASSET");
           if(this.gfnIsNull(strNO_ASSET)) { return false; }

           var param = {};
           param.NO_ASSET = strNO_ASSET;
           param.DS_ASSET = strDS_ASSET;

           this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMB_ASSET_OUT_HISTORY", "fnDetail_Callback", param, 1024, 450);
        }

        this.fnDetail_Callback = function(strID, value) {
           // this.FormBtns.Select.click();
        }

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnAPP, this.dsList);
        	this.gfnBtnCheck(this.btnAPPCANCEL, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMB_ASSET_OUT_STATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
