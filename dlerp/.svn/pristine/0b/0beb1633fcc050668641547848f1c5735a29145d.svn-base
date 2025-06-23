(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLB_DLGTRANSFER");
            this.set_titletext("명의변경");
            this.getSetter("maxwidth").set("650");
            this.getSetter("maxheight").set("490");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLBPR_NOMINAL_TRANSFER_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRANSFER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TRANSFER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">개인</Col><Col id=\"CODE\">P</Col></Row><Row><Col id=\"VALUE\">법인</Col><Col id=\"CODE\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"390","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","13","97.42%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("명의변경");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDONG","0","40","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_TRANSFER","0","69","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("변경일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","0","98","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("주민등록번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","127","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","312","127","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDONG:-1","40",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDT_TRANSFER:-1","69","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","staNO_JUMIN:-1","98","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staNO_TEL:-1","127","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","staDS_REMARK:-1","312",null,"70","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:5","317","472","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("250");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","staNO_JUMIN:5","102","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","staBg2:-1","69","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","staTY_CONTRACTOR:-1","69",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TRANSFER","staDT_TRANSFER:5","73","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","staTY_CONTRACTOR:5","74","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","staBg3_00:-1","98","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("계약자명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01","staDS_CONTRACTOR:-1","98",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:4","102",null,"22","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_maxlength("40");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","staBg5:-1","127","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00","staNO_OFFICETEL:-1","127",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staNO_TEL:5","131","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","staNO_OFFICETEL:4","131",null,"22","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","0","156","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00","staNO_MOBILE:-1","156","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","staNO_MOBILE:5","160","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","staBg5_00:-1","156","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00","staDS_EMAIL:-1","156",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:4","160",null,"22","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","185","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_01","staCD_VENDOR:-1","185","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","staBg5_00_01:-1","185","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00","staDS_VENDOR:-1","185",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPTAE","0","214","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_01_00","staDS_UPTAE:-1","214","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","staBg5_00_01_00:-1","214","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00_00","staDS_UPJONG:-1","214",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:5","189","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_maxlength("13");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:5","189","172","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","staDS_UPTAE:5","218","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","staDS_UPJONG:5","218","172","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_DONG","132","44","50","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","192","43","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("동");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FLOOR","217","44","30","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","256","43","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("층");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_HO","282","44","50","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","342","43","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_TRANSFER","0","243","127","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("명의변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6_00","staDS_TRANSFER:-1","243",null,"70","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_TRANSFER","staDS_TRANSFER:5","248","472","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("250");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","39.52%","400","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","400","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.txtDS_REMARK","value","dsData","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtNO_JUMIN","value","dsData","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.rdoTY_CONTRACTOR","value","dsData","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_CONTRACTOR","value","dsData","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtNO_TEL","value","dsData","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_OFFICETEL","value","dsData","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtNO_MOBILE","value","dsData","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_EMAIL","value","dsData","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtDS_UPTAE","value","dsData","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtDS_UPJONG","value","dsData","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.calDT_TRANSFER","value","dsData","DT_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtNO_DONG","value","dsData","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtNO_FLOOR","value","dsData","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtNO_HO","value","dsData","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_TRANSFER","value","dsData","DS_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_DLGTRANSFER.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_ACNTUNIT"	 , this.getOwnerFrame().CD_ACNTUNIT.substr(0, 6));
        	this.dsData.setColumn(0, "TY_GUBUN"		 , this.getOwnerFrame().CD_ACNTUNIT.substr(6, 1));
        	this.dsData.setColumn(0, "NO_CHASU"		 , this.getOwnerFrame().CD_ACNTUNIT.substr(7, 2));
        	this.dsData.setColumn(0, "NO_DONG"		 , this.getOwnerFrame().NO_DONG);
        	this.dsData.setColumn(0, "NO_FLOOR"		 , this.getOwnerFrame().NO_FLOOR);
        	this.dsData.setColumn(0, "NO_HO"		 , this.getOwnerFrame().NO_HO);
        	this.dsData.setColumn(0, "TY_CONTRACTOR" , "P");				//계약구분(개인)
        	this.dsData.setColumn(0, "DT_TRANSFER"	 , this.gfnGetDate()); 	//변경일자

        	var titletxt = "";
        	if(this.gfnIsNull(this.gfnTrim(this.getOwnerFrame().NO_UNIONMEMBER))){
        		titletxt  = this.FormInfo.NM_FORM  +" (";
        		titletxt += this.dsData.getColumn(0, "NO_DONG")  +" 동 ";
        		titletxt += this.dsData.getColumn(0, "NO_FLOOR") +" 층 ";
        		titletxt += this.dsData.getColumn(0, "NO_HO")    +" 호)";
        	}else{
        		titletxt  = this.FormInfo.NM_FORM  +" (" + this.getOwnerFrame().NO_UNIONMEMBER +")";
        	}

        	this.staTITLE.set_text(titletxt);

        	this.calDT_TRANSFER.setFocus();

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
        	this.staTITLE 			= this.divData.form.staTITLE;
        	this.calDT_TRANSFER 	= this.divData.form.calDT_TRANSFER;
        	this.rdoTY_CONTRACTOR 	= this.divData.form.rdoTY_CONTRACTOR;
        	this.txtNO_JUMIN 		= this.divData.form.txtNO_JUMIN;
        	this.txtDS_CONTRACTOR 	= this.divData.form.txtDS_CONTRACTOR;
        	this.txtNO_TEL 			= this.divData.form.txtNO_TEL;
        	this.txtNO_OFFICETEL 	= this.divData.form.txtNO_OFFICETEL;
        	this.txtNO_MOBILE 		= this.divData.form.txtNO_MOBILE;
        	this.txtDS_EMAIL 		= this.divData.form.txtDS_EMAIL;
        	this.txtCD_VENDOR 		= this.divData.form.txtCD_VENDOR;
        	this.txtDS_VENDOR 		= this.divData.form.txtDS_VENDOR;
        	this.txtDS_UPTAE 		= this.divData.form.txtDS_UPTAE;
        	this.txtDS_UPJONG 		= this.divData.form.txtDS_UPJONG;
        	this.txtDS_TRANSFER 	= this.divData.form.txtDS_TRANSFER;
        	this.txtDS_REMARK 		= this.divData.form.txtDS_REMARK;

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
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsInsert.addColumn("TY_GUBUN"		, "string");
        	this.dsInsert.addColumn("NO_CHASU"		, "string");
        	this.dsInsert.addColumn("NO_DONG"		, "string");
        	this.dsInsert.addColumn("NO_FLOOR"		, "string");
        	this.dsInsert.addColumn("NO_HO"			, "string");
        	this.dsInsert.addColumn("DT_TRANSFER"	, "string");
        	this.dsInsert.addColumn("TY_CONTRACTOR"	, "string");
        	this.dsInsert.addColumn("DS_CONTRACTOR"	, "string");
        	this.dsInsert.addColumn("NO_JUMIN"		, "string");
        	this.dsInsert.addColumn("NO_TEL"		, "string");
        	this.dsInsert.addColumn("NO_OFFICETEL"	, "string");
        	this.dsInsert.addColumn("NO_MOBILE"		, "string");
        	this.dsInsert.addColumn("DS_EMAIL"		, "string");
        	this.dsInsert.addColumn("CD_VENDOR"		, "string");
        	this.dsInsert.addColumn("DS_VENDOR"		, "string");
        	this.dsInsert.addColumn("DS_UPJONG"		, "string");
        	this.dsInsert.addColumn("DS_UPTAE"		, "string");
        	this.dsInsert.addColumn("DS_REMARK"		, "string");
        	this.dsInsert.addColumn("DS_TRANSFER"	, "string");
        	this.dsInsert.addColumn("ID_INSERT"		, "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_TRANSFER"))) {
        		this.gfnAlert("변경일자를 입력하지 않았습니다.");
        		this.calDT_TRANSFER.setFocus();
        		return false;
        	}

        	if(this.dsData.getColumn(0, "TY_CONTRACTOR") == "P"){	//개인일경우
        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_JUMIN")))) {
        			this.gfnAlert("주민등록번호를 입력하지 않았습니다.");
        			this.txtNO_JUMIN.setFocus();
        			return false;
        		}

        		if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-","").length != 13) {
        			this.gfnAlert("주민등록번호는 13자리입니다.");
        			this.txtNO_JUMIN.setFocus();
        			return false;
        //		} else {
        // 			공통체크 gfnIsSSN 가 2000년대생 체크로직이 안들어가 있어서 무조건 fasle 가 들어옴
        // 			if(!this.gfnIsSSN(nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-",""))){
        // 				this.gfnAlert("잘못된 주민등록번호입니다.", "fnVaidateCallback");
        //				this.txtNO_JUMIN.setFocus();
        // 				return false;
        // 			}
        		}

        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "DS_CONTRACTOR")))) {
        			this.gfnAlert("계약자성명을 입력하지 않았습니다.");
        			this.txtDS_CONTRACTOR.setFocus();
        			return false;
        		}
        	}else{
        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "CD_VENDOR")))) {
        			this.gfnAlert("사업자등록번호를 입력하지 않았습니다.");
        			this.txtCD_VENDOR.setFocus();
        			return false;
        		}

        		if(!this.gfnIsBzIdNo(nexacro.replaceAll(this.dsData.getColumn(0, "CD_VENDOR"),"-",""))){
        			this.gfnAlert("잘못된 사업자등록번호입니다.");
        			this.txtCD_VENDOR.setFocus();
        			return false;
        		}

        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "DS_VENDOR")))) {
        			this.gfnAlert("상호를 입력하지 않았습니다.");
        			this.txtDS_VENDOR.setFocus();
        			return false;
        		}
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_TEL"))) &&
        	    this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_OFFICETEL"))) &&
        		this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_MOBILE")))) {
        		this.gfnAlert("전화번호를 입력하지 않았습니다.");
        		return false;
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_TEL")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_TEL"),"-",""),")",""))){
        			this.gfnAlert("자택 전화번호가 정확하지 않습니다.");
        			this.txtNO_TEL.setFocus();
        			return false;
        		}
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_OFFICETEL")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_OFFICETEL"),"-",""),")",""))){
        			this.gfnAlert("직장 전화번호가 정확하지 않습니다.");
        			this.txtNO_OFFICETEL.setFocus();
        			return false;
        		}
        	}
        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_MOBILE")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_MOBILE"),"-",""),")",""))){
        			this.gfnAlert("휴대폰 번호가 정확하지 않습니다.");
        			this.txtNO_MOBILE.setFocus();
        			return false;
        		}
        	}

        	return true;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}else{
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsData_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "TY_CONTRACTOR"){
        			if(e.newvalue == "P"){	//개인
        				this.txtCD_VENDOR.set_readonly(true);
        				this.txtDS_VENDOR.set_readonly(true);
        				this.txtDS_UPJONG.set_readonly(true);
        				this.txtDS_UPTAE.set_readonly(true);

        				obj.setColumn(e.row, "CD_VENDOR", "");
        				obj.setColumn(e.row, "DS_VENDOR", "");
        				obj.setColumn(e.row, "DS_UPJONG", "");
        				obj.setColumn(e.row, "DS_UPTAE" , "");
        			} else {	//법인
        				this.txtCD_VENDOR.set_readonly(false);
        				this.txtDS_VENDOR.set_readonly(false);
        				this.txtDS_UPJONG.set_readonly(false);
        				this.txtDS_UPTAE.set_readonly(false);
        			}
        		}
        	}
        };

        //확인버튼
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.gfnConfirm("명의변경을 계속 진행하시겠습니까?", "btnConf_callback");
        };

        this.btnConf_callback = function(strID, val) {
        	if (!val) return;

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"		, this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN"		, this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsData.getColumn(0, "NO_CHASU"));
        	this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsData.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR"		, this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO"			, this.dsData.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "DT_TRANSFER"  	, this.dsData.getColumn(0, "DT_TRANSFER"));
        	this.dsInsert.setColumn(nrow, "TY_CONTRACTOR"   , this.dsData.getColumn(0, "TY_CONTRACTOR"));
        	this.dsInsert.setColumn(nrow, "DS_CONTRACTOR"   , this.dsData.getColumn(0, "DS_CONTRACTOR"));
        	this.dsInsert.setColumn(nrow, "NO_JUMIN"  		, nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-",""));
        	this.dsInsert.setColumn(nrow, "NO_TEL"  		, this.dsData.getColumn(0, "NO_TEL"));
        	this.dsInsert.setColumn(nrow, "NO_OFFICETEL"  	, this.dsData.getColumn(0, "NO_OFFICETEL"));
        	this.dsInsert.setColumn(nrow, "NO_MOBILE"  		, this.dsData.getColumn(0, "NO_MOBILE"));
        	this.dsInsert.setColumn(nrow, "DS_EMAIL"  		, this.dsData.getColumn(0, "DS_EMAIL"));
        	this.dsInsert.setColumn(nrow, "CD_VENDOR"  		, nexacro.replaceAll(this.dsData.getColumn(0, "CD_VENDOR"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_VENDOR"  		, this.dsData.getColumn(0, "DS_VENDOR"));
        	this.dsInsert.setColumn(nrow, "DS_UPJONG"		, this.dsData.getColumn(0, "DS_UPJONG"));
        	this.dsInsert.setColumn(nrow, "DS_UPTAE"  		, this.dsData.getColumn(0, "DS_UPTAE"));
        	this.dsInsert.setColumn(nrow, "DS_REMARK"  		, this.dsData.getColumn(0, "DS_REMARK"));
        	this.dsInsert.setColumn(nrow, "DS_TRANSFER"  	, this.dsData.getColumn(0, "DS_TRANSFER"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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

        //취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staTITLE.addEventHandler("onclick",this.divData_staTITLE_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_oncolumnchanged,this);
        };
        this.loadIncludeScript("DLB_DLGTRANSFER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
