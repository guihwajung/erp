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
            this.set_titletext("부가세관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_SALEVAT_CONTROL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_VAT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_VAT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_VAT_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_COMMON_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">comboV10</Col><Col id=\"SP\">DHXPR_COMMON_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">comboV11</Col><Col id=\"SP\">DHXPR_COMMON_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">comboV12</Col><Col id=\"SP\">DHXPR_COMMON_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">selectTax</Col><Col id=\"SP\">DHXPR_TAX_INFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VATAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_FROM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VENDOR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsV10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsV11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTax", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta08:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SALEBUY","sta01:0.0","10.0","149","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoTY_SALEBUY_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_SALEBUY_innerdataset", obj);
            divSearch_form_rdoTY_SALEBUY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">매입</Col><Col id=\"codecolumn\">V10</Col></Row><Row><Col id=\"codecolumn\">V11</Col><Col id=\"datacolumn\">매출</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_SALEBUY_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","rdoTY_SALEBUY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("증빙선택");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROOF","sta04:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta08:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta02:0.0","sta08:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","ccfCD_DEPT:0.0","sta08:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","sta06:0.0","sta08:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ctclDT_FROM:0.0","sta08:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta05:0.0","sta08:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta07","ctclDT_TO:10","sta08:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta07:0.0","sta08:10.0","310","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfCD_VENDOR:0.0","sta08:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_VATAPPR","sta03:0.0","sta08:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboYN_VATAPPR_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_VATAPPR_innerdataset", obj);
            divSearch_form_ccboYN_VATAPPR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_VATAPPR_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","-5","0",null,null,"5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_VATAPPR","value","dsSearch","YN_VATAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.rdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_PROOF.form.CDTextBox","value","dsSearch","CD_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_VATCONTROL.xfdl", function() {
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
        	//this.fnSetCombo();

        	this.ccfCD_CORP.setFocus();

        	var toDay = this.gfnGetDate();

        	//회계년월
        	this.ctclDT_FROM.set_value(toDay.substr(0,6) + "01");	//현재월1일
        	this.ctclDT_TO.set_value(toDay);	//현재일자

        	//승인구분
        	this.ccboYN_VATAPPR.set_index(0);
        	//this.rdoTY_SALEBUY.set_value("V10");

        	// 부가세신고서관리(DHV_VATMANAGE) 화면에서 넘겨주는
        	if (!this.gfnIsNull(this.getOwnerFrame().TY_SALEBUY) && !this.gfnIsNull(this.getOwnerFrame().CD_PROOF)){
        		this.rdoTY_SALEBUY.set_value(this.getOwnerFrame().TY_SALEBUY);
        		this.ccfCD_PROOF.form.CDTextBox.set_value(this.getOwnerFrame().CD_PROOF);

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.getOwnerFrame().CD_DEPT);
        		this.ctclDT_FROM.set_value(this.getOwnerFrame().DT_FROM);	//현재월1일
        		this.ctclDT_TO.set_value(this.getOwnerFrame().DT_TO);	//현재일자

        		//this.ccfCD_PROOF.form.DSTextBox.set_value(strDsCode);
        	}else{
        		this.rdoTY_SALEBUY.set_value("V10");
        		this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	}

        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT")))
        		this.ccfCD_SELFACNT.form.fnCodeFindLoad();

        	if (!this.gfnIsNull(this.getOwnerFrame().TY_SALEBUY) && !this.gfnIsNull(this.getOwnerFrame().CD_PROOF)){
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMagamCreate = this.gfnFormButtonAdd("MagamCreate", "fnMagam"); 			//마감
        	this.btnMagamCancel = this.gfnFormButtonAdd("MagamCancel", "fnMagam"); 			//마감취소
        	this.btnTaxView     = this.gfnFormButtonAdd("TaxView", "fnTaxView");			//세금계산서 보기
        	this.btnVatDetail   = this.gfnFormButtonAdd("VatDetail", "fnVatDetail"); 		//상세조회 버튼
        	this.btnSlipSelect  = this.gfnFormButtonAdd("SlipSelect", "fnSlipSelect"); 		//전표조회 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_SELFACNT = this.divSearch.form.ccfCD_SELFACNT;
        	this.rdoTY_SALEBUY 	= this.divSearch.form.rdoTY_SALEBUY;
        	this.ctclDT_FROM  	= this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO 		= this.divSearch.form.ctclDT_TO;
        	this.ccboYN_VATAPPR = this.divSearch.form.ccboYN_VATAPPR;
        	this.ccfCD_DEPT  	= this.divSearch.form.ccfCD_DEPT;
        	this.ccfCD_PROOF = this.divSearch.form.ccfCD_PROOF;
        	//this.ccboTY_VENDOR 	= this.divSearch.form.ccboTY_VENDOR;
        	this.ccfCD_VENDOR 	= this.divSearch.form.ccfCD_VENDOR;
        	this.dxGrid 		= this.divData.form.objGrid;

        	this.vProcType = "CREATE";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SELFACNT.CodeFindName = "DHX_CFSELFACNT_MULTI"; //"DHX_CFSELFACNT";
        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        // 	this.ccfCD_PROOF.CodeFindName = "CF_CODE_DH_V10";
        // 	this.ccfCD_PROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_PROOF.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_PROOF.CodeFindName = "DHX_COMMON_CODEFIND_SELECT_MULTI";
        	//this.ccfCD_PROOF.CodeFindName = "CF_CODE_DH_V11";
        	this.ccfCD_PROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROOF.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_VATCONTROL");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_CellDBClick, this);

        	this.dsList.addEventHandler("cancolumnchange", this.dsList_CanColumnChange, this);
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	this.dsList.addEventHandler("onrowposchanged", this.dsList_RowPoschanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	var colNO_CREDIT = this.dxGrid.getBindCellIndex("body", "NO_CREDIT");
        	this.dxGrid.setCellProperty("body", colNO_CREDIT, "edittype", "expr:comp.parent.parent.parent.fnGridNoCreditEditType(rowidx)");
        	this.dxGrid.setCellProperty("body", colNO_CREDIT, "expandshow", "expr:comp.parent.parent.parent.fnGridNoCreditExpandShow(rowidx)");

        	var colDS_PROOF = this.dxGrid.getBindCellIndex("body", "DS_PROOF");
        	this.dxGrid.setCellProperty("body", colDS_PROOF, "edittype", "expr:dataset.parent.gfnIsNull(TY_SALEBUY) ? 'none' : 'text'");
        	this.dxGrid.setCellProperty("body", colDS_PROOF, "expandshow", "expr:dataset.parent.gfnIsNull(TY_SALEBUY) ? 'hide' : 'show'");

        	var colTY_VATBGJE = this.dxGrid.getBindCellIndex("body", "TY_VATBGJE");
        	this.dxGrid.setCellProperty("body", colTY_VATBGJE, "edittype", "expr:YN_VATBGJE == 'Y' ? 'combo' : 'none'");
        };

        this.fnGridNoCreditExpandShow = function (row)
        {
        	var expandShow = "hide";
        	if(this.dsList.getColumn(row, "TY_SALEBUY") == "I"){
        		var cdProof = this.dsList.getColumn(row, "CD_PROOF");	//증빙선택
        		if(cdProof == "16" || cdProof == "17" || cdProof == "18" || cdProof == "19"){
        			expandShow = "show";
        		}
        	}
        	return expandShow;
        };

        this.fnGridNoCreditEditType = function (row)
        {
        	var editType = "none";
        	if(this.dsList.getColumn(row, "TY_SALEBUY") == "I"){
        		var cdProof = this.dsList.getColumn(row, "CD_PROOF");	//증빙선택
        		if(cdProof == "16" || cdProof == "17" || cdProof == "18" || cdProof == "19"){
        			editType = "text";
        		}else if(cdProof == "22"){	//현금영수증
        			editType = "text";
        		}
        	}

        	return editType;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("YN_VATAPPR", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("CD_PROOF", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_VATDEPT_ACNT", "string");
        	this.dsInsert.addColumn("TY_SALEBUY", "string");
        	this.dsInsert.addColumn("CD_PROOF", "string");
        	this.dsInsert.addColumn("TY_VATBGJE", "string");
        	this.dsInsert.addColumn("CD_VATACCOUNT", "string");
        	this.dsInsert.addColumn("TY_VATVENDOR", "string");
        	this.dsInsert.addColumn("CD_VATVENDOR", "string");
        	this.dsInsert.addColumn("DS_VATVENDOR", "string");
        	this.dsInsert.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SERVICE", "BIGDECIMAL");
        	this.dsInsert.addColumn("NO_CREDIT", "string");
        	this.dsInsert.addColumn("DT_PROOF", "string");
        	this.dsInsert.addColumn("YN_APPR", "string");
        	this.dsInsert.addColumn("CK_OMIT", "string");
        	this.dsInsert.addColumn("CD_TRADE", "string");
        	this.dsInsert.addColumn("NO_SLIP", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("TY_ISSUE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_VATDEPT_ACNT", "string");
        	this.dsUpdate.addColumn("TY_SALEBUY", "string");
        	this.dsUpdate.addColumn("CD_PROOF", "string");
        	this.dsUpdate.addColumn("TY_VATBGJE", "string");
        	this.dsUpdate.addColumn("CD_VATACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_VATVENDOR", "string");
        	this.dsUpdate.addColumn("CD_VATVENDOR", "string");
        	this.dsUpdate.addColumn("DS_VATVENDOR", "string");
        	this.dsUpdate.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SERVICE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("CD_CURRENCY", "string");
        	this.dsUpdate.addColumn("NO_CREDIT", "string");
        	this.dsUpdate.addColumn("DT_PROOF", "string");
        	this.dsUpdate.addColumn("YN_APPR", "string");
        	this.dsUpdate.addColumn("CK_OMIT", "string");
        	this.dsUpdate.addColumn("CD_TRADE", "string");
        	this.dsUpdate.addColumn("NO_SLIP", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("TY_ISSUE", "string");
        	this.dsUpdate.addColumn("NO_VAT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_VAT", "string");

        	//세금계산서 조회용 데이터셋
        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("ISSUE_ID"  , "string");
        	this.dsSelectTax.addColumn("TY_SALEBUY", "string");
        }

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

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT"	, this.ccfCD_SELFACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_SALEBUY"			, (this.rdoTY_SALEBUY.value == "V10" ? "I" : "O"));
        	this.dsSelect.setColumn(0, "DT_FROM"			, this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO"				, this.ctclDT_TO.value);
        	this.dsSelect.setColumn(0, "YN_VATAPPR"			, this.ccboYN_VATAPPR.value);
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT"		, this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_PROOF"			, this.ccfCD_PROOF.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_VENDOR"			, this.ccfCD_VENDOR.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP"			, this.ccfCD_CORP.form.CDTextBox.value);

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
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nRow , "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        	this.dsList.setColumn(nRow , "TY_ISSUE", "E");	//발행구분(전자발행)

        	this.dsList.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if(!this.fnCheckSaveData()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_VATDEPT_ACNT" , this.dsList.getColumn(i, "CD_DEPT_ACNT"));		//발의부서
        				this.dsInsert.setColumn(nrow, "TY_SALEBUY"   	, this.dsList.getColumn(i, "TY_SALEBUY"));			//거래구분
        				this.dsInsert.setColumn(nrow, "TY_VATBGJE"		, this.dsList.getColumn(i, "TY_VATBGJE"));			//매입불공제분코드
        				this.dsInsert.setColumn(nrow, "CD_VATACCOUNT"	, this.dsList.getColumn(i, "CD_ACCOUNT"));			//계정코드
        				this.dsInsert.setColumn(nrow, "TY_VATVENDOR"	, this.dsList.getColumn(i, "TY_VENDOR"));			//거래처구분
        				this.dsInsert.setColumn(nrow, "CD_VATVENDOR"	, this.dsList.getColumn(i, "CD_VENDOR"));			//거래처코드
        				this.dsInsert.setColumn(nrow, "DS_VATVENDOR"	, this.dsList.getColumn(i, "DS_VENDOR"));			//거래처명
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY"		, this.dsList.getColumn(i, "AM_SUPPLY"));			//공급가
        				this.dsInsert.setColumn(nrow, "AM_VAT"			, this.dsList.getColumn(i, "AM_VAT"));				//부가세
        				this.dsInsert.setColumn(nrow, "AM_SERVICE"		, this.dsList.getColumn(i, "AM_SERVICE"));			//봉사료
        				this.dsInsert.setColumn(nrow, "NO_CREDIT"		, nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "NO_CREDIT"),""),"-",""));			//신용카드번호
        				this.dsInsert.setColumn(nrow, "DT_PROOF"		, this.dsList.getColumn(i, "DT_PROOF"));			//증빙일자
        				this.dsInsert.setColumn(nrow, "YN_APPR"			, "Y");	//승인여부
        				this.dsInsert.setColumn(nrow, "CK_OMIT"			, this.dsList.getColumn(i, "CK_OMIT"));				//누락여부
        				this.dsInsert.setColumn(nrow, "DS_REM"			, this.dsList.getColumn(i, "DS_REM"));				//적요
        				this.dsInsert.setColumn(nrow, "TY_ISSUE"		, this.dsList.getColumn(i, "TY_ISSUE"));			//발행구분
        				this.dsInsert.setColumn(nrow, "CD_PROOF"		, this.dsList.getColumn(i, "CD_PROOF"));			//증빙코드
        				this.dsInsert.setColumn(nrow, "ID_INSERT"   	, this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_VAT" 			, this.dsList.getColumn(i, "NO_VAT"));				//부가세번호
        				this.dsUpdate.setColumn(nrow, "CD_VATDEPT_ACNT" , this.dsList.getColumn(i, "CD_DEPT_ACNT"));		//발의부서
        				this.dsUpdate.setColumn(nrow, "TY_SALEBUY"   	, this.dsList.getColumn(i, "TY_SALEBUY"));			//거래구분
        				this.dsUpdate.setColumn(nrow, "TY_VATBGJE"		, this.dsList.getColumn(i, "TY_VATBGJE"));			//매입불공제분코드
        				this.dsUpdate.setColumn(nrow, "CD_VATACCOUNT"	, this.dsList.getColumn(i, "CD_ACCOUNT"));			//계정코드
        				this.dsUpdate.setColumn(nrow, "TY_VATVENDOR"	, this.dsList.getColumn(i, "TY_VENDOR"));			//거래처구분
        				this.dsUpdate.setColumn(nrow, "CD_VATVENDOR"	, this.dsList.getColumn(i, "CD_VENDOR"));			//거래처코드
        				this.dsUpdate.setColumn(nrow, "DS_VATVENDOR"	, this.dsList.getColumn(i, "DS_VENDOR"));			//거래처명
        				this.dsUpdate.setColumn(nrow, "AM_SUPPLY"		, this.dsList.getColumn(i, "AM_SUPPLY"));			//공급가
        				this.dsUpdate.setColumn(nrow, "AM_VAT"			, this.dsList.getColumn(i, "AM_VAT"));				//부가세
        				this.dsUpdate.setColumn(nrow, "AM_SERVICE"		, this.dsList.getColumn(i, "AM_SERVICE"));			//봉사료
        				this.dsUpdate.setColumn(nrow, "NO_CREDIT"		, nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "NO_CREDIT"),""),"-",""));			//신용카드번호
        				this.dsUpdate.setColumn(nrow, "DT_PROOF"		, this.dsList.getColumn(i, "DT_PROOF"));			//증빙일자
        				this.dsUpdate.setColumn(nrow, "YN_APPR"			, this.dsList.getColumn(i, "YN_VATAPPR"));			//승인여부
        				this.dsUpdate.setColumn(nrow, "CK_OMIT"			, this.dsList.getColumn(i, "CK_OMIT"));				//누락여부
        				this.dsUpdate.setColumn(nrow, "DS_REM"			, this.dsList.getColumn(i, "DS_REM"));				//적요
        				this.dsUpdate.setColumn(nrow, "TY_ISSUE"		, this.dsList.getColumn(i, "TY_ISSUE"));			//발행구분
        				this.dsUpdate.setColumn(nrow, "CD_PROOF"		, this.dsList.getColumn(i, "CD_PROOF"));			//증빙코드
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"   	, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_VAT"  , this.dsList.getColumn(i, "NO_VAT"));		//부가세번호
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.rdoTY_SALEBUY.value)) {
        		this.gfnAlert("거래구분은 필수입니다.");
        		this.rdoTY_SALEBUY.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclDT_FROM.value)){
        		this.gfnAlert("증빙기간(시작일)은 필수입니다.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclDT_TO.value)){
        		this.gfnAlert("증빙기간(종료일)은 필수입니다.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) <= -1){
        		this.gfnAlert("증빙기간의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);
        		break;
        		case "combo":
        			if(this.dsTY_VENDOR.rowcount > 0){
        				var nRow = this.dsTY_VENDOR.insertRow(0);
        				this.dsTY_VENDOR.setColumn(nRow, "CD_CODE", "A");
        				this.dsTY_VENDOR.setColumn(nRow, "DS_CODE", "전체");
        			}

        			//this.fnSetComboData(this.dsV10, "I");	//매입
        			//this.fnSetComboData(this.dsV11, "O");	//매출

        			//증빙선택 컬럼 콤보박스 데이터 바인딩
        // 			var colCD_PROOF = this.dxGrid.getBindCellIndex("body", "CD_PROOF");
        // 			this.dxGrid.setCellProperty("body", colCD_PROOF, "combocodecol", "CD_CODE");
        // 			this.dxGrid.setCellProperty("body", colCD_PROOF, "combodatacol", "DS_CODE");
        // 			this.dxGrid.setCellProperty("body", colCD_PROOF, "combodataset", "dsCD_PROOF");
        // 			this.dxGrid.setCellProperty("body", colCD_PROOF, "edittype", "expr:(TY_SALEBUY==null || TY_SALEBUY=='') ? 'none' : 'combo'");

        		break;
        		case "save" :
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "selectTax" :
        			if (errorCode == 0) {
        				if(this.dsTax.rowcount > 0){
        				    var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        					var url = this.gfnGetConfig("DH" , "TAX_URL");
        					url = url+"TaxView/view.do?";
        // 					url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        // 					url += "&status="+this.dsTax.getColumn(0, "STATUS");
        // 					url += "&burks=" +this.dsTax.getColumn(0, "BUKRS");

        				url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        				url += "&status="+this.dsTax.getColumn(0, "STATUS");
        				url += "&type=dtv3"
        				url += "&issueid="+issueId
        				url += "&aspcode=" +this.dsTax.getColumn(0, "ASP_CODE");

        					window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        				}else{
        					this.gfnAlert("세금계산서 정보가 없습니다.");
        				}
        			}else{
        				this.gfnAlert(errorMsg);
        			}
        		break;

        	}
        }

        //증빙선택 콤보 데이터셋에 데이터 담기
        this.fnSetComboData = function (cbData, gubun)
        {
        	for(var i=0;i<cbData.rowcount;i++){
        		var nRow = this.dsCD_PROOF.addRow();
        		this.dsCD_PROOF.setColumn(nRow, "GUBUN"  , gubun);
        		this.dsCD_PROOF.setColumn(nRow, "CD_CODE", cbData.getColumn(i, "CD_CODE"));
        		this.dsCD_PROOF.setColumn(nRow, "DS_CODE", cbData.getColumn(i, "DS_CODE"));
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_SELFACNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.ccfCD_VENDOR.form.fnCodeFindClear();

        		break;

        		case "ccfCD_SELFACNT":	//세무단위
        			this.ccfCD_DEPT.form.fnCodeFindClear();

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
        		case "ccfCD_PROOF" :
        			if (arrData.length > 0) {
        				var strCdCode = "";
        				var strDsCode = "";
        				for(var r = 0; r < arrData.length; r++) {
        					strCdCode += arrData[r]["CD_CODE"]+",";
        					strDsCode += arrData[r]["DS_CODE"]+",";
        				}

        				strCdCode = strCdCode.substr(0,strCdCode.length-1);
        				strDsCode = strDsCode.substr(0,strDsCode.length-1);

        				this.ccfCD_PROOF.form.CDTextBox.set_value(strCdCode);
        				this.ccfCD_PROOF.form.DSTextBox.set_value(strDsCode);

        			}
        			break;
        	}
        	return true;
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var idSabun = this.AuthClient.ID_USER;
        	var grSerch = this.FormInfo.GR_SEARCH;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        	case "ccfCD_SELFACNT": // 세무단위

        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		break;

        	case "ccfCD_DEPT" :
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if (!this.gfnIsNull(cdCorp)) {
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , idSabun);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , grSerch);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);


        // 		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}

        		break;
        	case "ccfCD_PROOF" :
        		var tySaleBuy = this.rdoTY_SALEBUY.value;	//거래구분
        		dsUserParam.setColumn(nrow, "DS_ETC1" , "");
        		dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        		dsUserParam.setColumn(nrow, "CD_TYPE"	, tySaleBuy);					//공통분류코드
        		//dsUserParam.setColumn(nrow, "CD_TYPE"	, (tySaleBuy == "I" ? "V10" : "V11"));		//공통분류코드
        		break;
        	case "ccfCD_VENDOR" :
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	}

        	return true;
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	var cdSelfAcnt = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT");
        	var tySalebuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");
        	var idSabun = this.AuthClient.ID_USER;
        	var grSerch = this.FormInfo.GR_SEARCH;

        	switch(id) {

        		case "DHX_CFSELFACNT": // 세무단위
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		case "DHX_CFACNTUNIT" :	//귀속부서


        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , idSabun);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , grSerch);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        			break;

        		case "DHX_CFACCOUNT" :	//계정
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        			break;

        		case "DHX_CFALLVENDOR_CODEFIND":	//거래처코드
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			break;

        		case "DZX_CFCODE_COM_V10":	//증빙코드
        			dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE" , "V10");
        			break;
        		case "DZX_CFCODE_COM_V11":	//증빙코드
        			dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE" , "V11");
        			break;

        		case "DHX_COMMON_CODEFIND_SELECT" :
        			dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        			dsUserParam.setColumn(nrow, "DS_ETC1" , "XXX");
        			dsUserParam.setColumn(nrow, "CD_TYPE" , (tySalebuy == "I" ? "V10":"V11"));

        			break;

        		case "DHX_CFACNTUNIT_BY_SELFACNT" :	//귀속부서
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				return false;
        			}

        			if(this.gfnIsNull(cdSelfAcnt)){
        				this.gfnAlert("세무단위를 먼저 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", cdSelfAcnt);

        			break;

        		case "DHX_CFETC_CODEFIND" :	//거래처
        			if(this.gfnIsNull(cdSelfAcnt)){
        				this.gfnAlert("세무단위를 먼저 선택하세요.");
        				return false;
        			}
        			var tyVendor = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR");	//거래처구분

        			if(this.gfnIsNull(tyVendor)){
        				this.gfnAlert("거래처구분을 먼저 선택하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_VENDOR"   , "");
        			dsUserParam.setColumn(nrow, "TY_VENDOR"   , tyVendor);
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , cdCorp);
        			break;

        		case "DFX_CFCARD_CODEFIND" :	//신용카드

        			var cdProof = this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF");	//증빙선택
        			if(this.gfnIsNull(cdProof)){
        				this.gfnAlert("증빙선택을 먼저 입력하세요.");
        				return false;
        			}

        			var TY_SALEBUY = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분

        			if(this.gfnIsNull(TY_SALEBUY)){
        				this.gfnAlert("거래구분을 먼저 선택하세요.");
        				return false;
        			}

        			if(this.gfnIsNull(cdSelfAcnt)){
        				this.gfnAlert("세무단위를 먼저 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT"     , "");
        			dsUserParam.setColumn(nrow, "CD_SUABUN"   , "");
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , cdCorp);
        			break;
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFSELFACNT":	//세무단위

        			this.dsList.setColumn(rowPos, "CD_DEPT_ACNT", "");
        			this.dsList.setColumn(rowPos, "DS_DEPT_ACNT", "");
        			this.dsList.setColumn(rowPos, "CD_VENDOR", "");
        			this.dsList.setColumn(rowPos, "DS_VENDOR", "");
        			this.dsList.setColumn(rowPos, "NO_CREDIT", "");
        			this.dsList.setColumn(rowPos, "DS_CREDIT", "");

        			if (arrData.length > 0) {
        				this.dsList.setColumn(rowPos, "CD_CORP", arrData[0]["CD_CORP"]);
        			}

        			break;

        		case "DHX_COMMON_CODEFIND_SELECT":	//증빙선택
        		case "DZX_CFCODE_COM_V10":	//증빙선택
        		case "DZX_CFCODE_COM_V11":	//증빙선택

        			if (arrData.length > 0) {

        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(rowPos, "VAT_RATE"  , arrData[0]["DS_ETC2"]);
        				this.dsList.setColumn(rowPos, "YN_VATBGJE", (arrData[0]["DS_ETC3"] == "Y" ? "Y" : "N"));

        				this.dsList.setColumn(rowPos, "NO_CREDIT", "");
        				this.dsList.setColumn(rowPos, "DS_CREDIT", "");
        				this.dsList.setColumn(rowPos, "TY_VATBGJE", "");

        				var cdCode = arrData[0]["CD_CODE"];
        				//매입일 경우
        				if(this.dsList.getColumn(rowPos, "TY_SALEBUY") == "I"){
        					if(cdCode == "16" || cdCode == "17" || cdCode == "18" || cdCode == "19"){
        						this.fnSetNoCreditCol("ADD");
        					}else if(cdCode == "22"){	//현금영수증
        						this.fnSetNoCreditCol("DEL");
        					}
        				}

        				//공급가액이 있을경우
        				if(!this.gfnIsNull(this.dsList.getColumn(rowPos, "AM_SUPPLY"))){
        					var amSupply = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_SUPPLY"), 0);

        					this.fnVatCal(amSupply);

        					var amVat = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_VAT"), 0);
        					this.dsList.setColumn(rowPos, "AM_TOTAL", amSupply + amVat);
        				}
        				this.dsList.set_enableevent(true);
        			}
        			break;
         	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colNm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = this.dxGrid.getBindDataset();
        	var changFalg = true;
        	switch(colNm) {
        		case "CD_PROOF" : //증빙
        		case "DS_PROOF" : //증빙
        			var CD_CODEFIND = "DZX_CFCODE_COM"; // 관리ID
        			var NM_CODEFIND = (objDs.getColumn(row, "TY_SALEBUY") == "I") ? "DZX_CFCODE_COM_V10" : "DZX_CFCODE_COM_V11";
        			//증빙코드(CD_PROOF), 증빙명칭(DS_PROOF)
        			this.dxGrid.usCodefindInfo["CD_PROOF"].CD_CODEFIND = "DZX_CFCODE_COM";	// 관리ID
        			this.dxGrid.usCodefindInfo["CD_PROOF"].NM_CODEFIND = NM_CODEFIND;	// 식별ID
        			this.dxGrid.usCodefindInfo["DS_PROOF"].CD_CODEFIND = "DZX_CFCODE_COM";
        			this.dxGrid.usCodefindInfo["DS_PROOF"].NM_CODEFIND = NM_CODEFIND;

        			//changFalg = (objDs.getColumn(row, "CD_CHANGE") == "02") ? false : true;
        			changFalg = true;

        			break;
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colNm);
        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY") == "Y"){
        		//return false;
        		changFalg = false;
        	}

        	// 마감일자
        	if(!this.gfnIsNull(objDs.getColumn(row, "YM_MAGAM"))){
        		changFalg = false;
        	}

        	if(changFalg){
        		return true;
        	}else{
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE"  , "string");
        	this.dsCombo.addColumn("DS_ETC1"  , "string");

        	this.dsComboV10 = new Dataset();
        	this.dsComboV10.addColumn("CD_SYSTEM", "string");
        	this.dsComboV10.addColumn("CD_TYPE"  , "string");

        	this.dsComboV11 = new Dataset();
        	this.dsComboV11.addColumn("CD_SYSTEM", "string");
        	this.dsComboV11.addColumn("CD_TYPE"  , "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "A02");
        	this.dsCombo.setColumn(0, "DS_ETC1"  , "Y");

        	this.dsComboV10.addRow();
        	this.dsComboV10.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsComboV10.setColumn(0, "CD_TYPE"  , "V10");

        	this.dsComboV11.addRow();
        	this.dsComboV11.setColumn(0, "CD_SYSTEM", "DH");

        	this.dsComboV11.setColumn(0, "CD_TYPE"  , "V11");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo comboV10=dsComboV10 comboV11=dsComboV11";
        	var outData     = "dsTY_VENDOR=combo0 dsV10=comboV100 dsV11=comboV110";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
        };

        //거래구분 변경 이벤트
        this.divSearch_rdoTY_SALEBUY_onitemchanged = function(obj,e)
        {
        // 	trace("거래구분 변경 이벤트 divSearch_rdoTY_SALEBUY_onitemchanged");
        //
        // 	this.ccfCD_PROOF.CodeFindName = "CF_CODE_DH_"+e.postvalue;
        //
        // 	//코드파인더 클리어
         	this.ccfCD_PROOF.form.fnCodeFindClear();
        };


        //부가세 상세 조회
        this.fnVatDetail = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var param = {};
        	param.P_GUBUN    = "VATCONTROL";
        	param.P_CD_SLIP  = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");	//전표번호
        	param.P_NO_VAT   = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");	//부가세번호

        	var sPopupCallBack = "fnVatRegPopupCallback";

        	this.gfnFormOpenNonAuth("DHA", "DHA_ISSUEVATDLG", sPopupCallBack, param, 550, 620);

        };

        //부가세 팝업 콜백
        this.fnVatRegPopupCallback = function(svcID, val) {

         	if(!this.gfnIsNull(val)) {
        	}
        };

        //전표조회 버튼
        this.fnSlipSelect = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		//this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))){
        		this.gfnAlert("발의번호를 확인하세요.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = this.dsList.getColumn(this.dsList.rowposition, "YN_VATAPPR")  == "미승인" ? "U" : "S";
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        this.dxGrid_CellDBClick = function(obj,e)
        {
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colName == "CD_TRADE" || colName == "CD_SLIP"){
        		this.fnSlipSelect();
        	}

        	if(colName == "ISSUE_ID"){
        		this.fnTaxView();
        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	if(e.columnid == "TY_SALEBUY"){	//거래구분
        		obj.setColumn(e.row, "CD_PROOF", "");	//증빙선택 초기화
        		obj.setColumn(e.row, "DS_PROOF", "");	//증빙선택 초기화
        		obj.setColumn(e.row, "TY_VATBGJE", "");	//불공제사유 초기화
        	}
        // 	if(e.columnid == "TY_VENDOR"){	//거래처구분
        //
        // 		obj.setColumn(e.row, "CD_VENDOR", "");
        // 		obj.setColumn(e.row, "DS_VENDOR", "");
        // 		obj.setColumn(e.row, "NO_SJC", "");
        // 	}
        	if(e.columnid == "DS_PROOF"){	//증빙선택
        		obj.setColumn(e.row, "VAT_RATE", "");

        		obj.setColumn(e.row, "NO_CREDIT", "");
        		obj.setColumn(e.row, "DS_CREDIT", "");
        		obj.setColumn(e.row, "TY_VATBGJE", "");
        		//부가세 계산
        		this.fnVatCal(nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY"), 0));
        	}
        	if(e.columnid == "AM_SUPPLY"){	//공급가액
        		//부가세 계산
        		this.fnVatCal(nexacro.toNumber(e.newvalue, 0));

        		var amSupply = nexacro.toNumber(obj.getColumn(e.row, "AM_SUPPLY"), 0);
        		var amVat = nexacro.toNumber(obj.getColumn(e.row, "AM_VAT"), 0);
        		obj.setColumn(e.row, "AM_TOTAL", amSupply + amVat);
        	}

        	if(e.columnid == "AM_VAT"){	//부가세
        		//합계 계산
        		var amSupply = nexacro.toNumber(obj.getColumn(e.row, "AM_SUPPLY"), 0);
        		obj.setColumn(e.row, "AM_TOTAL", amSupply + nexacro.toNumber(e.newvalue, 0));
        	}
        }

        //
        this.dsList_CanColumnChange = function(obj,e)
        {
        //	trace("columnid :: "+e.columnid);

        // 	if(e.columnid == "AM_SUPPLY" || e.columnid == "AM_VAT"){	//공급가액
        // 		var amSupply = nexacro.toNumber((e.columnid == "AM_SUPPLY" ? e.newvalue : obj.getColumn(e.row, "AM_SUPPLY")),0);
        // 		var amVat    = nexacro.toNumber((e.columnid == "AM_VAT" ? e.newvalue : obj.getColumn(e.row, "AM_VAT")),0);
        //
        // 		if(amSupply < amVat){
        // 			this.gfnAlert("부가세액은 공급가액보다 클수 없습니다.");
        // 			return false;
        // 		}
        // 	}
        };

        this.fnSetNoCreditCol = function(type)
        {
        	var arrItem = [];
        	var arrCodefind = this.dxGrid.usCodefind;
        	arrCodefind.forEach(function(item, index, arrary) {
        		if(item != "NO_CREDIT"){
        			arrItem.push(item);
        		}
        	});

        	if(type == "ADD"){
        		arrItem.push("NO_CREDIT");
        	}

        	this.dxGrid.usCodefind = arrItem;
        	//trace("usCodefind :: "+this.dxGrid.usCodefind);
        };

        //부가세 계산
        this.fnVatCal = function (amSupply)
        {

        	var tySaleBuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");	//거래구분
        	var cdProof   = this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF");		//증빙선택
        	var vatRate   = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "VAT_RATE") ,0);
        	var ynVatBgje = this.dsList.getColumn(this.dsList.rowposition, "YN_VATBGJE");	//불공제여부

        // 	var amVat = (vatRate == 0 ? 0 : nexacro.floor(amSupply / vatRate));
        // 	this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);

        	//trace("## vatRate :: "+vatRate);

        // 	if(ynVatBgje == "Y"){
        // 		var calAmSupply = nexacro.round(amSupply / vatRate, 0);
        // 		var amVat = nexacro.floor(amSupply - calAmSupply, 0);
        //
        // 		trace("## 불공제 calAmSupply :: "+calAmSupply);
        // 		trace("## 불공제 amVat :: "+amVat);
        //
        // 		this.dsList.setColumn(this.dsList.rowposition, "AM_SUPPLY", calAmSupply);
        // 		this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        // 	}else {
        		//var amVat = (vatRate == 0 ? 0 : nexacro.floor(amSupply / vatRate));
        		//this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        	//}


        	//this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        /*	if(tySaleBuy == "I"){	//매입

        		if(cdProof == "10" || cdProof == "11" || cdProof == "16" || cdProof == "17" || cdProof == "21"){
        			// 10%
        			var amVat = nexacro.floor(amSupply / 10);
        			//var amVat = nexacro.floor(amSupply / vatRate);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        		}else if(cdProof == "13" || cdProof == "19"){
        			//1.1
        			var calAmSupply = nexacro.round(amSupply / 1.1, 0);
        			//var calAmSupply = nexacro.round(amSupply / vatRate, 0);
        			var amVat = nexacro.floor(amSupply - calAmSupply);

        			this.dsList.setColumn(this.dsList.rowposition, "AM_SUPPLY", calAmSupply);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);

        		}else{
        			//부가세 0
        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", 0);
        		}

        	}else if(tySaleBuy == "O"){	//매출
        		if(cdProof == "50" || cdProof == "55"){
        			// 10%
        			var amVat = nexacro.floor(amSupply / 10);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        		}else{
        			//0
        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", 0);
        		}
        	}else{
        		//0
        		this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", 0);
        	}
        	*/

        };

        this.dsList_RowPoschanged = function(obj,e)
        {
        	if(obj.getColumn(e.newrow, "TY_SALEBUY") == "I"){
        		if(obj.getColumn(e.newrow, "CD_PROOF") == "16" || obj.getColumn(e.newrow, "CD_PROOF") == "17" || obj.getColumn(e.newrow, "CD_PROOF") == "18" || obj.getColumn(e.newrow, "CD_PROOF") == "19"){
        			this.fnSetNoCreditCol("ADD");
        		}else if(obj.getColumn(e.newrow, "CD_PROOF") == "22"){	//현금영수증
        			this.fnSetNoCreditCol("DEL");
        		}
        	}
        };

        //데이터 체크
        this.fnCheckSaveData = function ()
        {
        	var sMsg = " 필수입력값입니다.\n";
        	var strRowMsg = "";
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.gfnGetFlag(this.dsList, i) == "I" || this.gfnGetFlag(this.dsList, i) == "U"){	//삭제 데이터가 아닌경우
        			var cdProof    = this.dsList.getColumn(i, "CD_PROOF");		//증빙코드
        			var tySaleBuy  = this.dsList.getColumn(i, "TY_SALEBUY");	//거래구분
        			var vatRate  = this.dsList.getColumn(i, "VAT_RATE");		//부가세율

        			if(this.gfnNvl(vatRate,0) > 0){
        				if(nexacro.toNumber(this.dsList.getColumn(i, "AM_VAT"), 0) == 0){
        					strRowMsg += (i + 1) + "열: [" + "부가세" + "]"+sMsg;
        				}
        			}

        // 			if(tySaleBuy == "I"){	//매입
        // 				if(cdProof == "10" || cdProof == "11" || cdProof == "15" || cdProof == "17" ||
        // 				   cdProof == "18" || cdProof == "19"){
        // 				   if(nexacro.toNumber(this.dsList.getColumn(i, "AM_VAT"), 0) == 0){
        // 						strRowMsg += (i + 1) + "열: [" + "부가세" + "]"+sMsg;
        // 					}
        // 				}
        // 			}else if(tySaleBuy == "O"){	//매출
        // 				if(cdProof == "50"){
        // 				   if(nexacro.toNumber(this.dsList.getColumn(i, "AM_VAT"), 0) == 0){
        // 						strRowMsg += (i + 1) + "열: [" + "부가세" + "]"+sMsg;
        // 					}
        // 				}
        // 			}
        		}
        	}

        	if(!this.gfnIsNull(strRowMsg)){
        		this.gfnAlert(strRowMsg);
        		return false;
        	}
        	return true;
        };

        //마감
        this.fnMagam = function (obj,e)
        {
        	this.vProcType = "CREATE";
        	if(obj.name == "btnExt_MagamCancel"){
        		this.vProcType = "CANCEL";
        	}

        	var param = {};
        	param.P_PROC_TYPE = this.vProcType;
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_SELFACNT = this.ccfCD_SELFACNT.form.CDTextBox.value;
        	param.DS_SELFACNT = this.ccfCD_SELFACNT.form.DSTextBox.value;

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHV_VATCONTROLDLG", "fnMagamCallback", param, 480, 300);
        };

        // 팝업 콜백
        this.fnMagamCallback = function(svcID, val) {
         	if(!this.gfnIsNull(val)) {	//정상처리 되었으면 재조회 처리
        		this.FormBtns.Select.click();
        	}
        };

        //세금계산서 보기
        this.fnTaxView = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		return;
        	}

        	var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        	var tySalebuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("전자세금계산서번호는 필수입니다.");
        		return;
        	}

        	//세금계산서 정보 조회
        	this.fnSelectTax(issueId, tySalebuy);
        };

        //세금계산서 정보 조회
        this.fnSelectTax = function (issueId, tySalebuy)
        {
        	this.dsSelectTax.clearData();
        	var nRow = this.dsSelectTax.addRow();

        	this.dsSelectTax.setColumn(nRow, "ISSUE_ID"  , issueId);		//세금계산서번호
        	this.dsSelectTax.setColumn(nRow, "TY_SALEBUY", tySalebuy);		//매입/매출구분

        	var strSvcId    = "selectTax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectTax=dsSelectTax";
        	var outData     = "dsTax=selectTax0";
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.rdoTY_SALEBUY.addEventHandler("onitemchanged",this.divSearch_rdoTY_SALEBUY_onitemchanged,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DHV_VATCONTROL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
