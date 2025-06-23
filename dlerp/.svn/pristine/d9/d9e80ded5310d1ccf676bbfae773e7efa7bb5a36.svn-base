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
            this.set_titletext("자산이동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GETDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GET\" type=\"STRING\" size=\"256\"/><Column id=\"YR_LIFE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_GET\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GETSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QN_GET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MAGDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAKEDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_DEPFINAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAKEDEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">t_select</Col><Col id=\"SP\">DHNPR_ASSETMOVE_SELECT</Col></Row><Row><Col id=\"TARGET\">l_select</Col><Col id=\"SP\">DHNPR_ASSETMOVE_SELECT01</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETMOVE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_ASSETMOVE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_ASSETMOVE_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_AUTOSLIPX</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_ACASSET\"/><Col id=\"CD_ASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrcCall", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TM_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_CONS","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staTY_CONS:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACASSET","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_ACASSET:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CONS00","0.0","staTY_CONS:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("자산번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ASSET","staTY_CONS00:0.0","staTY_CONS:10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFASSET_BY_ACASSET");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("취득정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","170","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("자산내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT","staTITLE:-1260","staTITLE:5","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","staDS_CONTENT:-1","staDS_CONTENT:-27",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT01","staDS_CONTENT:-110","staDS_CONTENT:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT02","staTITLE:-665","staTITLE:31","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("취득가액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT04","staDS_CONTENT02:-120","staDS_CONTENT02:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("취득일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT06","staDS_CONTENT01:-110","staDS_CONTENT01:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("취득부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT07","staTITLE00:-1260","staTITLE00:5","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("최종변동일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT12","staTITLE00:-665","staTITLE00:5","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("최종변동내역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","staDS_CONTENT01:-1","staDS_CONTENT01:-27","488","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","staDS_CONTENT06:-1","staDS_CONTENT06:-27","488","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","staDS_CONTENT02:-1","staDS_CONTENT02:-27",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","staDS_CONTENT04:-1","staDS_CONTENT04:-27",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","staDS_CONTENT07:-1","staDS_CONTENT07:-27","488","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg09","staDS_CONTENT12:-1","staDS_CONTENT12:-27",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT00","staDS_CONTENT06:-110","staDS_CONTENT06:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("취득방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT03","staDS_CONTENT00:-110","staDS_CONTENT00:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("내용연수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT05","staDS_CONTENT04:-120","staDS_CONTENT04:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("취득상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT08","staDS_CONTENT05:-120","staDS_CONTENT05:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("취득수량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","staDS_CONTENT00:-1","staDS_CONTENT00:-27","488","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","staDS_CONTENT03:-1","staDS_CONTENT03:-27","488","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","staDS_CONTENT05:-1","staDS_CONTENT05:-27",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","staDS_CONTENT08:-1","staDS_CONTENT08:-27",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_CORP","staDS_CONTENT:5","staDS_CONTENT:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP","edtCD_CORP:5","edtCD_CORP:-20","275","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_ASSETINFO","staDS_CONTENT01:5","staDS_CONTENT01:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ASSETINFO","edtCD_ASSETINFO:5","edtCD_ASSETINFO:-20","275","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_GETDEPT","staDS_CONTENT06:5","staDS_CONTENT06:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_GETDEPT","edtCD_GETDEPT:5","edtCD_GETDEPT:-20","275","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_GET","staDS_CONTENT00:5","staDS_CONTENT00:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtYR_LIFE","staDS_CONTENT03:5","staDS_CONTENT03:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_GETSTATE","staDS_CONTENT05:5","staDS_CONTENT05:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_CHANGE","staDS_CONTENT07:5","staDS_CONTENT07:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_CHANGE","staDS_CONTENT12:5","staDS_CONTENT12:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","240",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_GET","staDS_CONTENT02:5","64","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_GET","staDS_CONTENT08:5","142","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GET","staDS_CONTENT04:5","90","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACASSET.form.CDTextBox","value","dsSearch","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ASSET.form.CDTextBox","value","dsSearch","CD_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ACASSET.form.DSTextBox","value","dsSearch","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ASSET.form.DSTextBox","value","dsSearch","DS_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtCD_CORP","value","dsTable","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_CORP","value","dsTable","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtCD_ASSETINFO","value","dsTable","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtDS_ASSETINFO","value","dsTable","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtCD_GETDEPT","value","dsTable","CD_GETDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtDS_GETDEPT","value","dsTable","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtTY_GET","value","dsTable","TY_GET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtYR_LIFE","value","dsTable","YR_LIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.mskAM_GET","value","dsTable","AM_GET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtTY_GETSTATE","value","dsTable","TY_GETSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.mskQN_GET","value","dsTable","QN_GET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.edtDT_CHANGE","value","dsTable","DT_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.edtCD_CHANGE","value","dsTable","CD_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctclDT_GET","value","dsTable","DT_GET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETMOVE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	//화면 넘어올 때
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().CD_ASSET)) {
        		//법인코드
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        		//자산코드
        		this.dsSearch.setColumn(0, "CD_ACASSET", this.getOwnerFrame().CD_ACASSET);
        		this.dsSearch.setColumn(0, "DS_ACASSET", this.getOwnerFrame().DS_ACASSET);
        		//자산번호
        		this.dsSearch.setColumn(0, "CD_ASSET", this.getOwnerFrame().CD_ASSET);
        		this.dsSearch.setColumn(0, "DS_ASSET", this.getOwnerFrame().DS_ASSET);

        		this.FormBtns.Select.click(true);
        	}else{
        		//법인코드
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	}
        };

        this.fnSetExtendButton = function() {
        	this.btnIssueSlip 	  = this.gfnFormButtonAdd("IssueSlip"	 , "fnIssueSlip"); 			//전표발행
        	this.btnCancelSlip 	  = this.gfnFormButtonAdd("CancelSlip"	 , "fnCancelSlip"); 		//전표취소
        	this.btnViewSlipIn 	  = this.gfnFormButtonAdd("ViewSlipIn"	 , "fnViewSlip"); 			//전입전표조회
        	this.btnViewSlipOut   = this.gfnFormButtonAdd("ViewSlipOut"	 , "fnViewSlip");			//전출전표조회
        	this.btnViewAssetInfo = this.gfnFormButtonAdd("ViewAssetInfo", "fnViewAssetInfo"); 		//자산정보
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ymDepfinal    = "";	//최종감가상각월

        	//조회
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ACASSET = this.divSearch.form.ccfCD_ACASSET;
        	this.ccfCD_ASSET = this.divSearch.form.ccfCD_ASSET;

        	this.edtCD_CORP = this.divData.form.edtCD_CORP;
        	this.edtDS_CORP = this.divData.form.edtDS_CORP;
        	this.edtCD_ASSETINFO = this.divData.form.edtCD_ASSETINFO;
        	this.edtDS_ASSETINFO = this.divData.form.edtDS_ASSETINFO;
        	this.edtCD_GETDEPT = this.divData.form.edtCD_GETDEPT;
        	this.edtDS_GETDEPT = this.divData.form.edtDS_GETDEPT;
        	this.edtTY_GET = this.divData.form.edtTY_GET;
        	this.edtYR_LIFE = this.divData.form.edtYR_LIFE;
        	this.mskAM_GET = this.divData.form.mskAM_GET;
        	this.ctclDT_GET = this.divData.form.ctclDT_GET;
        	this.edtTY_GETSTATE = this.divData.form.edtTY_GETSTATE;
        	this.mskQN_GET = this.divData.form.mskQN_GET;
        	this.edtDT_CHANGE = this.divData.form.edtDT_CHANGE;
        	this.edtCD_CHANGE = this.divData.form.edtCD_CHANGE;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"			, "string");
        	this.dsSelect.addColumn("CD_ASSET"			, "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ASSET"			, "string");
        	this.dsInsert.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsInsert.addColumn("DT_FRTAKE"			, "string");
        	this.dsInsert.addColumn("CD_FRDEPT"			, "string");
        	this.dsInsert.addColumn("AM_GETNATION"		, "BIGDECIMAL");
        	this.dsInsert.addColumn("YN_GET"			, "string");
        	this.dsInsert.addColumn("ID_TRANS"			, "string");
        	this.dsInsert.addColumn("NO_DOC"			, "string");
        	this.dsInsert.addColumn("ID_MAINMAG"		, "string");
        	this.dsInsert.addColumn("ID_SUBMAG"			, "string");
        	this.dsInsert.addColumn("TY_FRDEPT"			, "string");
        	this.dsInsert.addColumn("YN_MULTI"			, "string");
        	this.dsInsert.addColumn("CD_ACASSET"		, "string");
        	this.dsInsert.addColumn("CD_CORP"			, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP"			, "string");
        	this.dsDelete.addColumn("CD_ASSET"			, "string");
        	this.dsDelete.addColumn("NO_SEQ"			, "BIGDECIMAL");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ASSET"			, "string");
        	this.dsUpdate.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("DT_FRTAKE"			, "string");
        	this.dsUpdate.addColumn("CD_FRDEPT"			, "string");
        	this.dsUpdate.addColumn("AM_GETNATION"		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("YN_GET"			, "string");
        	this.dsUpdate.addColumn("ID_TRANS"			, "string");
        	this.dsUpdate.addColumn("NO_DOC"			, "string");
        	this.dsUpdate.addColumn("ID_MAINMAG"		, "string");
        	this.dsUpdate.addColumn("ID_SUBMAG"			, "string");
        	this.dsUpdate.addColumn("TY_FRDEPT"			, "string");
        	this.dsUpdate.addColumn("CD_CORP"			, "string");


        }

        this.fnSetEvent = function() {

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_ASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETMOVE");
        	this.dxGrid.set_selecttype("cell");

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_RowposChanged, this);

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsTable.rowcount > 0) {
        			//최종변동일자
        			this.ymDepfinal = this.gfnNvl(this.dsTable.getColumn(0, "YM_DEPFINAL"), "00000000");

        			this.btnViewAssetInfo.set_enable(true);	//자산정보버튼

        			var rowCnt = this.dsList.rowcount;
        			if(rowCnt > 0){
        				//자산내역 마지막 데이터의 전표번호가 없을경우
        				if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(rowCnt -1, "CD_TRADE_FR")))){
        					this.btnIssueSlip.set_enable(true);
        					this.btnCancelSlip.set_enable(false);
        					this.btnViewSlipIn.set_enable(false);
        					this.btnViewSlipOut.set_enable(false);

        					if(this.dsList.getColumn(rowCnt -1, "YN_GET") == "취득"){
        						this.btnIssueSlip.set_enable(false);
        					}
        				}else{
        					this.btnIssueSlip.set_enable(false);
        					this.btnViewSlipIn.set_enable(true);
        					this.btnViewSlipOut.set_enable(true);

        					//자산 통제 : 자산이 변동 또는 이동된후 최종감가상각월이 이동 또는 변동월과 같거나 크면 전표취소가 불가능하다.
        					if(this.gfnGetDiffMonth(this.dsList.getColumn(rowCnt -1, "DT_FRTAKE").substring(0, 6), this.ymDepfinal) >= 0) {
        						this.btnCancelSlip.set_enable(false);
        					}else{
        						this.btnCancelSlip.set_enable(true);
        					}

        				}
        			}else{
        				this.btnIssueSlip.set_enable(false);
        				this.btnCancelSlip.set_enable(false);
        				this.btnViewSlipIn.set_enable(false);
        				this.btnViewSlipOut.set_enable(false);
        			}

        		} else {
        			this.btnViewAssetInfo.set_enable(false);
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		}

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "issueSlipN"){
        		if (errorCode == 0) {
        			this.fnIssueSlip_callback("Y", true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "issueSlipY"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_ASSET", nexacro.replaceAll(this.dsSearch.getColumn(0, "CD_ASSET"),"-",""));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "t_select=dsSelect l_select=dsSelect";
        	var outData     = "dsTable=t_select0 dsList=l_select0";
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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");

        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "NO_SEQ"	  , 0);
        	this.dsList.setColumn(nrow, "AM_GETNATION", this.dsList.getColumn(0, "AM_GETNATION"));
        	this.dsList.setColumn(nrow, "TY_FRDEPT"	  , "M/H");

        	this.dsList.set_enableevent(true);
        }

        this.fnDelValidation = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_GET") == "취득") {
        		this.gfnAlert("취득여부가 취득인 자료는 삭제할 수 없습니다.");
        		return false;
        	}

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_FR"))) {
        		this.gfnAlert("전표발행된건은 삭제할 수 없습니다.");
        		return false;
        	}

        	return true;
        }

        this.fnDel = function() {
        	if(!this.fnDelValidation()) return;

        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSaveValidate = function() {
        	var strMsg = "";
        	var bInEmpty = true;

        	var cntCdChange = 0;

        	var rowCnt = this.dsList.rowcount;

        	for(var i = 0 ; i < this.dsList.rowcount ; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if(this.gfnIsNull(flag) || flag == "D") {
        			continue;
        		}

        		if(i > 0) {
        			if(this.gfnGetDiffDate(this.dsList.getColumn(i, "DT_FRTAKE"), this.dsList.getColumn(i - 1, "DT_FRTAKE")) >= 0) {
        				strMsg += "최종 전입일자보다 커야합니다.\n";
        				bInEmpty = false;
        			}
        		}

        		if(this.dsList.getColumn(i-1, "CD_FRDEPT") == this.dsList.getColumn(i, "CD_FRDEPT")){
        			strMsg += "전입부서와 전출부서는 달라야합니다\n";
        			bInEmpty = false;
        		}

        		if(!bInEmpty) {
        			this.gfnAlert(strMsg);
        			return bInEmpty;
        		}
        	}
        	return bInEmpty;
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var cdAsset = nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")),"-","");

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ASSET"		, cdAsset);											//자산번호
        				this.dsInsert.setColumn(nrow, "NO_SEQ"			, this.dsList.getColumn(i, "NO_SEQ"));				//순번
        				this.dsInsert.setColumn(nrow, "DT_FRTAKE"		, this.dsList.getColumn(i, "DT_FRTAKE"));			//전입일자
        				this.dsInsert.setColumn(nrow, "CD_FRDEPT"		, this.dsList.getColumn(i, "CD_FRDEPT"));			//전입부서
        				this.dsInsert.setColumn(nrow, "AM_GETNATION"	, this.dsList.getColumn(i, "AM_GETNATION"));		//취득금액
        				this.dsInsert.setColumn(nrow, "YN_GET"			, "N");												//취득여부
        				this.dsInsert.setColumn(nrow, "ID_TRANS"		, this.AuthClient.ID_USER);							//등록자ID
        				this.dsInsert.setColumn(nrow, "NO_DOC"			, this.dsList.getColumn(i, "NO_DOC"));				//문서번호
        				this.dsInsert.setColumn(nrow, "ID_MAINMAG"		, this.dsList.getColumn(i, "ID_MAINMAG"));			//사번
        				this.dsInsert.setColumn(nrow, "ID_SUBMAG"		, this.dsList.getColumn(i, "ID_SUBMAG"));			//사번(부)

        				//부서구분
        				switch(this.dsList.getColumn(i, "TY_FRDEPT")) {
        					case "M/H" :
        						this.dsInsert.setColumn(nrow, "TY_FRDEPT"	, "M");
        						break;
        					case "하자" :
        						this.dsInsert.setColumn(nrow, "TY_FRDEPT"	, "H");
        						break;
        					default :
        						this.dsInsert.setColumn(nrow, "TY_FRDEPT"	, "B");
        				}

        				this.dsInsert.setColumn(nrow, "YN_MULTI"		, "N");												//적요
        				this.dsInsert.setColumn(nrow, "CD_ACASSET"		, "");												//자산코드
        				this.dsInsert.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));			//법인코드

        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ASSET"		, cdAsset);											//자산번호
        				this.dsUpdate.setColumn(nrow, "NO_SEQ"			, this.dsList.getColumn(i, "NO_SEQ"));				//순번
        				this.dsUpdate.setColumn(nrow, "DT_FRTAKE"		, this.dsList.getColumn(i, "DT_FRTAKE"));			//전입일자
        				this.dsUpdate.setColumn(nrow, "CD_FRDEPT"		, this.dsList.getColumn(i, "CD_FRDEPT"));			//전입부서
        				this.dsUpdate.setColumn(nrow, "AM_GETNATION"	, this.dsList.getColumn(i, "AM_GETNATION"));		//취득금액
        				this.dsUpdate.setColumn(nrow, "YN_GET"			, "N");												//취득여부
        				this.dsUpdate.setColumn(nrow, "ID_TRANS"		, this.AuthClient.ID_USER);							//등록자ID
        				this.dsUpdate.setColumn(nrow, "NO_DOC"			, this.dsList.getColumn(i, "NO_DOC"));				//문서번호
        				this.dsUpdate.setColumn(nrow, "ID_MAINMAG"		, this.dsList.getColumn(i, "ID_MAINMAG"));			//사번
        				this.dsUpdate.setColumn(nrow, "ID_SUBMAG"		, this.dsList.getColumn(i, "ID_SUBMAG"));			//사번(부)
        				this.dsUpdate.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));			//법인코드
        				//부서구분
        				switch(this.dsList.getColumn(i, "TY_FRDEPT")) {
        					case "M/H" :
        						this.dsUpdate.setColumn(nrow, "TY_FRDEPT"	, "M");
        						break;
        					case "하자" :
        						this.dsUpdate.setColumn(nrow, "TY_FRDEPT"	, "H");
        						break;
        					default :
        						this.dsUpdate.setColumn(nrow, "TY_FRDEPT"	, "B");
        				}
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_ASSET"		, cdAsset);
        				this.dsDelete.setColumn(nrow, "NO_SEQ"			, this.dsList.getColumn(i, "NO_SEQ"));
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}

        	if(id == "ccfCD_ACASSET") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP"	, "Y");
        	}

        	if(id == "ccfCD_ASSET") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_ACASSET"	, this.dsSearch.getColumn(0, "CD_ACASSET"));
        		dsUserParam.setColumn(nrow, "YN_ISSUED"		, "Y");
        		dsUserParam.setColumn(nrow, "YN_INDISUSE"	, "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if(id == "ccfCD_CORP") {	//법인코드
        		this.ccfCD_ACASSET.form.fnCodeFindClear();
        		this.ccfCD_ASSET.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.dsTable.clearData();
           }
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ASSET"))) {
        		this.ccfCD_ASSET.form.CDTextBox.setFocus();
        		this.gfnAlert("자산번호가 입력되지 않았습니다.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colNm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = this.dxGrid.getBindDataset();

        	//마지막 데이터에 전표번호가 있을경우 수정불가
        	if(!this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowcount-1, "CD_TRADE_FR")))){
        		return false;
        	}
        	//return true;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DHX_CFACNTUNIT_FIXEDASSET") {	//전입부서
        		dsUserParam.setColumn(nrow, "LV_DEPT"		, this.UserInfo.LEVLV_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "YN_SELECT"		, "A");
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.AuthClient.CD_CORP);
        	} else if(id == "DHX_CFIDSABUN1" || id == "DHX_CFIDSABUN2") {	//관리자
         		dsUserParam.setColumn(nrow, "YN_OFFICER", "N");
         		dsUserParam.setColumn(nrow, "CD_CORP"	, this.AuthClient.CD_CORP);		//구분
        	}
        	if(id == "DHX_CFACNTUNIT_T0" || id == "DHX_CFACNTUNIT_FR") {	//전입/전출부서

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.AuthClient.CD_CORP);		//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER" , this.AuthClient.CD_CORP);
        	}

        	return true;
        };

        this.dsList_RowposChanged = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	if(this.gfnIsNull(this.gfnTrim(obj.getColumn(e.newrow, "CD_TRADE_FR"))) && this.gfnIsNull(this.gfnTrim(obj.getColumn(e.newrow, "CD_TRADE_TO")))){
        		this.btnViewSlipIn.set_enable(false);
        		this.btnViewSlipOut.set_enable(false);
        	}

        	if(!this.gfnIsNull(this.gfnTrim(obj.getColumn(e.newrow, "CD_TRADE_FR")))){
        		this.btnViewSlipIn.set_enable(true);
        	}else{
        		this.btnViewSlipIn.set_enable(false);
        	}

        	if(!this.gfnIsNull(this.gfnTrim(obj.getColumn(e.newrow, "CD_TRADE_TO")))){
        		this.btnViewSlipOut.set_enable(true);
        	}else{
        		this.btnViewSlipOut.set_enable(false);
        	}
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(!this.gfnIsNull(flag)){
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.\n저장후 발행하세요.");
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsSearch.getColumn(0, "CD_CORP")))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")))){
        		this.gfnAlert("자산번호는 필수입니다.");
        		this.ccfCD_ASSET.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "YN_GET")) == "취득"){
        		this.gfnAlert("취득자료는 전표발행할 수 없습니다.");
        		this.ccfCD_ASSET.form.CDTextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("자동전표등록을 하시겠습니까?", "fnIssueSlip_callback", "N");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsPrcCall.clearData();
        		var rowPos = this.dsList.rowposition;

        		if (strId == "N")
        		{
        			var nRow = this.dsPrcCall.addRow();

        			tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        			this.dsPrcCall.setColumn(nrow, "CD_ASSET", nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")),"-",""));
        			this.dsPrcCall.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(rowPos, "NO_SEQ"));
        			this.dsPrcCall.setColumn(nrow, "TM_SLIP", tmSlip);
        			this.dsPrcCall.setColumn(nrow, "YN_SLIP", "N");
        			this.dsPrcCall.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsPrcCall.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}else{
        			var nrow = this.dsPrcCall.addRow();
        			this.dsPrcCall.setColumn(nrow, "TM_SLIP", tmSlip);
        			this.dsPrcCall.setColumn(nrow, "CD_ASSET", "");
        			this.dsPrcCall.setColumn(nrow, "NO_SEQ", 0);
        			this.dsPrcCall.setColumn(nrow, "YN_SLIP", strId);
        			this.dsPrcCall.setColumn(nrow, "CD_CORP", cdCorp);
        			this.dsPrcCall.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		}

        		var strSvcId    = "issueSlip" + strId;
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsPrcCall";
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
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(!this.gfnIsNull(flag)){
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.\n저장후 이용하세요.");
        		return;
        	}
        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowcount-1, "CD_TRADE_FR")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.gfnConfirm("자동전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSlipCancel = new Dataset();
        		this.dsSlipCancel.addColumn("CD_TRADE", "string");
        		this.dsSlipCancel.addColumn("CD_CORP", "string");

        		var nRow = this.dsSlipCancel.addRow();
        		var rowPos = this.dsList.rowposition;
        		//처리할 데이터 담기
        		this.dsSlipCancel.setColumn(nRow, "CD_TRADE"   , this.gfnTrim(this.dsList.getColumn(rowPos, "CD_TRADE_FR")));
        		this.dsSlipCancel.setColumn(nRow, "CD_CORP"	   , this.dsSearch.getColumn(0, "CD_CORP"));

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsSlipCancel";
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
        	}
        };

        //전표 조회
        this.fnViewSlip = function (obj,e)
        {
        	var cdTrade = "";
        	if(obj.name == "btnExt_ViewSlipIn") {
        		cdTrade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_FR");
        	}else{
        		cdTrade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_TO");
        	}

        	if (this.gfnIsNull(this.gfnTrim(cdTrade))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG 			= "S";
        	param.strYN_JUNDO_START = "";
        	param.CD_TRADE 		    = cdTrade;
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //자산정보
        this.fnViewAssetInfo = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.dsSearch.getColumn(0, "CD_CORP")))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")))){
        		this.gfnAlert("자산번호는 필수입니다.");
        		this.ccfCD_ASSET.form.CDTextBox.setFocus();
        		return;
        	}

        	var param = {};
        	param.CD_CORP 	 = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP 	 = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ASSET 	 = this.dsSearch.getColumn(0, "CD_ASSET");
        	param.DS_ASSET 	 = this.dsSearch.getColumn(0, "DS_ASSET");
        	param.CD_ACASSET = this.dsTable.getColumn(0, "CD_ACASSET");
        	param.DS_ACASSET = this.dsTable.getColumn(0, "DS_ACASSET");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETREG", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.staTITLE00.addEventHandler("onclick",this.staTITLE00_onclick,this);
            this.divData.form.staDS_CONTENT.addEventHandler("onclick",this.staDS_CONTENT_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETMOVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
