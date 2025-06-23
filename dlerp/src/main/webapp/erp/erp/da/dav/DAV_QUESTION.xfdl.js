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
            this.set_titletext("연말정산 근로자 사전 질문지");
            this.getSetter("maxwidth").set("1020");
            this.getSetter("maxheight").set("815");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,1680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOUSEHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRECOMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEFULT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NOHOUSE_HOUSEHOLDER3\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOUSE_GONGJE3\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MY_HOUSE_LONE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KOOKMIN_HOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LONE_3MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LONE_3MONTH_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LONE_3MONTH_MOVE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NOT_DAEBU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LONE_1MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LONE_PERCENT_OVER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NOHOUSE_HOUSEHOLDER4\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOUSE_GONGJE4\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONTH_RENT_DEFULT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KOOKMIN_HOUSE_3UNDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAME_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MY_MONTH_RENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BEFOR_1HOUSE_HOUSEHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BEFOR_KOOKMIN_HOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BEFOR_3UNDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NOHOUSE_HOUSEHOLDER6\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOUSE_GONGJE6\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BEFOR2013_KOOKMIN_HOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUY_5UNDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MYHOUSE_LONE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NOT_OFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_CREATE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CREATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_QUESTION_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAVPR_QUESTION_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01",null,"1599","50","24","20",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staName",null,"1599","70","24","btn00_01:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("서부겸");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp00_00_00_01_01_01_00_00","750","1599",null,"24","staName:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("소득자 성명 : ");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDate","750","1567","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("2020년 1월 1일");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"47","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("연말정산 근로자 사전 질문지");
            obj.set_cssclass("sta_MF_tit01");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00","0","sta03:10",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("다음은 소득공제 및 세액공제 신청과 관련한 사전 질문사항 입니다. 해당 사항에 표기하십시오.");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","staTITLE00_00:10",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("1. 기초 확인사항");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00","0","staTITLE00:0","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("① 본인의 연말현재(2020.12.31) 세대주 여부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00",null,"137","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_HOUSEHOLDER",null,"142","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_HOUSEHOLDER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_HOUSEHOLDER_innerdataset", obj);
            divData_form_rdoTY_HOUSEHOLDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">세대주</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">세대원</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_HOUSEHOLDER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01","0","169","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("② 동일 과세기간(2020년) 내 종근무지 혹은 전근무지가 있는지 여부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00",null,"169","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_PRECOMPANY",null,"174","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_PRECOMPANY_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_PRECOMPANY_innerdataset", obj);
            divData_form_rdoTY_PRECOMPANY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">있음</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">없음</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_PRECOMPANY_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_01","0","sta79_00_01:20",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("2. 본인이 신청한 기본공제대상자는 타인의 기본공제대상자가 아니며, 연간 소득금액(퇴직소득 및 양도소득 포함)이 100만 원 이하\r\n  (근로소득만 있는 경우에는 총급여액 500만 원 이하)임을 확인합니다.");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DEFULT",null,"223","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_DEFULT_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_DEFULT_innerdataset", obj);
            divData_form_rdoTY_DEFULT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_DEFULT_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00_00","0","staTITLE00_01:20","370","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("※ 주택수의 판단은 세대기준으로 세대원의 소유 주택을 포함합니다.");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00_00_00","staTITLE00_00_00:0","278",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("( 배우자는 동일 주소 거주와 상관없이 무조건 동일 세대임 )");
            obj.set_cssclass("sta_TITLE");
            obj.set_textAlign("left");
            obj.set_color("#2561ba");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_02","0","staTITLE00_00_00_00:20",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("3. [주택임차차입금 원리금상환액공제]를 신청한 근로자만 표시합니다.");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02","0","368","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("① 연말 현재 무주택 세대주임을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01",null,"368","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00","0","401","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ①-1 무주택 세대원인 경우, 세대주가 다른 주택자금공제를 받지 않음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00",null,"401","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_NOHOUSE_HOUSEHOLDER3",null,"373","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_NOHOUSE_HOUSEHOLDER3_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_NOHOUSE_HOUSEHOLDER3_innerdataset", obj);
            divData_form_rdoTY_NOHOUSE_HOUSEHOLDER3_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_NOHOUSE_HOUSEHOLDER3_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_HOUSE_GONGJE3",null,"406","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_HOUSE_GONGJE3_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_HOUSE_GONGJE3_innerdataset", obj);
            divData_form_rdoTY_HOUSE_GONGJE3_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_HOUSE_GONGJE3_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_00","0","434","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("② 근로자 본인 명의 차입금임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_00",null,"434","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_00","0","467","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("③ 임차주택(오피스텔 포함)의 전용면적이 85m² 이하임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_00",null,"467","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MY_HOUSE_LONE",null,"439","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_MY_HOUSE_LONE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_MY_HOUSE_LONE_innerdataset", obj);
            divData_form_rdoTY_MY_HOUSE_LONE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_MY_HOUSE_LONE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_KOOKMIN_HOUSE",null,"472","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_KOOKMIN_HOUSE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_KOOKMIN_HOUSE_innerdataset", obj);
            divData_form_rdoTY_KOOKMIN_HOUSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_KOOKMIN_HOUSE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_01","0","499","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("④ 입주일·전입일 중 빠른 날부터 전후 3개월 이내에 차입하였음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_01",null,"499","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_01","0","532","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ④-1 연장·갱신의 경우 계약 연장일·갱신일부터 전후 3개월 이내에 차입하였음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_01",null,"532","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_LONE_3MONTH",null,"504","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_LONE_3MONTH_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_LONE_3MONTH_innerdataset", obj);
            divData_form_rdoTY_LONE_3MONTH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_LONE_3MONTH_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_LONE_3MONTH_ADD",null,"537","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_LONE_3MONTH_ADD_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_LONE_3MONTH_ADD_innerdataset", obj);
            divData_form_rdoTY_LONE_3MONTH_ADD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_LONE_3MONTH_ADD_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_00_00","0","565","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ④-2 다른 주택으로 이사하는 경우 이주 전 주택의 입주일과 전입일 중 빠른 날부터 전후 3개월 이내에 차입하였음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_00_00",null,"565","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_00_00","0","597","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("⑤ 거주자 간 차입의 경우만 표시합니다.(총급여액 5천만원 이하)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_00_00",null,"597","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_background("#f2f2f2");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_LONE_3MONTH_MOVE",null,"570","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_LONE_3MONTH_MOVE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_LONE_3MONTH_MOVE_innerdataset", obj);
            divData_form_rdoTY_LONE_3MONTH_MOVE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_LONE_3MONTH_MOVE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_01_00","0","629","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ⑤-1 대부업을 경영하지 아니한 거주자로부터 차입하였음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_01_00",null,"629","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_NOT_DAEBU",null,"634","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_NOT_DAEBU_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_NOT_DAEBU_innerdataset", obj);
            divData_form_rdoTY_NOT_DAEBU_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_NOT_DAEBU_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_00_00_00","0","662","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ⑤-2 입주일·전입일 중 빠른 날부터 전후 1개월 이내에 차입하였음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_00_00_00",null,"662","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_00_00_00","0","695","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ⑤-3 연간 1.8%보다 높은 이자율로 차입하였음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_00_00_00",null,"695","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_LONE_1MONTH",null,"667","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_LONE_1MONTH_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_LONE_1MONTH_innerdataset", obj);
            divData_form_rdoTY_LONE_1MONTH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_LONE_1MONTH_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_LONE_PERCENT_OVER",null,"700","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_LONE_PERCENT_OVER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_LONE_PERCENT_OVER_innerdataset", obj);
            divData_form_rdoTY_LONE_PERCENT_OVER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_LONE_PERCENT_OVER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_02_00","0","749",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("4. [월세액 세액공제]를 신청한 근로자만 표시합니다.(총급여액 7천만원 이하)");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_02","0","784","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("① 연말 현재 무주택 세대주임을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_02",null,"784","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_02","0","817","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ①-1 무주택 세대원인 경우, 세대주가 다른 주택자금공제를 받지 않음을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_02",null,"817","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_NOHOUSE_HOUSEHOLDER4",null,"789","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_NOHOUSE_HOUSEHOLDER4_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_NOHOUSE_HOUSEHOLDER4_innerdataset", obj);
            divData_form_rdoTY_NOHOUSE_HOUSEHOLDER4_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_NOHOUSE_HOUSEHOLDER4_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_HOUSE_GONGJE4",null,"822","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_HOUSE_GONGJE4_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_HOUSE_GONGJE4_innerdataset", obj);
            divData_form_rdoTY_HOUSE_GONGJE4_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_HOUSE_GONGJE4_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_00_01","0","850","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("② 월세계약자가 본인 또는 본인의 기본공제대상자인지 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_00_01",null,"850","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_00_01","0","883","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("③ 임차주택(오피스텔, 고시원 포함)의 전용면적이 85m² 이하 또는 기준시가 3억원 이하임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_00_01",null,"883","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MONTH_RENT_DEFULT",null,"855","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_MONTH_RENT_DEFULT_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_MONTH_RENT_DEFULT_innerdataset", obj);
            divData_form_rdoTY_MONTH_RENT_DEFULT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_MONTH_RENT_DEFULT_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_KOOKMIN_HOUSE_3UNDER",null,"888","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_KOOKMIN_HOUSE_3UNDER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_KOOKMIN_HOUSE_3UNDER_innerdataset", obj);
            divData_form_rdoTY_KOOKMIN_HOUSE_3UNDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_KOOKMIN_HOUSE_3UNDER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_01_00","0","916","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("④ 임대차계약증서의 주소지와 주민등록표등본의 주소지가 일치함을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_01_00",null,"916","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_01_01","0","949","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("⑤ 근로자 본인이 지급한 월세액임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_01_01",null,"949","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SAME_ADDRESS",null,"921","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_SAME_ADDRESS_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_SAME_ADDRESS_innerdataset", obj);
            divData_form_rdoTY_SAME_ADDRESS_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_SAME_ADDRESS_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MY_MONTH_RENT",null,"954","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_MY_MONTH_RENT_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_MY_MONTH_RENT_innerdataset", obj);
            divData_form_rdoTY_MY_MONTH_RENT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_MY_MONTH_RENT_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_02_00_00","0","1004",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_text("5. [주택마련저축공제]를 신청한 근로자만 표시합니다.");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_02_00","0","1038","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("① 2010.1.1 이후 가입한 청약저축과 주택청약종합저축의 경우 가입자 본인은 연중 무주택 세대주임을 확인합니다.(총급여액 7천만원 이하)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_02_00",null,"1038","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_02_00","0","1071","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("② 2009.12.31 이전 가입한 청약저축에 관한 질문입니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_02_00",null,"1071","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_background("#f2f2f2");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER",null,"1043","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER_innerdataset", obj);
            divData_form_rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_00_01_00","0","1104","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ②-1 연중 1주택 이하 세대주임을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_00_01_00",null,"1104","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_00_01_00","0","1136","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ②-2 주택의 전용면적이 85m² 이하임을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_00_01_00",null,"1136","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_BEFOR_1HOUSE_HOUSEHOLDER",null,"1109","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_BEFOR_1HOUSE_HOUSEHOLDER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_BEFOR_1HOUSE_HOUSEHOLDER_innerdataset", obj);
            divData_form_rdoTY_BEFOR_1HOUSE_HOUSEHOLDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_BEFOR_1HOUSE_HOUSEHOLDER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_BEFOR_KOOKMIN_HOUSE",null,"1141","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_BEFOR_KOOKMIN_HOUSE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_BEFOR_KOOKMIN_HOUSE_innerdataset", obj);
            divData_form_rdoTY_BEFOR_KOOKMIN_HOUSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_BEFOR_KOOKMIN_HOUSE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_01_00_00","0","1169","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ②-3 주택의 기준시가가 3억 원 이하임을 확인합니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_01_00_00",null,"1169","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_BEFOR_3UNDER",null,"1174","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_BEFOR_3UNDER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_BEFOR_3UNDER_innerdataset", obj);
            divData_form_rdoTY_BEFOR_3UNDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_BEFOR_3UNDER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_02_00_00_00","0","sta79_00_02_01_00_00:17",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("6. [장기주택저당차입금 이자상환액공제]를 신청한 근로자만 표시합니다.");
            obj.set_cssclass("sta_WF_bold");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_02_00_00","0","1258","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("① 연말 현재 1주택 세대주임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_02_00_00",null,"1258","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_02_00_00","0","1291","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text(" ①-1 1주택 세대원인 경우, 해당 주택에 실제 거주하고 있으며 세대주가 다른 주택자금공제를 받지 않음을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_02_00_00",null,"1291","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_NOHOUSE_HOUSEHOLDER6",null,"1263","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_NOHOUSE_HOUSEHOLDER6_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_NOHOUSE_HOUSEHOLDER6_innerdataset", obj);
            divData_form_rdoTY_NOHOUSE_HOUSEHOLDER6_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_NOHOUSE_HOUSEHOLDER6_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_HOUSE_GONGJE6",null,"1296","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_HOUSE_GONGJE6_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_HOUSE_GONGJE6_innerdataset", obj);
            divData_form_rdoTY_HOUSE_GONGJE6_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_HOUSE_GONGJE6_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_00_01_00_00","0","1324","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("② 2013년 이전에 주택을 취득한 경우 해당 주택의 전용면적이 85m² 이하임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_00_01_00_00",null,"1324","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_01_00_00_01_00_00","0","1357","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("③ 주택의 취득 당시 기준시가가 5억원 이하임을 확인합니다. (2014년 이후 취득시 4억원 이하, 2019년 이전 취득 시 5억원 이하) ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_00_00_00_01_00_00",null,"1357","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_BEFOR2013_KOOKMIN_HOUSE",null,"1329","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_BEFOR2013_KOOKMIN_HOUSE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_BEFOR2013_KOOKMIN_HOUSE_innerdataset", obj);
            divData_form_rdoTY_BEFOR2013_KOOKMIN_HOUSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_BEFOR2013_KOOKMIN_HOUSE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_BUY_5UNDER",null,"1362","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_BUY_5UNDER_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_BUY_5UNDER_innerdataset", obj);
            divData_form_rdoTY_BUY_5UNDER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_BUY_5UNDER_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_01_00_00_00","0","1390","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("④ 근로자 본인이 주택소유자이면서 채무자(차입자)임을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_01_00_00_00",null,"1390","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MYHOUSE_LONE",null,"1395","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_MYHOUSE_LONE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_MYHOUSE_LONE_innerdataset", obj);
            divData_form_rdoTY_MYHOUSE_LONE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_MYHOUSE_LONE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_02_01_00_00_00_00","0","1423","830","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("⑤ 해당 주택이 오피스텔이 아님을 확인합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79_00_00_01_01_00_00_00_00",null,"1423","151","34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_NOT_OFFICE",null,"1428","130","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("-1");
            var divData_form_rdoTY_NOT_OFFICE_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_NOT_OFFICE_innerdataset", obj);
            divData_form_rdoTY_NOT_OFFICE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_NOT_OFFICE_innerdataset);
            obj.set_text("nexacro");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00_01","0","sta79_00_02_01_00_00_00_00:20",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_text("근로자 본인이 표기한 내용이 사실과 다름없음을 확인하며, 수정‧보완사항이 필요한 경우 공지일정까지 보완하겠습니다.");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00_01_00","0","staTITLE00_00_01:0",null,"35","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_text("소득공제 및 세액공제 신청과 관련한 책임은 본인에게 있음을 확인합니다.");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divData.form.tab00.Tabpage1.form.edtSUM_RETIRESALARY_BEF","value","dsList","SUM_RETIRESALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.rdoTY_HOUSEHOLDER","value","dsList","TY_HOUSEHOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.rdoTY_PRECOMPANY","value","dsList","TY_PRECOMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.rdoTY_DEFULT","value","dsList","TY_DEFULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.rdoTY_NOHOUSE_HOUSEHOLDER3","value","dsList","TY_NOHOUSE_HOUSEHOLDER3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.rdoTY_HOUSE_GONGJE3","value","dsList","TY_HOUSE_GONGJE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.rdoTY_MY_HOUSE_LONE","value","dsList","TY_MY_HOUSE_LONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.rdoTY_KOOKMIN_HOUSE","value","dsList","TY_KOOKMIN_HOUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.rdoTY_LONE_3MONTH","value","dsList","TY_LONE_3MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.rdoTY_LONE_3MONTH_ADD","value","dsList","TY_LONE_3MONTH_ADD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.rdoTY_LONE_3MONTH_MOVE","value","dsList","TY_LONE_3MONTH_MOVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.rdoTY_NOT_DAEBU","value","dsList","TY_NOT_DAEBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.rdoTY_LONE_1MONTH","value","dsList","TY_LONE_1MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.rdoTY_LONE_PERCENT_OVER","value","dsList","TY_LONE_PERCENT_OVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.rdoTY_NOHOUSE_HOUSEHOLDER4","value","dsList","TY_NOHOUSE_HOUSEHOLDER4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.rdoTY_HOUSE_GONGJE4","value","dsList","TY_HOUSE_GONGJE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.rdoTY_MONTH_RENT_DEFULT","value","dsList","TY_MONTH_RENT_DEFULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.rdoTY_KOOKMIN_HOUSE_3UNDER","value","dsList","TY_KOOKMIN_HOUSE_3UNDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.rdoTY_SAME_ADDRESS","value","dsList","TY_SAME_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.rdoTY_MY_MONTH_RENT","value","dsList","TY_MY_MONTH_RENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER","value","dsList","TY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.rdoTY_BEFOR_1HOUSE_HOUSEHOLDER","value","dsList","TY_BEFOR_1HOUSE_HOUSEHOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.rdoTY_BEFOR_KOOKMIN_HOUSE","value","dsList","TY_BEFOR_KOOKMIN_HOUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.rdoTY_BEFOR_3UNDER","value","dsList","TY_BEFOR_3UNDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.rdoTY_NOHOUSE_HOUSEHOLDER6","value","dsList","TY_NOHOUSE_HOUSEHOLDER6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.rdoTY_HOUSE_GONGJE6","value","dsList","TY_HOUSE_GONGJE6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.rdoTY_BEFOR2013_KOOKMIN_HOUSE","value","dsList","TY_BEFOR2013_KOOKMIN_HOUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.rdoTY_BUY_5UNDER","value","dsList","TY_BUY_5UNDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.rdoTY_MYHOUSE_LONE","value","dsList","TY_MYHOUSE_LONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.rdoTY_NOT_OFFICE","value","dsList","TY_NOT_OFFICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAV_QUESTION.xfdl", function() {
        /**  ③	AuthClient 사용자정보 ***
        this.AuthClient.ID_USER	: 사용자 ID
        this.AuthClient.DS_HNAME	: 사용자 이름
        this.AuthClient.CD_DEPT	: 사용자 부서코드
        this.AuthClient.DS_DEPT	: 사용자 부서명칭
        this.AuthClient.CD_CORP	: 사용자 법인코드
        this.AuthClient.DS_CORP	: 사용자 법인명칭
        this.AuthClient.ID_SABUN	: 사용자 사번 **/

        this.objApp = this.gfnGetApplication();
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        	this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsSearch.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        	this.dsSearch.setColumn(0, "ID_RESIDENT", frame.ID_RESIDENT);
        	this.dsSearch.setColumn(0, "DS_HNAME", frame.DS_HNAME);
        	//4자리가 넘을수 있으니 substr
        	this.dsSearch.setColumn(0, "DT_YEAR", frame.WORK_BASE.substr(0, 4));
        	//일자 셋팅
        	var date = this.gfnGetDate();
        	var year = date.substr(0, 4);
        	var month = date.substr(4, 2);
        	var day = date.substr(6, 2);
        	this.divData.form.staDate.set_text( year + "년 " + month + "월 " + day + "일");

        	//소득자 성명 셋팅
        	this.divData.form.staName.set_text(this.dsSearch.getColumn(0, "DS_HNAME"));
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	var date = this.gfnGetDate();
        	var year = date.substr(0, 4);
        	year = Number(year) - 1;

        	this.divData.form.sta03.set_text( year + "년 연말정산 근로자 사전 질문지");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_YEAR", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("DT_YEAR", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("DS_HNAME", "string");
        	this.dsSave.addColumn("TY_HOUSEHOLDER", "string");
        	this.dsSave.addColumn("TY_PRECOMPANY", "string");
        	this.dsSave.addColumn("TY_DEFULT", "string");
        	this.dsSave.addColumn("TY_NOHOUSE_HOUSEHOLDER3", "string");
        	this.dsSave.addColumn("TY_HOUSE_GONGJE3", "string");
        	this.dsSave.addColumn("TY_MY_HOUSE_LONE", "string");
        	this.dsSave.addColumn("TY_KOOKMIN_HOUSE", "string");
        	this.dsSave.addColumn("TY_LONE_3MONTH", "string");
        	this.dsSave.addColumn("TY_LONE_3MONTH_ADD", "string");
        	this.dsSave.addColumn("TY_LONE_3MONTH_MOVE", "string");
        	this.dsSave.addColumn("TY_NOT_DAEBU", "string");
        	this.dsSave.addColumn("TY_LONE_1MONTH", "string");
        	this.dsSave.addColumn("TY_LONE_PERCENT_OVER", "string");
        	this.dsSave.addColumn("TY_NOHOUSE_HOUSEHOLDER4", "string");
        	this.dsSave.addColumn("TY_HOUSE_GONGJE4", "string");
        	this.dsSave.addColumn("TY_MONTH_RENT_DEFULT", "string");
        	this.dsSave.addColumn("TY_KOOKMIN_HOUSE_3UNDER", "string");
        	this.dsSave.addColumn("TY_SAME_ADDRESS", "string");
        	this.dsSave.addColumn("TY_MY_MONTH_RENT", "string");
        	this.dsSave.addColumn("TY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER", "string");
        	this.dsSave.addColumn("TY_BEFOR_1HOUSE_HOUSEHOLDER", "string");
        	this.dsSave.addColumn("TY_BEFOR_KOOKMIN_HOUSE", "string");
        	this.dsSave.addColumn("TY_BEFOR_3UNDER", "string");
        	this.dsSave.addColumn("TY_NOHOUSE_HOUSEHOLDER6", "string");
        	this.dsSave.addColumn("TY_HOUSE_GONGJE6", "string");
        	this.dsSave.addColumn("TY_BEFOR2013_KOOKMIN_HOUSE", "string");
        	this.dsSave.addColumn("TY_BUY_5UNDER", "string");
        	this.dsSave.addColumn("TY_MYHOUSE_LONE", "string");
        	this.dsSave.addColumn("TY_NOT_OFFICE", "string");
        	this.dsSave.addColumn("TY_SIGN", "string");
        	this.dsSave.addColumn("ID_CREATE", "string");

        	//자동조회
        	this.fnSelect();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_YEAR", this.dsSearch.getColumn(0, "DT_YEAR"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
         *	저장 버튼
         */
        this.fnSave = function() {

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsSave.addRow();

        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "DT_YEAR", this.dsSearch.getColumn(0, "DT_YEAR"));
        		this.dsSave.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        		this.dsSave.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        		this.dsSave.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        		this.dsSave.setColumn(nrow, "TY_HOUSEHOLDER", this.dsList.getColumn(i, "TY_HOUSEHOLDER"));
        		this.dsSave.setColumn(nrow, "TY_PRECOMPANY", this.dsList.getColumn(i, "TY_PRECOMPANY"));
        		this.dsSave.setColumn(nrow, "TY_DEFULT", this.dsList.getColumn(i, "TY_DEFULT"));
        		this.dsSave.setColumn(nrow, "TY_NOHOUSE_HOUSEHOLDER3", this.dsList.getColumn(i, "TY_NOHOUSE_HOUSEHOLDER3"));
        		this.dsSave.setColumn(nrow, "TY_HOUSE_GONGJE3", this.dsList.getColumn(i, "TY_HOUSE_GONGJE3"));
        		this.dsSave.setColumn(nrow, "TY_MY_HOUSE_LONE", this.dsList.getColumn(i, "TY_MY_HOUSE_LONE"));
        		this.dsSave.setColumn(nrow, "TY_KOOKMIN_HOUSE", this.dsList.getColumn(i, "TY_KOOKMIN_HOUSE"));
        		this.dsSave.setColumn(nrow, "TY_LONE_3MONTH", this.dsList.getColumn(i, "TY_LONE_3MONTH"));
        		this.dsSave.setColumn(nrow, "TY_LONE_3MONTH_ADD", this.dsList.getColumn(i, "TY_LONE_3MONTH_ADD"));
        		this.dsSave.setColumn(nrow, "TY_LONE_3MONTH_MOVE", this.dsList.getColumn(i, "TY_LONE_3MONTH_MOVE"));
        		this.dsSave.setColumn(nrow, "TY_NOT_DAEBU", this.dsList.getColumn(i, "TY_NOT_DAEBU"));
        		this.dsSave.setColumn(nrow, "TY_LONE_1MONTH", this.dsList.getColumn(i, "TY_LONE_1MONTH"));
        		this.dsSave.setColumn(nrow, "TY_LONE_PERCENT_OVER", this.dsList.getColumn(i, "TY_LONE_PERCENT_OVER"));
        		this.dsSave.setColumn(nrow, "TY_NOHOUSE_HOUSEHOLDER4", this.dsList.getColumn(i, "TY_NOHOUSE_HOUSEHOLDER4"));
        		this.dsSave.setColumn(nrow, "TY_HOUSE_GONGJE4", this.dsList.getColumn(i, "TY_HOUSE_GONGJE4"));
        		this.dsSave.setColumn(nrow, "TY_MONTH_RENT_DEFULT", this.dsList.getColumn(i, "TY_MONTH_RENT_DEFULT"));
        		this.dsSave.setColumn(nrow, "TY_KOOKMIN_HOUSE_3UNDER", this.dsList.getColumn(i, "TY_KOOKMIN_HOUSE_3UNDER"));
        		this.dsSave.setColumn(nrow, "TY_SAME_ADDRESS", this.dsList.getColumn(i, "TY_SAME_ADDRESS"));
        		this.dsSave.setColumn(nrow, "TY_MY_MONTH_RENT", this.dsList.getColumn(i, "TY_MY_MONTH_RENT"));
        		this.dsSave.setColumn(nrow, "TY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER", this.dsList.getColumn(i, "TY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER"));
        		this.dsSave.setColumn(nrow, "TY_BEFOR_1HOUSE_HOUSEHOLDER", this.dsList.getColumn(i, "TY_BEFOR_1HOUSE_HOUSEHOLDER"));
        		this.dsSave.setColumn(nrow, "TY_BEFOR_KOOKMIN_HOUSE", this.dsList.getColumn(i, "TY_BEFOR_KOOKMIN_HOUSE"));
        		this.dsSave.setColumn(nrow, "TY_BEFOR_3UNDER", this.dsList.getColumn(i, "TY_BEFOR_3UNDER"));
        		this.dsSave.setColumn(nrow, "TY_NOHOUSE_HOUSEHOLDER6", this.dsList.getColumn(i, "TY_NOHOUSE_HOUSEHOLDER6"));
        		this.dsSave.setColumn(nrow, "TY_HOUSE_GONGJE6", this.dsList.getColumn(i, "TY_HOUSE_GONGJE6"));
        		this.dsSave.setColumn(nrow, "TY_BEFOR2013_KOOKMIN_HOUSE", this.dsList.getColumn(i, "TY_BEFOR2013_KOOKMIN_HOUSE"));
        		this.dsSave.setColumn(nrow, "TY_BUY_5UNDER", this.dsList.getColumn(i, "TY_BUY_5UNDER"));
        		this.dsSave.setColumn(nrow, "TY_MYHOUSE_LONE", this.dsList.getColumn(i, "TY_MYHOUSE_LONE"));
        		this.dsSave.setColumn(nrow, "TY_NOT_OFFICE", this.dsList.getColumn(i, "TY_NOT_OFFICE"));

        		//사인여부
        		this.dsSave.setColumn(nrow, "TY_SIGN", "Y");
        		this.dsSave.setColumn(nrow, "ID_CREATE", this.AuthClient.ID_SABUN);
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";		//콜백
        	var strSvcType  = "save";		//
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

        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if( svcID == "select" ){
        		if(this.dsList.rowcount == 0) {
        			//값이 없으면 기본 셋팅
        			var nRow = this.dsList.addRow();

        			this.dsList.setColumn(nRow, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsList.setColumn(nRow, "DT_YEAR" , this.dsSearch.getColumn(0, "DT_YEAR"));
        			this.dsList.setColumn(nRow, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        			this.dsList.setColumn(nRow, "ID_RESIDENT" , this.dsSearch.getColumn(0, "ID_RESIDENT"));
        			this.dsList.setColumn(nRow, "DS_HNAME" , this.dsSearch.getColumn(0, "DS_HNAME"));
        		}else{
        			this.divData_rdoTY_HOUSEHOLDER_onitemchanged(this.divData.form.rdoTY_HOUSEHOLDER);
        		}
        	}else if( svcID == "save" ){
        		if(errorCode == 0) {
        			//값이 없으면 기본 셋팅
        			this.getParentContext().close(true);
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
        //확인버튼 클릭


        this.divData_btn00_01_onclick = function(obj,e)
        {
        	//저장 OR 업데이트
        	this.fnSave();
        };

        //세대주 , 세대원 변경 시
        this.divData_rdoTY_HOUSEHOLDER_onitemchanged = function(obj,e)
        {
        	var val = obj.value;

        	//※ 세대주 체크시 3,4,6 ①-1 체크항목 비활성화
        	if( val == "Y" ){
        		this.divData.form.rdoTY_HOUSE_GONGJE3.set_enable(false);
        		this.dsList.setColumn(0, "TY_HOUSE_GONGJE3", "");
        		this.divData.form.rdoTY_HOUSE_GONGJE4.set_enable(false);
        		this.dsList.setColumn(0, "TY_HOUSE_GONGJE4", "");
        		this.divData.form.rdoTY_HOUSE_GONGJE6.set_enable(false);
        		this.dsList.setColumn(0, "TY_HOUSE_GONGJE6", "");

        		this.divData.form.rdoTY_NOHOUSE_HOUSEHOLDER3.set_enable(true);
        		this.divData.form.rdoTY_NOHOUSE_HOUSEHOLDER4.set_enable(true);
        		this.divData.form.rdoTY_NOHOUSE_HOUSEHOLDER6.set_enable(true);
        		this.divData.form.rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER.set_enable(true);
        		this.divData.form.rdoTY_BEFOR_1HOUSE_HOUSEHOLDER.set_enable(true);
        	}
        	//※ 세대원 체크시 3,4,6 ① / 5 ①, ②-1 체크항목 비활성화
        	else if( val == "N" ){
        		this.divData.form.rdoTY_HOUSE_GONGJE3.set_enable(true);
        		this.divData.form.rdoTY_HOUSE_GONGJE4.set_enable(true);
        		this.divData.form.rdoTY_HOUSE_GONGJE6.set_enable(true);

        		this.divData.form.rdoTY_NOHOUSE_HOUSEHOLDER3.set_enable(false);
        		this.dsList.setColumn(0, "TY_NOHOUSE_HOUSEHOLDER3", "");
        		this.divData.form.rdoTY_NOHOUSE_HOUSEHOLDER4.set_enable(false);
        		this.dsList.setColumn(0, "TY_NOHOUSE_HOUSEHOLDER4", "");
        		this.divData.form.rdoTY_NOHOUSE_HOUSEHOLDER6.set_enable(false);
        		this.dsList.setColumn(0, "TY_NOHOUSE_HOUSEHOLDER6", "");
        		this.divData.form.rdoTY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER.set_enable(false);
        		this.dsList.setColumn(0, "TY_AFTER_SAVE_NOHOUSE_HOUSEHOLDER", "");
        		this.divData.form.rdoTY_BEFOR_1HOUSE_HOUSEHOLDER.set_enable(false);
        		this.dsList.setColumn(0, "TY_BEFOR_1HOUSE_HOUSEHOLDER", "");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btn00_01.addEventHandler("onclick",this.divData_btn00_01_onclick,this);
            this.divData.form.rdoTY_HOUSEHOLDER.addEventHandler("onitemchanged",this.divData_rdoTY_HOUSEHOLDER_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAV_QUESTION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
