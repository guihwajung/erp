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
            this.set_titletext("자산취득");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETGAIN_SELECT</Col></Row><Row><Col id=\"TARGET\">userinfo</Col><Col id=\"SP\">DZZPR_USERINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_COMMON_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">selectMove</Col><Col id=\"SP\">DHNPR_ASSETMOVE_SELECT01</Col></Row><Row><Col id=\"TARGET\">selectChg</Col><Col id=\"SP\">DHNPR_ASSETCHG_SELECT01</Col></Row><Row><Col id=\"TARGET\">selectDep</Col><Col id=\"SP\">DHNPR_ASSETDEP_SELECT03</Col></Row><Row><Col id=\"TARGET\">insertChg</Col><Col id=\"SP\">DHNPR_ASSETCHG_INSERT</Col></Row><Row><Col id=\"TARGET\">updateChg</Col><Col id=\"SP\">DHNPR_ASSETCHG_UPDATE</Col></Row><Row><Col id=\"TARGET\">deleteChg</Col><Col id=\"SP\">DHNPR_ASSETCHG_DELETE</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHNPR_ASSETCHG_AUTOSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHNPR_ASSETCHG_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">insertMove</Col><Col id=\"SP\">DHNPR_ASSETMOVE_INSERT</Col></Row><Row><Col id=\"TARGET\">updateMove</Col><Col id=\"SP\">DHNPR_ASSETMOVE_UPDATE</Col></Row><Row><Col id=\"TARGET\">deleteMove</Col><Col id=\"SP\">DHNPR_ASSETMOVE_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlipMove</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipMove</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_AUTOSLIPX</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_ASSETREGINFO_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DEP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">상각</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미상각</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">정액법</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">정률법</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GETSTATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">신품</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">중고</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GET", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">구입</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">제조</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACQUIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">미지급금</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">외상매입금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_ASSET", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">자산</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">비품</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">자산 + 비품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ASSETSTATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">양호</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">보통</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">불량</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">사용불가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNewCode", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인코드</Col></Row><Row><Col id=\"DS_FIELD\">회계년도</Col><Col id=\"CD_FIELD\">YR_ACCOUNT</Col></Row><Row><Col id=\"CD_FIELD\">CD_ACASSET</Col><Col id=\"DS_FIELD\">자산코드</Col></Row><Row><Col id=\"CD_FIELD\">DS_ASSET</Col><Col id=\"DS_FIELD\">자산명칭</Col></Row><Row><Col id=\"DS_FIELD\">상각여부</Col><Col id=\"CD_FIELD\">YN_DEP</Col></Row><Row><Col id=\"CD_FIELD\">CD_ASSETSEMOK</Col><Col id=\"DS_FIELD\">자산세목코드</Col></Row><Row><Col id=\"DS_FIELD\">상각방법</Col><Col id=\"CD_FIELD\">TY_DEP</Col></Row><Row><Col id=\"CD_FIELD\">CD_GETDEPT</Col><Col id=\"DS_FIELD\">취득부서</Col></Row><Row><Col id=\"DS_FIELD\">취득거래처</Col><Col id=\"CD_FIELD\">CD_GETVENDOR</Col></Row><Row><Col id=\"DS_FIELD\">내용연수</Col><Col id=\"CD_FIELD\">YR_LIFE</Col></Row><Row><Col id=\"DS_FIELD\">집행요청일자</Col><Col id=\"CD_FIELD\">DT_CASH</Col></Row><Row><Col id=\"CD_FIELD\">DT_GET</Col><Col id=\"DS_FIELD\">취득일자</Col></Row><Row><Col id=\"DS_FIELD\">취득수량</Col><Col id=\"CD_FIELD\">QN_GET</Col></Row><Row><Col id=\"DS_FIELD\">증빙선택</Col><Col id=\"CD_FIELD\">CD_PROOF</Col></Row><Row><Col id=\"DS_FIELD\">취득가액</Col><Col id=\"CD_FIELD\">AM_GET</Col></Row><Row><Col id=\"CD_FIELD\">AM_SUPPLY</Col><Col id=\"DS_FIELD\">공급가액</Col></Row><Row><Col id=\"DS_FIELD\">부가세액</Col><Col id=\"CD_FIELD\">AM_VAT</Col></Row><Row><Col id=\"DS_FIELD\">자산/비품여부</Col><Col id=\"CD_FIELD\">YN_ASSET</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAKEDEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">본공사</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">M/H</Col></Row><Row><Col id=\"CODE\">H</Col><Col id=\"VALUE\">하자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATBGJE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListMove", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListChg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDep", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CHANGE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"TEXT\">취득</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CHANGE2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"TEXT\">자본적지출</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"TEXT\">폐기</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"TEXT\">매각</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CHGAMOUNT01", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"TEXT\">미지급금</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"TEXT\">외상매입금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CHGAMOUNT03", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"TEXT\">미수금</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"TEXT\">예수금</Col></Row></Rows>");
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
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staTY_CONS:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CLOSE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staTY_CLOSE:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFASSET_BY_ACASSET");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT16","0","162","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("자산승인여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg18","staDS_CONTENT16:-1","staDS_CONTENT16:-27","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg35","769","136","539","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg14_00_00","124","136","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-1","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("자산기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","56","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("자산정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT","0","29","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("자산번호/자산명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","staDS_CONTENT:-1","29","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT02","0","136","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("상각여부/상각방법");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT06","661","29","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("자산/세목");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT07","0","84","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("취득부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT08","staDS_CONTENT07:-125","staDS_CONTENT07:-1","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("취득거래처");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT13","661","84","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("취득일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT17","0","staDS_CONTENT16:-1","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("최종변동일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT18","staDS_CONTENT16:165","staDS_CONTENT16:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("자산상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT19","staDS_CONTENT18:261","staDS_CONTENT18:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("보유부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT20","staDS_CONTENT19:-110","staDS_CONTENT19:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("관리부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","staDS_CONTENT06:-1","staDS_CONTENT06:-27","538","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","staDS_CONTENT07:-1","staDS_CONTENT07:-27","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","staDS_CONTENT08:-1","staDS_CONTENT08:-27","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","staDS_CONTENT13:-1","staDS_CONTENT13:-27","538","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg15","769","110","539","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg19","staDS_CONTENT17:-1","staDS_CONTENT17:-27","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg21","staDS_CONTENT19:-1","staDS_CONTENT19:-27","538","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg22","staDS_CONTENT20:-1","staDS_CONTENT20:-27","538","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_ASSET","staDS_CONTENT:5","staDS_CONTENT:-23","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ASSET","edtCD_ASSET:5","33","410","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","staDS_CONTENT02:5","staDS_CONTENT02:-23","123","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("none");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_ACASSET","staDS_CONTENT06:5","staDS_CONTENT06:-23","225","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_ASSETSEMOK","cfCD_ACASSET:5","33","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFASSETSEMOK");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_DEP","254","140","133","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_DEP");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GETDEPT","staDS_CONTENT07:5","staDS_CONTENT07:-23","510","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GETVENDOR","staDS_CONTENT08:5","staDS_CONTENT08:-23","510","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GET","staDS_CONTENT13:5","staDS_CONTENT13:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT15_00","661","110","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("취득가액");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_tooltiptext("취득가액(부대비용포함)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT33","661","staDS_CONTENT15_00:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("상각완료년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtYN_TRANS","staDS_CONTENT16:5","staDS_CONTENT16:-23","121","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("edtDT_CHANGE","staDS_CONTENT17:6","192","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_ASSETSTATE","staDS_CONTENT18:5","staDS_CONTENT18:-23","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTY_ASSETSTATE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_TAKEDEPT","staDS_CONTENT19:5","staDS_CONTENT19:-23","512","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_MAGDEPT","staDS_CONTENT20:5","staDS_CONTENT20:-23","512","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT23","290","staDS_CONTENT17:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("최종변동내역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_CHANGE","staDS_CONTENT23:5","191","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYR_ACCOUNT","670","0","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_GET","staDS_CONTENT15_00:5","staDS_CONTENT15_00:-24","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_format("###,###,###,###,###,##0");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_GET","1070","88","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_format("!#,###,###,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnISSUE_VAT","1240","-2","100","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("증빙/부가세");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT09_00","403","136","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("내용연수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtYR_LIFE","staDS_CONTENT09_00:4","140","124","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT13_00_00","950","110","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("처분금액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SELL","staDS_CONTENT13_00_00:5","113","194","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_format("###,###,###,###,###,###");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_TAKEDEPT","staDS_CONTENT18:113","staDS_CONTENT18:32","91","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_innerdataset("dsTY_TAKEDEPT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_visible("false");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEPFINAL","staDS_CONTENT33:5","staDS_CONTENT33:-23","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","254","staTITLE00:-18","18","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","225",null,null,"10","0",null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("변동내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("이동내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("감가상각내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_CONTENT13_00","950","84","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("취득수량");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ACASSET.form.CDTextBox","value","dsSearch","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ACASSET.form.DSTextBox","value","dsSearch","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ASSET.form.CDTextBox","value","dsSearch","CD_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ASSET.form.DSTextBox","value","dsSearch","DS_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtCD_ASSET","value","dsList","CD_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_ASSET","value","dsList","DS_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.rdoYN_DEP","value","dsList","YN_DEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cboTY_DEP","value","dsList","TY_DEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctclYR_ACCOUNT.form.TextBox","value","dsList","YR_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.cfCD_ACASSET.form.CDTextBox","value","dsList","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.cfCD_ACASSET.form.DSTextBox","value","dsList","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.cfCD_ASSETSEMOK.form.CDTextBox","value","dsList","CD_ASSETSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.cfCD_ASSETSEMOK.form.DSTextBox","value","dsList","DS_ASSETSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.cfCD_GETDEPT.form.CDTextBox","value","dsList","CD_GETDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.cfCD_GETDEPT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.cfCD_GETVENDOR.form.CDTextBox","value","dsList","CD_GETVENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.cfCD_GETVENDOR.form.DSTextBox","value","dsList","DS_GETVENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.edtYR_LIFE","value","dsList","YR_LIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ctclDT_GET","value","dsList","DT_GET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.mskQN_GET","value","dsList","QN_GET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.mskAM_GET","value","dsList","AM_GET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.edtYN_TRANS","value","dsList","YN_TRANS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.mskAM_SELL","value","dsList","AM_SELL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.cboTY_ASSETSTATE","value","dsList","TY_ASSETSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.edtDT_CHANGE","value","dsList","DT_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.cfCD_TAKEDEPT.form.CDTextBox","value","dsList","CD_TAKEDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.cfCD_TAKEDEPT.form.DSTextBox","value","dsList","DS_TAKEDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.cfCD_MAGDEPT.form.CDTextBox","value","dsList","CD_MAGDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.cfCD_MAGDEPT.form.DSTextBox","value","dsList","DS_MAGDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.edtCD_CHANGE","value","dsList","CD_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.cboTY_TAKEDEPT","value","dsList","TY_TAKEDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.ctclYM_DEPFINAL.form.TextBox","value","dsList","YM_DEPFINAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.edtTY_VENDOR","value","dsList","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETREGINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.FileManager = {};

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//


        	this.v_YmLastDepr  = "";		//최종감가상각월

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();
        	this.fnSetCombo();

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();

        	this.FileManager = {};
        	this.FileManager.CD_GUBUN = "DH06";
        	this.FileManager.IS_READONLY = false;

        	//화면 넘어올 때
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().CD_ASSET)) {
        		this.dsSearch.setColumn(0, "CD_CORP", 	 this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", 	 this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_ACASSET", this.getOwnerFrame().CD_ACASSET);
        		this.dsSearch.setColumn(0, "DS_ACASSET", this.getOwnerFrame().DS_ACASSET);
        		this.dsSearch.setColumn(0, "CD_ASSET", 	 this.getOwnerFrame().CD_ASSET);
        		this.dsSearch.setColumn(0, "DS_ASSET", 	 this.getOwnerFrame().DS_ASSET);
        		this.FormBtns.Select.click(true);
        	}else{
        		this.dsSearch.setColumn(0, "CD_CORP", 	 this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", 	 this.AuthClient.DS_CORP);
        	}

        	this.fnCompEnable("N");
        	// 조회하기전에는 입력 수정 disable
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dTOldData = this.gfnGetConfig("DH", "DT_SLIP_OLD");
        	this.issuedSlip = false;

        	this.ymDepfinal;

        	this.strYnIkwan;
        	this.strYnDep;
        	this.tabData = this.divData.form.tabData;

        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid1; //변동정보
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3;

        	//조회
        	this.ccfCD_CORP 		= this.divSearch.form.ccfCD_CORP;		//법인코드
        	this.ccfCD_ACASSET 		= this.divSearch.form.ccfCD_ACASSET;	//자산코드
        	this.ccfCD_ASSET 		= this.divSearch.form.ccfCD_ASSET;		//자산번호
        	//this.cedtCD_SLIP 		= this.divSearch.form.cedtCD_SLIP;		//전표번호

        	//자산기본정보
        	this.edtCD_ASSET 		= this.divData.form.edtCD_ASSET;		//자산번호
        	this.ctclYR_ACCOUNT 	= this.divData.form.ctclYR_ACCOUNT;		//회계년도
        	this.cfCD_CORP  		= this.divData.form.cfCD_CORP;			//법인코드
        	this.cfCD_ACASSET 		= this.divData.form.cfCD_ACASSET;		//자산코드
        	this.edtDS_ASSET 		= this.divData.form.edtDS_ASSET;		//자산명칭
        	this.rdoYN_DEP 			= this.divData.form.rdoYN_DEP;			//상각여부
        	this.cfCD_ASSETSEMOK 	= this.divData.form.cfCD_ASSETSEMOK;	//자산세목코드
        	this.cboTY_DEP 			= this.divData.form.cboTY_DEP;			//상각방법

        	//자산취득정보
        	this.cfCD_GETDEPT 		= this.divData.form.cfCD_GETDEPT;		//취득부서
        	this.cfCD_GETVENDOR 	= this.divData.form.cfCD_GETVENDOR;		//취득거래처
        	this.edtTY_VENDOR 		= this.divData.form.edtTY_VENDOR;		//취득거래처
        	this.edtYR_LIFE 		= this.divData.form.edtYR_LIFE;			//내용연수
        	this.ctclDT_GET 		= this.divData.form.ctclDT_GET;			//취득일자
        	this.mskQN_GET 			= this.divData.form.mskQN_GET;			//취득수량
        	this.mskAM_GET 			= this.divData.form.mskAM_GET;			//취득가액

        	//자산내역정보
        	this.edtYN_TRANS 		= this.divData.form.edtYN_TRANS;		//자산승인여부
        	this.ctclYM_DEPFINAL 	= this.divData.form.ctclYM_DEPFINAL;	//상각완료년월
        	this.edtAM_SELL 		= this.divData.form.edtAM_SELL;			//처분금액
        	this.cboTY_ASSETSTATE 	= this.divData.form.cboTY_ASSETSTATE;	//자산상태
        	this.edtDT_CHANGE 		= this.divData.form.edtDT_CHANGE;		//최종변동일자
        	this.cfCD_TAKEDEPT 		= this.divData.form.cfCD_TAKEDEPT;		//보유부서
        	this.cfCD_MAGDEPT 		= this.divData.form.cfCD_MAGDEPT;		//관리부서
        	this.edtCD_CHANGE 		= this.divData.form.edtCD_CHANGE;		//최종변동내역

        	this.btnISSUE_VAT       = this.divData.form.btnISSUE_VAT;		//증빙/부가세 버튼
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSearchSlip  = this.gfnFormButtonAdd("SearchSlip" , "fnSearchSlip"); 	// 전표조회
        	this.btnIssueSlip   = this.gfnFormButtonAdd("IssueSlip"  , "fnIssueSlip"); 		// 전표발행
        	this.btnCancelSlip  = this.gfnFormButtonAdd("CancelSlip" , "fnCancelSlip"); 	// 전표취소
        	this.btnFileUpload  = this.gfnFormButtonAdd("FileUpload" , "fnFileUpload");		// 파일관리
        };

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"		, "string");		/*법인코드*/
        	this.dsSelect.addColumn("CD_ACASSET"	, "string");		/*자산코드*/
        	this.dsSelect.addColumn("CD_ASSET"		, "string");		/*자산번호*/

        	//자산기본정보
        	this.dsList.addColumn(this.ucFlag		, "string");  		/*데이터 상태값*/
        	this.dsList.addColumn("CD_ASSET"		, "string"); 		/*자산번호*/
        	this.dsList.addColumn("YR_ACCOUNT"		, "string"); 		/*회계년도*/
        	this.dsList.addColumn("CD_CORP"			, "string"); 		/*법인코드*/
        	this.dsList.addColumn("DS_CORP"			, "string"); 		/*법인코드명*/
        	this.dsList.addColumn("CD_ACASSET"		, "string"); 		/*자산코드*/
        	this.dsList.addColumn("DS_ACASSET"		, "string"); 		/*자산코드명*/
        	this.dsList.addColumn("DS_ASSET"		, "string"); 		/*자산명*/
        	this.dsList.addColumn("YN_DEP"			, "string"); 		/*상각여부*/
        	this.dsList.addColumn("YN_DEP_H"		, "string"); 		/*상각여부*/
        	this.dsList.addColumn("CD_ASSETSEMOK"	, "string"); 		/*자산세목코드*/
        	this.dsList.addColumn("DS_ASSETSEMOK"	, "string"); 		/*자산세목명*/
        	this.dsList.addColumn("TY_DEP"			, "string"); 		/*상각방법(0:정액법,1:정률법)*/

        	//자산취득정보
        	this.dsList.addColumn("CD_GETDEPT"		, "string"); 		/*취득부서*/
        	this.dsList.addColumn("DS_DEPT_ACNT"	, "string"); 		/*취득부서명*/
        	this.dsList.addColumn("CD_GETVENDOR"	, "string"); 		/*취득거래처코드*/
        	this.dsList.addColumn("DS_GETVENDOR"	, "string"); 		/*취득거래처명칭*/
        	this.dsList.addColumn("TY_ACQUIRE"		, "string"); 		/*결제방법*/
        	this.dsList.addColumn("YR_LIFE"			, "int"); 			/*내용연수*/
        	this.dsList.addColumn("NO_CASHACCOUNT"	, "string"); 		/*거래처계좌번호*/
        	this.dsList.addColumn("NM_CASHACCOUNT"	, "string"); 		/*거래처계좌번호명*/
        	this.dsList.addColumn("DT_CASH"			, "string"); 		/*집행요청일자*/
        	this.dsList.addColumn("DT_GET"			, "string"); 		/*취득일자*/
        	this.dsList.addColumn("TY_GETSTATE"		, "string"); 		/*취득상태*/
        	this.dsList.addColumn("TY_GET"			, "string"); 		/*취득방법*/
        	this.dsList.addColumn("QN_GET"			, "int"); 			/*취득수량*/
        	this.dsList.addColumn("AM_GET"			, "BIGDECIMAL"); 	/*취득가액*/
        	this.dsList.addColumn("AM_VAT"			, "BIGDECIMAL"); 	/*부가세액*/
        	this.dsList.addColumn("AM_SUPPLY"		, "BIGDECIMAL"); 	/*공급가액*/
        	this.dsList.addColumn("AM_EXTRA"		, "BIGDECIMAL"); 	/*부대비용*/
        	this.dsList.addColumn("AM_SUM"			, "BIGDECIMAL"); 	/*합계*/
        // 	this.dsList.addColumn("CD_PROOF"		, "string"); 		/*증빙선택*/
        // 	this.dsList.addColumn("DS_PROOF"		, "string"); 		/*증빙선택*/
        // 	this.dsList.addColumn("TY_VATBGJE"		, "string"); 		/*불공제사유*/

        	this.dsList.addColumn("VAT_RATE"		, "string"); 		/*부가세율*/
        	//this.dsList.addColumn("YN_ASSET"		, "string"); 		/*자산/비품여부*/
        	//this.dsList.addColumn("ISSUE_ID"		, "string"); 		/*전자세금계산서번호*/

        	//자산내역정보
        	this.dsList.addColumn("YN_TRANS"		, "string"); 		/*자산승인여부*/
        	this.dsList.addColumn("YM_DEPFINAL"		, "string"); 		/*상각완료년월*/
        	this.dsList.addColumn("DT_ACCOUNT"		, "string"); 		/*신청일자*/
        	this.dsList.addColumn("AM_SELL"			, "BIGDECIMAL"); 	/*처분금액*/
        	this.dsList.addColumn("TY_ASSETSTATE"	, "string"); 		/*자산상태*/
        	this.dsList.addColumn("DT_CHANGE"		, "string"); 		/*최종변동일자*/
        	this.dsList.addColumn("CD_TAKEDEPT"		, "string"); 		/*보유부서*/
        	this.dsList.addColumn("DS_TAKEDEPT"		, "string"); 		/*보유부서명*/
        	this.dsList.addColumn("CD_MAGDEPT"		, "string"); 		/*관리부서*/
        	this.dsList.addColumn("DS_MAGDEPT"		, "string"); 		/*관리부서명*/
        	this.dsList.addColumn("ID_MAINMAG"		, "string"); 		/*자산관리자(정)*/
        	this.dsList.addColumn("DS_MAINMAG"		, "string"); 		/*자산관리자(정)명*/
        	this.dsList.addColumn("ID_SUBMAG"		, "string"); 		/*자산관리자(부)*/
        	this.dsList.addColumn("DS_SUBMAG"		, "string"); 		/*자산관리자(부)명*/
        	this.dsList.addColumn("CD_CHANGE"		, "string"); 		/*최종변동내역*/
        	this.dsList.addColumn("DT_JOSA"			, "string"); 		/*조사일자*/
        	this.dsList.addColumn("AM_CURRENT"		, "BIGDECIMAL"); 	/*현재가*/

        	//자산취득추가정보
        	this.dsList.addColumn("NO_MANAGE"		, "string"); 		/*관리번호*/
        	this.dsList.addColumn("RM_SIZE"			, "string"); 		/*규격*/
        	this.dsList.addColumn("DS_JANGO"		, "string"); 		/*보유잔고*/

        	//그외 컬럼들...
        // 	this.dsList.addColumn("DT_ENTRY"		, "string"); 		/*등록일자*/
        // 	this.dsList.addColumn("DT_REGI"			, "string"); 		/*등기일*/
        // 	this.dsList.addColumn("SZ_SQUARE"		, "int"); 			/*면적*/
        // 	this.dsList.addColumn("NO_AREA"			, "string"); 		/*지번*/
        // 	this.dsList.addColumn("NO_GIMOK"		, "string"); 		/*지목*/
        // 	this.dsList.addColumn("AM_PUBLIC"		, "BIGDECIMAL"); 	/*공지시가*/
        // 	this.dsList.addColumn("RM_USE"			, "string"); 		/*용도*/
        // 	this.dsList.addColumn("DS_SOJAE"		, "string"); 		/*소재지*/
        // 	this.dsList.addColumn("NO_REGI"			, "string"); 		/*등기번호*/
        // 	this.dsList.addColumn("TY_MCTYPE"		, "string"); 		/*장비종류*/
        // 	this.dsList.addColumn("NO_ENTRY"		, "string"); 		/*등기번호*/
        // 	this.dsList.addColumn("NO_HMC"			, "string"); 		/*중기번호*/
        // 	this.dsList.addColumn("NO_ENGINE"		, "string"); 		/*엔진번호*/
        // 	this.dsList.addColumn("DS_MANUFAC"		, "string"); 		/*제작회사명*/
        // 	this.dsList.addColumn("NO_CARENGINE"	, "string"); 		/*차대번호*/
        // 	this.dsList.addColumn("DS_SHIPSITE"		, "string"); 		/*선적지*/
        // 	this.dsList.addColumn("DS_MEMO"			, "string"); 		/*기부내용*/
        // 	this.dsList.addColumn("ID_TRANS"		, "string"); 		/*작업자*/
        // 	this.dsList.addColumn("CD_CARDNO"		, "string"); 		/*개인형법인카드*/
        // 	this.dsList.addColumn("NO_DOC"			, "string"); 		/*문서번호*/
        	this.dsList.addColumn("CD_SLIP"			, "string"); 		/*전표번호*/
        	this.dsList.addColumn("TY_DEPT"			, "string"); 		/*현장구분(L-울산,''-울산외)*/
        // 	this.dsList.addColumn("DT_NOTE"			, "string"); 		/*어음집행일*/
        // 	this.dsList.addColumn("AM_CASH"			, "BIGDECIMAL"); 	/*현금*/
        // 	this.dsList.addColumn("AM_NOTE"			, "BIGDECIMAL"); 	/*어음*/
        // 	this.dsList.addColumn("DT_NOTE_EXPIRED" , "string"); 		/*어음만기일*/
        // 	this.dsList.addColumn("TY_GUBUN"		, "string"); 		/*사업구분*/
        // 	this.dsList.addColumn("CD_BANK"			, "string"); 		/*금융기관코드(FI)*/
        // 	this.dsList.addColumn("CD_SIDEBANK"		, "string"); 		/*은행지점코드*/
        // 	this.dsList.addColumn("NO_ACCOUNT_B2B"	, "string"); 		/*어음계좌번호*/
        // 	this.dsList.addColumn("NM_ACCOUNT_B2B"	, "string"); 		/*어음계좌번호명*/
        // 	this.dsList.addColumn("TY_GUBUN_B2B"	, "string"); 		/*전자어음계자구분(21)*/
        // 	this.dsList.addColumn("CD_BANK_B2B"		, "string"); 		/*전자어음은행코드*/
        // 	this.dsList.addColumn("CD_SIDEBANK_B2B"	, "string"); 		/*전자어음지점코드*/
        // 	this.dsList.addColumn("AUTO_ASSET"		, "string"); 		/*자산번호 리턴용*/
        // 	this.dsList.addColumn("YN_CONNECT"		, "string"); 		/* 전표열결 */

        	this.dsSave = new Dataset();
        	//자산기본정보
        	this.dsSave.addColumn("CD_ASSET"		, "string"); 		/*자산번호*/
        	this.dsSave.addColumn("DS_ASSET"		, "string"); 		/*자산명*/
        	//this.dsSave.addColumn("YR_ACCOUNT"		, "string"); 		/*회계년도*/
        	this.dsSave.addColumn("CD_CORP"			, "string"); 		/*법인코드*/
        	this.dsSave.addColumn("CD_ACASSET"		, "string"); 		/*자산코드*/
        	this.dsSave.addColumn("YN_DEP"			, "string"); 		/*상각여부*/
        	//this.dsSave.addColumn("CD_ASSETSEMOK"	, "string"); 		/*세목코드*/
        	this.dsSave.addColumn("TY_DEP"			, "string"); 		/*상각방법(0:정액법,1:정률법)*/

        	//자산취득정보
        	this.dsSave.addColumn("CD_GETDEPT"		, "string"); 		/*취득부서*/
        	this.dsSave.addColumn("CD_GETVENDOR"	, "string"); 		/*취득거래처코드*/
        	this.dsSave.addColumn("DS_GETVENDOR"	, "string"); 		/*취득거래처명칭*/
        	this.dsSave.addColumn("TY_ACQUIRE"		, "string"); 		/*결제방법*/
        	this.dsSave.addColumn("YR_LIFE"			, "int"); 			/*내용연수*/
        // 	this.dsSave.addColumn("NO_CASHACCOUNT"	, "string"); 		/*현금 계좌번호*/
        // 	this.dsSave.addColumn("NM_CASHACCOUNT"	, "string"); 		/*계좌번호명*/
        	//this.dsSave.addColumn("DT_CASH"			, "string"); 		/*집행요청일자*/
        	this.dsSave.addColumn("DT_GET"			, "string"); 		/*취득일*/
        // 	this.dsSave.addColumn("TY_GETSTATE"		, "string"); 		/*취득상태*/
        // 	this.dsSave.addColumn("TY_GET"			, "string"); 		/*취득방법*/
        	this.dsSave.addColumn("QN_GET"			, "int"); 			/*취득수량*/
        	this.dsSave.addColumn("AM_GET"			, "BIGDECIMAL"); 	/*취득가액*/
        	this.dsSave.addColumn("AM_VAT"			, "BIGDECIMAL"); 	/*부가세액*/
        	this.dsSave.addColumn("AM_SUPPLY"		, "BIGDECIMAL"); 	/*공급가액*/
        	this.dsSave.addColumn("AM_EXTRA"		, "BIGDECIMAL"); 	/*부대비용*/
        // 	this.dsSave.addColumn("CD_PROOF"		, "string"); 		/*증빙선택*/
        // 	this.dsSave.addColumn("TY_VATBGJE"		, "string"); 		/*불공제사유*/
        // 	this.dsSave.addColumn("YN_ASSET"		, "string"); 		/*자산/비품여부*/
        // 	this.dsSave.addColumn("ISSUE_ID"		, "string"); 		/*전자세금계산서번호*/


        	//자산내역정보
        	this.dsSave.addColumn("TY_ASSETSTATE"	, "string"); 		/*자산상태*/
        	this.dsSave.addColumn("CD_TAKEDEPT"		, "string"); 		/*보유부서*/
        	this.dsSave.addColumn("CD_MAGDEPT"		, "string"); 		/*관리부서*/
        	this.dsSave.addColumn("ID_MAINMAG"		, "string"); 		/*자산관리자(정)*/
        	this.dsSave.addColumn("ID_SUBMAG"		, "string"); 		/*자산관리자(부)*/
        // 	this.dsSave.addColumn("DT_JOSA"			, "string"); 		/*조사일자*/
        // 	this.dsSave.addColumn("AM_CURRENT"		, "BIGDECIMAL"); 	/*현재가*/
        //
        	//자산취득추가정보
        // 	this.dsSave.addColumn("NO_MANAGE"		, "string"); 		/*관리번호*/
        // 	this.dsSave.addColumn("RM_SIZE"			, "string"); 		/*규격*/
        // 	this.dsSave.addColumn("DS_JANGO"		, "string"); 		/*보유잔고*/
        //
        	//그외 컬럼들...
        // 	this.dsSave.addColumn("DT_ENTRY"		, "string"); 		/*등록일자*/
        // 	this.dsSave.addColumn("DT_REGI"			, "string"); 		/*등기일*/
        // 	this.dsSave.addColumn("SZ_SQUARE"		, "int"); 			/*면적*/
        // 	this.dsSave.addColumn("NO_AREA"			, "string"); 		/*지번*/
        // 	this.dsSave.addColumn("NO_GIMOK"		, "string"); 		/*지목*/
        // 	this.dsSave.addColumn("AM_PUBLIC"		, "BIGDECIMAL"); 	/*공지시가*/
        // 	this.dsSave.addColumn("RM_USE"			, "string"); 		/*용도*/
        // 	this.dsSave.addColumn("DS_SOJAE"		, "string"); 		/*소재지*/
        // 	this.dsSave.addColumn("NO_REGI"			, "string"); 		/*등기번호*/
        // 	this.dsSave.addColumn("TY_MCTYPE"		, "string"); 		/*장비종류*/
        // 	this.dsSave.addColumn("NO_ENTRY"		, "string"); 		/*등기번호*/
        // 	this.dsSave.addColumn("NO_HMC"			, "string"); 		/*중기번호*/
        // 	this.dsSave.addColumn("NO_ENGINE"		, "string"); 		/*엔진번호*/
        // 	this.dsSave.addColumn("DS_MANUFAC"		, "string"); 		/*제작회사명*/
        // 	this.dsSave.addColumn("NO_CARENGINE"	, "string"); 		/*차대번호*/
        // 	this.dsSave.addColumn("DS_SHIPSITE"		, "string"); 		/*선적지*/
        // 	this.dsSave.addColumn("DS_MEMO"			, "string"); 		/*기부내용*/
         	this.dsSave.addColumn("ID_TRANS"		, "string"); 		/*작업자*/
         	this.dsSave.addColumn("TY_DEPT"			, "string"); 		/*현장구분(L-울산,''-울산외)*/
        // 	this.dsSave.addColumn("AM_CASH"			, "BIGDECIMAL"); 	/*현금*/

        	//부가세 팝업 전달용 컬럼
        	this.dsList.addColumn("CD_ACCOUNT"		, "string");
        	this.dsList.addColumn("DS_ACCOUNT"		, "string");
        	this.dsList.addColumn("TY_VENDOR"		, "string");


        	this.dsInsertChg = new Dataset();
        	this.dsInsertChg.addColumn("CD_ASSET"			, "string");
        	this.dsInsertChg.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("CD_CHANGE"			, "string");
        	this.dsInsertChg.addColumn("DT_CHANGE"			, "string");
        	this.dsInsertChg.addColumn("AM_CHANGE"			, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("AM_CHANGEVAT"		, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("QN_CHANGE"			, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("YR_RELIFE"			, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("YR_BEFORE"			, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("CD_CHGACCOUNT"		, "string");
        	this.dsInsertChg.addColumn("DS_MEMO"			, "string");
        	this.dsInsertChg.addColumn("ID_TRANS"			, "string");
        	this.dsInsertChg.addColumn("TY_CHGAMOUNT"		, "string");
        	this.dsInsertChg.addColumn("CD_CHGVENDOR"		, "string");
        	this.dsInsertChg.addColumn("DT_CASH"			, "string");

        	this.dsInsertChg.addColumn("AM_CASH"			, "BIGDECIMAL");
        	this.dsInsertChg.addColumn("NO_CASHACCOUNT"	, "string");
        	this.dsInsertChg.addColumn("NM_CASHACCOUNT"	, "string");

        	this.dsInsertChg.addColumn("CD_CORP"			, "string");
        	this.dsInsertChg.addColumn("CD_PROOF"			, "string");

        	this.dsDeleteChg = new Dataset();
        	this.dsDeleteChg.addColumn("CD_CORP"			, "string");
        	this.dsDeleteChg.addColumn("CD_ASSET"			, "string");
        	this.dsDeleteChg.addColumn("NO_SEQ"			, "BIGDECIMAL");

        	this.dsUpdateChg = new Dataset();
        	this.dsUpdateChg.addColumn("CD_ASSET"			, "string");
        	this.dsUpdateChg.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("CD_CHANGE"			, "string");
        	this.dsUpdateChg.addColumn("DT_CHANGE"			, "string");
        	this.dsUpdateChg.addColumn("AM_CHANGE"			, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("AM_CHANGEVAT"		, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("QN_CHANGE"			, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("YR_RELIFE"			, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("YR_BEFORE"			, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("CD_CHGACCOUNT"		, "string");
        	this.dsUpdateChg.addColumn("DS_MEMO"			, "string");
        	this.dsUpdateChg.addColumn("ID_TRANS"			, "string");
        	this.dsUpdateChg.addColumn("TY_CHGAMOUNT"		, "string");
        	this.dsUpdateChg.addColumn("CD_CHGVENDOR"		, "string");
        	this.dsUpdateChg.addColumn("DT_CASH"			, "string");
        	this.dsUpdateChg.addColumn("AM_CASH"			, "BIGDECIMAL");
        	this.dsUpdateChg.addColumn("NO_CASHACCOUNT"	, "string");
        	this.dsUpdateChg.addColumn("NM_CASHACCOUNT"	, "string");
        	this.dsUpdateChg.addColumn("CD_CORP"			, "string");
        	this.dsUpdateChg.addColumn("CD_PROOF"			, "string");

        	this.dsInsertMove = new Dataset();
        	this.dsInsertMove.addColumn("CD_ASSET"			, "string");
        	this.dsInsertMove.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsInsertMove.addColumn("DT_FRTAKE"			, "string");
        	this.dsInsertMove.addColumn("CD_FRDEPT"			, "string");
        	this.dsInsertMove.addColumn("AM_GETNATION"		, "BIGDECIMAL");
        	this.dsInsertMove.addColumn("YN_GET"			, "string");
        	this.dsInsertMove.addColumn("ID_TRANS"			, "string");
        	this.dsInsertMove.addColumn("NO_DOC"			, "string");
        	this.dsInsertMove.addColumn("ID_MAINMAG"		, "string");
        	this.dsInsertMove.addColumn("ID_SUBMAG"			, "string");
        	this.dsInsertMove.addColumn("TY_FRDEPT"			, "string");
        	this.dsInsertMove.addColumn("YN_MULTI"			, "string");
        	this.dsInsertMove.addColumn("CD_ACASSET"		, "string");
        	this.dsInsertMove.addColumn("CD_CORP"			, "string");

        	this.dsDeleteMove = new Dataset();
        	this.dsDeleteMove.addColumn("CD_CORP"			, "string");
        	this.dsDeleteMove.addColumn("CD_ASSET"			, "string");
        	this.dsDeleteMove.addColumn("NO_SEQ"			, "BIGDECIMAL");

        	this.dsUpdateMove = new Dataset();
        	this.dsUpdateMove.addColumn("CD_ASSET"			, "string");
        	this.dsUpdateMove.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsUpdateMove.addColumn("DT_FRTAKE"			, "string");
        	this.dsUpdateMove.addColumn("CD_FRDEPT"			, "string");
        	this.dsUpdateMove.addColumn("AM_GETNATION"		, "BIGDECIMAL");
        	this.dsUpdateMove.addColumn("YN_GET"			, "string");
        	this.dsUpdateMove.addColumn("ID_TRANS"			, "string");
        	this.dsUpdateMove.addColumn("NO_DOC"			, "string");
        	this.dsUpdateMove.addColumn("ID_MAINMAG"		, "string");
        	this.dsUpdateMove.addColumn("ID_SUBMAG"			, "string");
        	this.dsUpdateMove.addColumn("TY_FRDEPT"			, "string");
        	this.dsUpdateMove.addColumn("CD_CORP"			, "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_ASSET", "string");			//자산번호
        	this.dsIssueSlip.addColumn("DT_CHANGE", "string");			//변동일자
        	this.dsIssueSlip.addColumn("CD_CHANGE", "string");			//자산구분
        	this.dsIssueSlip.addColumn("CD_SITE_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_SLIP", "string");		//전표번호
        }

        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsListChg, "DH", "DHN_ASSETCHG");      //변동정보
        	this.gfnGridInit(this.dxGrid2, this.dsListMove, "DH", "DHN_ASSETMOVE");   //이동정보
        	this.gfnGridInit(this.dxGrid3, this.dsListDep, "DH", "DHN_ASSETDEP2");     //감가상각정보


        	//조회 - 법인코드
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//조회 - 자산코드
        	this.ccfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//조회 - 자산번호
        	this.ccfCD_ASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//자산기본정보 - 자산코드
        	this.cfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACASSET.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//자산기본정보 - 자산세목코드
        	this.cfCD_ASSETSEMOK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ASSETSEMOK.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//자산취득정보 - 취득부서
        	this.cfCD_GETDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GETDEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//자산취득정보 - 취득거래처
        	this.cfCD_GETVENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GETVENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//자산내역정보 - 보유부서
        	this.cfCD_TAKEDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_TAKEDEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//자산내역정보 - 관리부서
        	this.cfCD_MAGDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_MAGDEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	this.dsListChg.addEventHandler("onrowposchanged", this.dsListChg_RowposChanged, this);
        	//this.dsListChg.addEventHandler("cancolumnchange", this.dsListChg_CanColumnChange, this);
        	this.dsListChg.addEventHandler("oncolumnchanged", this.dsListChg_OnColumnChanged, this);

        	this.dsListMove.addEventHandler("oncolumnchanged", this.dsListChg_OnColumnChanged, this);

            //헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	this.dxGrid.EnterCell = "fnGridChg_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGridChg_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGridChg_AfterCDTextChanged";

        	this.dxGrid2.EnterCell = "fnGridMove_EnterCell";
        	this.dxGrid2.BeforeUserDataSetParam = "fnGridMove_BeforeUserDataSetParam";
        	this.dxGrid2.AfterCDTextChanged = "fnGridChg_AfterCDTextChanged";

        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_CHANGE"), "combodataset", "expr:CD_CHANGE == '00' ? 'dsCD_CHANGE' : 'dsCD_CHANGE2'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TY_CHGAMOUNT"), "combodataset", "expr:CD_CHANGE == '01' ? 'dsTY_CHGAMOUNT01' : CD_CHANGE == '03' ? 'dsTY_CHGAMOUNT03' : 'dsTY_CHGAMOUNT'");

        	this.dxGrid3.setFormatColProperty(3, "size", 0);
        	this.dxGrid3.setFormatColProperty(5, "size", 0);
        	this.dxGrid3.setFormatColProperty(6, "size", 0);
        	this.dxGrid3.setFormatColProperty(7, "size", 0);
        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);

        	var tabIdx = this.divData.form.tabData.tabindex;

        	switch(tabIdx) {
        		case 0:
        			this.gfnGridClear(this.dxGrid);
        			break;
        		case 1:
        			this.gfnGridClear(this.dxGrid2);
        			break;
        		case 2:
        			this.gfnGridClear(this.dxGrid3);
        			break;
        	}
        	this.dsList.clearData();
        	this.dsListChg.clearData();
        	this.dsListMove.clearData();
        	this.dsListDep.clearData();
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {

        		//트렌젝션 후 컬럼이 지워져서 추가 처리
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.gfnGridAfterSelect(this.dxGrid3);

        		if(this.dsList.rowcount > 0) {
        			//검색조건 자산코드 셋팅
        			this.dsSearch.set_enableevent(false);
        			this.dsSearch.setColumn(0, "CD_ACASSET", this.dsList.getColumn(0, "CD_ACASSET"));
        			this.dsSearch.setColumn(0, "DS_ACASSET", this.dsList.getColumn(0, "DS_ACASSET"));
        			this.dsSearch.set_enableevent(true);
        			//최종변동일자
        			this.ymDepfinal = this.gfnNvl(this.dsList.getColumn(0, "YM_DEPFINAL"), "00000000");
        			this.fnCompEnable("N");
        		}

        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "CD_SLIP", this.gfnNvl(this.dsList.getColumn(0, "CD_SLIP"),""));
        		this.dsSearch.set_enableevent(true);

        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo"){
        		if (errorCode == 0) {
        			var nRow = this.dsTY_VATBGJE.insertRow(0);
        			this.dsTY_VATBGJE.setColumn(nRow, "CD_CODE", "");
        			this.dsTY_VATBGJE.setColumn(nRow, "DS_CODE", "");
        			this.dsTY_VATBGJE.set_index(0);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "issueSlip"){
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
        	}
        }

        this.fnSelect = function() {

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ASSET"))) {
        		this.gfnAlert("자산번호를 입력하세요.");
        		this.ccfCD_ASSET.form.CDTextBox.setFocus();
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.gfnGridBeforeSelect(this.dxGrid3);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_ACASSET"	, this.dsSearch.getColumn(0, "CD_ACASSET"));
        	this.dsSelect.setColumn(0, "CD_ASSET"	, nexacro.replaceAll(this.dsSearch.getColumn(0, "CD_ASSET"),"-",""));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectChg=dsSelect selectMove=dsSelect selectDep=dsSelect";
        	var outData     = "dsList=select0 dsListChg=selectChg0 dsListMove=selectMove0 dsListDep=selectDep0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnAddValidation = function() {

        	var cdAcasset = this.dsSearch.getColumn(0, "CD_ACASSET");

        	if(cdAcasset == "30" || cdAcasset == "31" || cdAcasset == "32" || cdAcasset == "33" ||
        	   cdAcasset == "34" || cdAcasset == "35" || cdAcasset == "36" || cdAcasset == "37" ||
        	   cdAcasset == "38") {
        		this.gfnAlert("무형자산은 자산변동을 할 수 없습니다.");
        		return false;
        	}
        	return true;
        }

        this.fnAdd = function() {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	switch(tabIdx) {
        		case 0:
        			if(!this.fnAddValidation()) return;
        			var nrow = this.gfnGridAdd(this.dxGrid, "bottom");

        			this.dsListChg.set_enableevent(false);

        			this.dsListChg.setColumn(nrow, "NO_SEQ", 0);
        			this.dsListChg.setColumn(nrow, "CD_CHANGE", "");
        			this.dsListChg.setColumn(nrow, "DT_CHANGE", "");
        			this.dsListChg.setColumn(nrow, "AM_CHANGE", 0);
        			this.dsListChg.setColumn(nrow, "AM_CHANGEVAT", 0);
        			this.dsListChg.setColumn(nrow, "QN_CHANGE", "");
        			this.dsListChg.setColumn(nrow, "YR_RELIFE", "");
        			this.dsListChg.setColumn(nrow, "YR_BEFORE", "");
        			this.dsListChg.setColumn(nrow, "TY_CHGAMOUNT", "");
        			this.dsListChg.setColumn(nrow, "CD_CARDNO", "");
        			this.dsListChg.setColumn(nrow, "TY_VENDOR", "");
        			this.dsListChg.setColumn(nrow, "CD_VENDOR", "");
        			this.dsListChg.setColumn(nrow, "DS_VENDOR", "");
        			this.dsListChg.setColumn(nrow, "CD_CHGACCOUNT", "");
        			this.dsListChg.setColumn(nrow, "DS_ACCOUNT", "");
        			this.dsListChg.setColumn(nrow, "NO_DOC", "");
        			this.dsListChg.setColumn(nrow, "DS_MEMO", "");
        			this.dsListChg.setColumn(nrow, "CD_SLIP", "");
        			this.dsListChg.setColumn(nrow, "DT_CASH", "");
        			this.dsListChg.setColumn(nrow, "DT_NOTE", "");
        			this.dsListChg.setColumn(nrow, "AM_CASH", "");
        			this.dsListChg.setColumn(nrow, "AM_NOTE", "");
        			this.dsListChg.setColumn(nrow, "DT_NOTE_EXPIRED", "");
        			this.dsListChg.setColumn(nrow, "NO_CASHACCOUNT", "");
        			this.dsListChg.setColumn(nrow, "NM_CASHACCOUNT", "");
        			this.dsListChg.setColumn(nrow, "TY_GUBUN", "");
        			this.dsListChg.setColumn(nrow, "CD_BANK", "");
        			this.dsListChg.setColumn(nrow, "CD_SIDEBANK", "");
        			this.dsListChg.setColumn(nrow, "NO_ACCOUNT_B2B", "");
        			this.dsListChg.setColumn(nrow, "NM_ACCOUNT_B2B", "");
        			this.dsListChg.setColumn(nrow, "TY_GUBUN_B2B", "");
        			this.dsListChg.setColumn(nrow, "CD_BANK_B2B", "");
        			this.dsListChg.setColumn(nrow, "CD_SIDEBANK_B2B", "");

        			this.dsListChg.setColumn(nrow, "CD_PROOF", "");	// 증빙코드
        			this.dsListChg.setColumn(nrow, "DS_PROOF", "");	// 증빙명칭
        			this.dsListChg.setColumn(nrow, "AM_CHANGESUM", 0);	// 공급가
        			this.dsListChg.setColumn(nrow, "VAT_RATE", 0);		// 부가세율

        			this.dsListChg.set_enableevent(true);
        			break;
        		case 1:
        			var nrow = this.gfnGridAdd(this.dxGrid2, "bottom");

        			this.dsListMove.set_enableevent(false);

        			this.dsListMove.setColumn(nrow, "NO_SEQ"	  , 0);
        			this.dsListMove.setColumn(nrow, "AM_GETNATION", this.dsList.getColumn(0, "AM_GETNATION"));
        			this.dsListMove.setColumn(nrow, "TY_FRDEPT"	  , "M/H");

        			this.dsListMove.set_enableevent(true);
        			break;
        		case 2:

        			break;
        	}
        }

        this.fnDelValidation = function() {
        	//trace(" fnDelValidation=>" + this.gfnGridIsRow(this.dxGrid));

        	switch(this.tabData.tabindex) {
        	case 0:
        		if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        		if(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_CHANGE") == "00") {
        			this.gfnAlert("변동구분이 취득인 자료는 삭제할 수 없습니다.");
        			return false;
        		}

        		if(this.gfnGetDiffMonth(this.ymDepfinal , this.dsListChg.getColumn(this.dsListChg.rowposition, "DT_CHANGE")) <= 0) {
        			this.gfnAlert("해당월에 감가상각이 완료되어, 해당월로 자산 변동이 불가능합니다.");
        			return false;
        		}

        		if(!this.gfnIsNull(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_SLIP"))) {
        			this.gfnAlert("전표발행된건은 삭제할 수 없습니다.");
        			return false;
        		}
        		break;
        	case 1:
        		if(!this.gfnGridIsRow(this.dxGrid2)) {return false;}

        		if(this.dsListMove.getColumn(this.dsListMove.rowposition, "YN_GET") == "취득") {
        			this.gfnAlert("취득여부가 취득인 자료는 삭제할 수 없습니다.");
        			return false;
        		}

        		if(!this.gfnIsNull(this.dsListMove.getColumn(this.dsListMove.rowposition, "CD_TRADE_FR"))) {
        			this.gfnAlert("전표발행된건은 삭제할 수 없습니다.");
        			return false;
        		}

        		return true;
        		break;
        		default:
        	}


        	return true;
        }

        this.fnDel = function() {
        	if(!this.fnDelValidation()) return;

        	switch(this.tabData.tabindex) {
        	case 0:
        		this.gfnGridDel(this.dxGrid);
        		break;
        	case 1:
        		this.gfnGridDel(this.dxGrid2);
        		break;
        		break;
        	case 2:
        		break;
        	}
        }

        this.fnSave = function() {

        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;
        	//if (!this.fnSaveValidate()) return;

        	this.dsResult.clearData();
        	//var flag = this.gfnGetFlag(this.dsList, 0);
        	var flag = this.gfnGetFormStatus(this);

        	//저장용 데이터 셋팅
        	this.fnSetSaveData(flag);

        	if (this.dsSave.rowcount != 0 ) {
        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData 		= "update=dsSave";
        		var outData		= "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							 strSvcType , 	// transaction을 요청할 구분
        							 inProc,		// Procedure 정보 Dataset 이름
        							 inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							 outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							 strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							 callBackFnc); 	// 통신방법 정의 [생략가능]
        	}

        	switch(this.tabData.tabindex) {
        	case 0:
        		this.fnSaveChg();
        		break;
        	case 1:
        		this.fnSaveMove();
        		break;
        	case 2:
        		break;
        	}
        }

        //저장용 데이터 셋팅
        this.fnSetSaveData = function (flag)
        {
        	this.dsSave.clearData();
        	this.dsResult.clearData();

        	if(flag == "U"){
        		var nrow = this.dsSave.addRow();
        	}
        	trace(" fnSetSaveData=>" + flag);
        	switch(flag) {
        		case "U":
        			//var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_ASSET"			, nexacro.replaceAll(this.gfnTrim(this.dsList.getColumn(0, "CD_ASSET")),"-",""));	//자산번호
        			this.dsSave.setColumn(nrow, "CD_CORP"			, this.gfnTrim(this.dsList.getColumn(0, "CD_CORP")));					//법인코드
        			this.dsSave.setColumn(nrow, "CD_ACASSET"  		, this.gfnTrim(this.dsList.getColumn(0, "CD_ACASSET")));				//자산코드
        			this.dsSave.setColumn(nrow, "DS_ASSET"			, this.gfnTrim(this.dsList.getColumn(0, "DS_ASSET")));					//자산명칭
        			this.dsSave.setColumn(nrow, "YN_DEP"			, this.gfnTrim(this.dsList.getColumn(0, "YN_DEP")));					//상각여부
        			this.dsSave.setColumn(nrow, "TY_DEP"		    , this.gfnTrim(this.dsList.getColumn(0, "TY_DEP")));					//상각방법

        			//자산취득정보
        			this.dsSave.setColumn(nrow, "CD_GETDEPT"		, this.gfnTrim(this.dsList.getColumn(0, "CD_GETDEPT")));				//취득부서
        			this.dsSave.setColumn(nrow, "CD_GETVENDOR"		, this.gfnTrim(this.dsList.getColumn(0, "CD_GETVENDOR")));				//취득거래처
        			this.dsSave.setColumn(nrow, "DS_GETVENDOR"		, this.gfnTrim(this.dsList.getColumn(0, "DS_GETVENDOR")));				//취득거래처명
        			this.dsSave.setColumn(nrow, "TY_ACQUIRE"		, this.gfnTrim(this.dsList.getColumn(0, "TY_ACQUIRE")));				//결재방법
        			this.dsSave.setColumn(nrow, "YR_LIFE"			, this.gfnNvl(this.dsList.getColumn(0, "YR_LIFE"), 0));					//내용연수
        			this.dsSave.setColumn(nrow, "DT_GET"			, this.gfnTrim(this.dsList.getColumn(0, "DT_GET")));					//취득일자

        			this.dsSave.setColumn(nrow, "QN_GET"			, this.gfnNvl(this.dsList.getColumn(0, "QN_GET"),0));					//취득수량
        			this.dsSave.setColumn(nrow, "AM_GET"			, this.gfnNvl(this.dsList.getColumn(0, "AM_GET"),0));					//취득가액
        			this.dsSave.setColumn(nrow, "AM_VAT"			, this.gfnNvl(this.dsList.getColumn(0, "AM_VAT"),0));					//부가세액
        			this.dsSave.setColumn(nrow, "AM_SUPPLY"			, this.gfnNvl(this.dsList.getColumn(0, "AM_SUPPLY"),0));				//공급가액
        			this.dsSave.setColumn(nrow, "AM_EXTRA"			, this.gfnNvl(this.dsList.getColumn(0, "AM_EXTRA"),0));					//부대비용

        			//자산내역정보
        			this.dsSave.setColumn(nrow, "TY_ASSETSTATE"		, this.gfnTrim(this.dsList.getColumn(0, "TY_ASSETSTATE")));				//자산상태
        			this.dsSave.setColumn(nrow, "TY_DEPT"			, this.gfnTrim(this.dsList.getColumn(0, "TY_TAKEDEPT")));				//부서구분??
        			this.dsSave.setColumn(nrow, "CD_TAKEDEPT"		, this.gfnTrim(this.dsList.getColumn(0, "CD_TAKEDEPT")));				//보유부서
        			this.dsSave.setColumn(nrow, "CD_MAGDEPT"		, this.gfnTrim(this.dsList.getColumn(0, "CD_MAGDEPT")));				//관리부서
        			this.dsSave.setColumn(nrow, "ID_MAINMAG"		, this.gfnTrim(this.dsList.getColumn(0, "ID_MAINMAG")));				//자산관리자(정)
        			this.dsSave.setColumn(nrow, "ID_SUBMAG"			, this.gfnTrim(this.dsList.getColumn(0, "ID_SUBMAG")));					//자산관리자(부)

        			this.dsSave.setColumn(nrow, "ID_TRANS"			, this.AuthClient.ID_USER);

        			break;

        	}
        };

        this.fnExcel = function() {
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid;
        	arrSheetName[0] = "자산변동";
        	arrGrid[1] = this.dxGrid2;
        	arrSheetName[1] = "자산이동";
        	arrGrid[2] = this.dxGrid3;
        	arrSheetName[2] = "자산감가상각";
        	this.gfnExcelExportMulti(arrGrid,  arrSheetName, this.titletext);
        }

        this.fnSaveChg = function ()
        {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (!this.fnSaveValidate(this.dsListChg)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsertChg.clearData();
        	this.dsUpdateChg.clearData();
        	this.dsDeleteChg.clearData();

        	var cdAsset = nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")),"-","");

        	for (var i = 0; i < this.dsListChg.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListChg, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertChg.addRow();
        				this.dsInsertChg.setColumn(nrow, "CD_ASSET"			, cdAsset);														//자산번호
        				this.dsInsertChg.setColumn(nrow, "NO_SEQ"			, this.dsListChg.getColumn(i, "NO_SEQ"));							//순번
        				this.dsInsertChg.setColumn(nrow, "CD_CHANGE"		, this.dsListChg.getColumn(i, "CD_CHANGE"));						//변동구분
        				this.dsInsertChg.setColumn(nrow, "DT_CHANGE"		, this.dsListChg.getColumn(i, "DT_CHANGE"));						//변동일자
        				this.dsInsertChg.setColumn(nrow, "AM_CHANGE"		, this.dsListChg.getColumn(i, "AM_CHANGE"));						//변동금액
        				this.dsInsertChg.setColumn(nrow, "AM_CHANGEVAT"		, this.dsListChg.getColumn(i, "AM_CHANGEVAT"));					//변동부가세
        				this.dsInsertChg.setColumn(nrow, "QN_CHANGE"		, this.dsListChg.getColumn(i, "QN_CHANGE"));						//변동수량
        				this.dsInsertChg.setColumn(nrow, "YR_RELIFE"		, nexacro.toNumber(this.dsListChg.getColumn(i, "YR_RELIFE"),0));	//내용연수
        				this.dsInsertChg.setColumn(nrow, "YR_BEFORE"		, nexacro.toNumber(this.dsListChg.getColumn(i, "YR_BEFORE"),0));	//변동전내용연수
        				this.dsInsertChg.setColumn(nrow, "CD_CHGACCOUNT"	, this.dsListChg.getColumn(i, "CD_CHGACCOUNT"));					//대체계정코드
        				this.dsInsertChg.setColumn(nrow, "DS_MEMO"			, this.dsListChg.getColumn(i, "DS_MEMO"));							//적요
        				this.dsInsertChg.setColumn(nrow, "ID_TRANS"			, this.AuthClient.ID_USER);										//등록자ID
        				this.dsInsertChg.setColumn(nrow, "CD_PROOF"			, this.dsListChg.getColumn(i, "CD_PROOF"));						//증빙

        				//결재방법 셋팅
        				if(this.dsListChg.getColumn(i, "CD_CHANGE") == "01") {	//자본적 지출
        					this.dsInsertChg.setColumn(nrow, "TY_CHGAMOUNT", this.dsListChg.getColumn(i, "TY_CHGAMOUNT"));
        				} else if(this.dsListChg.getColumn(i, "CD_CHANGE") == "02") {	//폐기
        					this.dsInsertChg.setColumn(nrow, "TY_CHGAMOUNT", "");
        				} else if(this.dsListChg.getColumn(i, "CD_CHANGE") == "03") {	//매각
        					//if(this.dsListChg.getColumn(i, "TY_CHGAMOUNT") == "0") {
        						this.dsInsertChg.setColumn(nrow, "TY_CHGAMOUNT", this.dsListChg.getColumn(i, "TY_CHGAMOUNT"));
        					//}
        				}

        				this.dsInsertChg.setColumn(nrow, "CD_CHGVENDOR"		, this.dsListChg.getColumn(i, "CD_VENDOR"));			//거래처
        				this.dsInsertChg.setColumn(nrow, "DT_CASH"			, this.dsListChg.getColumn(i, "DT_CASH"));				//현금청구일\
        				this.dsInsertChg.setColumn(nrow, "AM_CASH"			, this.dsListChg.getColumn(i, "AM_CASH"));				//현금금액
        				this.dsInsertChg.setColumn(nrow, "NO_CASHACCOUNT"	, this.dsListChg.getColumn(i, "NO_CASHACCOUNT"));		//현금지금계좌
        				this.dsInsertChg.setColumn(nrow, "NM_CASHACCOUNT"	, this.dsListChg.getColumn(i, "NM_CASHACCOUNT"));		//현금지급계좌명
        				this.dsInsertChg.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));			//법인코드
        				break;
        			case "U":
        				var nrow = this.dsUpdateChg.addRow();
        				this.dsUpdateChg.setColumn(nrow, "CD_ASSET"			, cdAsset);
        				this.dsUpdateChg.setColumn(nrow, "NO_SEQ"			, this.dsListChg.getColumn(i, "NO_SEQ"));
        				this.dsUpdateChg.setColumn(nrow, "CD_CHANGE"		, this.dsListChg.getColumn(i, "CD_CHANGE"));
        				this.dsUpdateChg.setColumn(nrow, "DT_CHANGE"		, this.dsListChg.getColumn(i, "DT_CHANGE"));
        				this.dsUpdateChg.setColumn(nrow, "AM_CHANGE"		, this.dsListChg.getColumn(i, "AM_CHANGE"));
        				this.dsUpdateChg.setColumn(nrow, "AM_CHANGEVAT"		, this.dsListChg.getColumn(i, "AM_CHANGEVAT"));
        				this.dsUpdateChg.setColumn(nrow, "QN_CHANGE"		, this.dsListChg.getColumn(i, "QN_CHANGE"));
        				this.dsUpdateChg.setColumn(nrow, "YR_RELIFE"		, nexacro.toNumber(this.dsListChg.getColumn(i, "YR_RELIFE"),0));
        				this.dsUpdateChg.setColumn(nrow, "YR_BEFORE"		, nexacro.toNumber(this.dsListChg.getColumn(i, "YR_BEFORE"),0));
        				this.dsUpdateChg.setColumn(nrow, "CD_CHGACCOUNT"	, this.dsListChg.getColumn(i, "CD_CHGACCOUNT"));
        				this.dsUpdateChg.setColumn(nrow, "DS_MEMO"			, this.dsListChg.getColumn(i, "DS_MEMO"));
        				this.dsUpdateChg.setColumn(nrow, "ID_TRANS"			, this.AuthClient.ID_USER);
        				this.dsUpdateChg.setColumn(nrow, "CD_PROOF"			, this.dsListChg.getColumn(i, "CD_PROOF"));						//증빙

        				if(this.dsListChg.getColumn(i, "CD_CHANGE") == "01") {
        					this.dsUpdateChg.setColumn(nrow, "TY_CHGAMOUNT", this.dsListChg.getColumn(i, "TY_CHGAMOUNT"));
        				} else if(this.dsListChg.getColumn(i, "CD_CHANGE") == "02") {
        					this.dsUpdateChg.setColumn(nrow, "TY_CHGAMOUNT", "");
        				} else if(this.dsListChg.getColumn(i, "CD_CHANGE") == "03") {
        					//if(this.dsListChg.getColumn(i, "TY_CHGAMOUNT") == "0") {
        						this.dsUpdateChg.setColumn(nrow, "TY_CHGAMOUNT", this.dsListChg.getColumn(i, "TY_CHGAMOUNT"));
        					//}
        				}

        				this.dsUpdateChg.setColumn(nrow, "CD_CHGVENDOR"		, this.dsListChg.getColumn(i, "CD_VENDOR"));
        				this.dsUpdateChg.setColumn(nrow, "DT_CASH"			, this.dsListChg.getColumn(i, "DT_CASH"));
        				this.dsUpdateChg.setColumn(nrow, "AM_CASH"			, this.dsListChg.getColumn(i, "AM_CASH"));
        				this.dsUpdateChg.setColumn(nrow, "NO_CASHACCOUNT"	, this.dsListChg.getColumn(i, "NO_CASHACCOUNT"));
        				this.dsUpdateChg.setColumn(nrow, "NM_CASHACCOUNT"	, this.dsListChg.getColumn(i, "NM_CASHACCOUNT"));
        				this.dsUpdateChg.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));
        				break;
        			case "D":
        				var nrow = this.dsDeleteChg.addRow();
        				this.dsDeleteChg.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsDeleteChg.setColumn(nrow, "CD_ASSET"		, cdAsset);
        				this.dsDeleteChg.setColumn(nrow, "NO_SEQ"			, this.dsListChg.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsertChg.rowcount == 0 && this.dsUpdateChg.rowcount == 0 && this.dsDeleteChg.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertChg=dsInsertChg updateChg=dsUpdateChg deleteChg=dsDeleteChg";
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
        };
        this.fnSaveMove = function ()
        {
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	if (!this.fnSaveValidate()) return;

        	this.dxGrid2.updateToDataset();

        	this.dsInsertMove.clearData();
        	this.dsUpdateMove.clearData();
        	this.dsDeleteMove.clearData();

        	var cdAsset = nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")),"-","");

        	for (var i = 0; i < this.dsListMove.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListMove, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertMove.addRow();
        				this.dsInsertMove.setColumn(nrow, "CD_ASSET"		, cdAsset);											//자산번호
        				this.dsInsertMove.setColumn(nrow, "NO_SEQ"			, this.dsListMove.getColumn(i, "NO_SEQ"));				//순번
        				this.dsInsertMove.setColumn(nrow, "DT_FRTAKE"		, this.dsListMove.getColumn(i, "DT_FRTAKE"));			//전입일자
        				this.dsInsertMove.setColumn(nrow, "CD_FRDEPT"		, this.dsListMove.getColumn(i, "CD_FRDEPT"));			//전입부서
        				this.dsInsertMove.setColumn(nrow, "AM_GETNATION"	, this.dsListMove.getColumn(i, "AM_GETNATION"));		//취득금액
        				this.dsInsertMove.setColumn(nrow, "YN_GET"			, "N");												//취득여부
        				this.dsInsertMove.setColumn(nrow, "ID_TRANS"		, this.AuthClient.ID_USER);							//등록자ID
        				this.dsInsertMove.setColumn(nrow, "NO_DOC"			, this.dsListMove.getColumn(i, "NO_DOC"));				//문서번호
        				this.dsInsertMove.setColumn(nrow, "ID_MAINMAG"		, this.dsListMove.getColumn(i, "ID_MAINMAG"));			//사번
        				this.dsInsertMove.setColumn(nrow, "ID_SUBMAG"		, this.dsListMove.getColumn(i, "ID_SUBMAG"));			//사번(부)

        				//부서구분
        				switch(this.dsListMove.getColumn(i, "TY_FRDEPT")) {
        					case "M/H" :
        						this.dsInsertMove.setColumn(nrow, "TY_FRDEPT"	, "M");
        						break;
        					case "하자" :
        						this.dsInsertMove.setColumn(nrow, "TY_FRDEPT"	, "H");
        						break;
        					default :
        						this.dsInsertMove.setColumn(nrow, "TY_FRDEPT"	, "B");
        				}

        				this.dsInsertMove.setColumn(nrow, "YN_MULTI"		, "N");												//적요
        				this.dsInsertMove.setColumn(nrow, "CD_ACASSET"		, "");												//자산코드
        				this.dsInsertMove.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));			//법인코드

        				break;
        			case "U":
        				var nrow = this.dsUpdateMove.addRow();
        				this.dsUpdateMove.setColumn(nrow, "CD_ASSET"		, cdAsset);											//자산번호
        				this.dsUpdateMove.setColumn(nrow, "NO_SEQ"			, this.dsListMove.getColumn(i, "NO_SEQ"));				//순번
        				this.dsUpdateMove.setColumn(nrow, "DT_FRTAKE"		, this.dsListMove.getColumn(i, "DT_FRTAKE"));			//전입일자
        				this.dsUpdateMove.setColumn(nrow, "CD_FRDEPT"		, this.dsListMove.getColumn(i, "CD_FRDEPT"));			//전입부서
        				this.dsUpdateMove.setColumn(nrow, "AM_GETNATION"	, this.dsListMove.getColumn(i, "AM_GETNATION"));		//취득금액
        				this.dsUpdateMove.setColumn(nrow, "YN_GET"			, "N");												//취득여부
        				this.dsUpdateMove.setColumn(nrow, "ID_TRANS"		, this.AuthClient.ID_USER);							//등록자ID
        				this.dsUpdateMove.setColumn(nrow, "NO_DOC"			, this.dsListMove.getColumn(i, "NO_DOC"));				//문서번호
        				this.dsUpdateMove.setColumn(nrow, "ID_MAINMAG"		, this.dsListMove.getColumn(i, "ID_MAINMAG"));			//사번
        				this.dsUpdateMove.setColumn(nrow, "ID_SUBMAG"		, this.dsListMove.getColumn(i, "ID_SUBMAG"));			//사번(부)
        				this.dsUpdateMove.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));			//법인코드
        				//부서구분
        				switch(this.dsListMove.getColumn(i, "TY_FRDEPT")) {
        					case "M/H" :
        						this.dsUpdateMove.setColumn(nrow, "TY_FRDEPT"	, "M");
        						break;
        					case "하자" :
        						this.dsUpdateMove.setColumn(nrow, "TY_FRDEPT"	, "H");
        						break;
        					default :
        						this.dsUpdateMove.setColumn(nrow, "TY_FRDEPT"	, "B");
        				}
        				break;
        			case "D":
        				var nrow = this.dsDeleteMove.addRow();
        				this.dsDeleteMove.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsDeleteMove.setColumn(nrow, "CD_ASSET"		, cdAsset);
        				this.dsDeleteMove.setColumn(nrow, "NO_SEQ"			, this.dsListMove.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsertMove.rowcount == 0 && this.dsUpdateMove.rowcount == 0 && this.dsDeleteMove.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertMove=dsInsertMove updateMove=dsUpdateMove deleteMove=dsDeleteMove";
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
        };

        this.fnPrint = function() {
        }

        this.fnSaveValidate = function(objGrid) {
        	var strMsg = "";
        	var bInEmpty = true;

        	switch(this.tabData.tabIndex) {
        	case 0 :
        		var cntCdChange = 0;

        		for(var i = 0 ; i < objGrid.rowcount ; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			// 구분자 '자본적지출'인 경우
        			if(flag != "D") {
        				if(objGrid.getColumn(i, "CD_CHANGE") == "01"){
        					cntCdChange++;
        				}
        			}

        			if(this.gfnIsNull(flag) || flag == "D") {
        				continue;
        			}

        			if(!this.gfnIsNull(objGrid.getColumn(i, "DT_CHANGE"))) {
        				if(this.gfnGetDiffMonth(this.ymDepfinal, this.gfnTrim(objGrid.getColumn(i, "DT_CHANGE")).substring(0, 6)) <= 0) {
        					strMsg += "해당월에 감가상각이 완료되어, 해당월로 자산 변동이 불가능합니다.\n";
        					bInEmpty = false;
        				}
        			}

        			switch(objGrid.getColumn(i, "CD_CHANGE")) {
        				case "01" : //자본적지출
        				case "03" : //매각
        					if(nexacro.toNumber(objGrid.getColumn(i, "AM_CHANGE"),0) == 0) {
        						strMsg += "변동금액은 반드시 입력 하셔야 합니다.\n";
        						bInEmpty = false;
        					}

        					if(this.gfnIsNull(objGrid.getColumn(i, "CD_VENDOR"))) {
        						strMsg += "거래처는 반드시 입력 하셔야 합니다.\n";
        						bInEmpty = false;
        					}
        					break;
        				case "02" : //폐기
        					break;
        			}

        			if(i > 0) {
        				if(this.gfnGetDiffDate(objGrid.getColumn(i, "DT_CHANGE"), objGrid.getColumn(i - 1, "DT_CHANGE")) > 0) {
        					strMsg += "최종 변동일자보다 커야합니다.\n";
        					bInEmpty = false;
        				}
        			}

        			if(!bInEmpty) {
        				this.gfnAlert(strMsg);
        				return bInEmpty;
        			}
        		}
        		break;
        	case 1 :
        		var rowCnt = this.dsListMove.rowcount;

        		for(var i = 0 ; i < this.dsListMove.rowcount ; i++) {
        			var flag = this.gfnGetFlag(this.dsListMove, i);

        			if(this.gfnIsNull(flag) || flag == "D") {
        				continue;
        			}

        			if(i > 0) {
        				if(this.gfnGetDiffDate(this.dsListMove.getColumn(i, "DT_FRTAKE"), this.dsListMove.getColumn(i - 1, "DT_FRTAKE")) >= 0) {
        					strMsg += "최종 전입일자보다 커야합니다.\n";
        					bInEmpty = false;
        				}
        			}

        			if(this.dsListMove.getColumn(i-1, "CD_FRDEPT") == this.dsListMove.getColumn(i, "CD_FRDEPT")){
        				strMsg += "전입부서와 전출부서는 달라야합니다\n";
        				bInEmpty = false;
        			}

        			if(!bInEmpty) {
        				this.gfnAlert(strMsg);
        				return bInEmpty;
        			}
        		}
        		break;
        	default:
        	}

        	return bInEmpty;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsList.getColumn(0, "CD_CORP");

        	//trace("코드파인드->" + id);
        	//법인코드(DHX_CFCORP) 조회조건/입력용
        	if(id == "ccfCD_CORP" || id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);

        	}

        	//조회 - 자산코드(DHX_CFASSETINFO)
        	if(id == "ccfCD_ACASSET") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP"	, "Y");

        	}

        	//조회 - 자산번호(DHX_CFASSET_BY_ACASSET)
        	if(id == "ccfCD_ASSET") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_ACASSET"	, this.dsSearch.getColumn(0, "CD_ACASSET"));
        		dsUserParam.setColumn(nrow, "YN_ISSUED"		, "N");
        		dsUserParam.setColumn(nrow, "YN_INDISUSE"	, "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	//자산기본정보 - 자산코드(DHX_CFASSETINFO)
        	if(id == "cfCD_ACASSET") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}

        	//자산기본정보 - 자산세목코드(DHX_CFASSETSEMOK)
        	if(id == "cfCD_ASSETSEMOK") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_ACASSET"))) {
        			this.gfnAlert("자산코드를 먼저 입력하세요");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_ACASSET", this.dsList.getColumn(0, "CD_ACASSET"));
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.dsList.getColumn(0, "CD_CORP"));
        	}

        	//자산취득정보 - 취득부서(DHX_CFACNTUNIT)
        	//자산내역정보 - 보유부서(DHX_CFACNTUNIT_FIXEDASSET), 관리부서(DHX_CFACNTUNIT_FIXEDASSET)
        	if(id == "cfCD_GETDEPT" || id == "cfCD_TAKEDEPT" || id == "cfCD_MAGDEPT") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        // 		dsUserParam.setColumn(nrow, "LV_DEPT"		, this.UserInfo.LEVLV_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, this.UserInfo.LEVCD_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "YN_SELECT"		, (this.FormInfo.ID_GROUP == "J"  ? "A" : "N"));
        // 		dsUserParam.setColumn(nrow, "CD_CORP"		, this.dsList.getColumn(0, "CD_CORP"));

        	}

        	//자산취득정보 - 취득거래처(DHX_CFVENDOR) -> DHX_CFALLVENDOR_CODEFIND
        	if(id == "cfCD_GETVENDOR") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		//dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(0, "CD_CORP"));
        	}


        	//자산내역정보 - 자산관리자(정), 자산관리자(부) (DHX_CFIDSABUN)
        	if(id == "cfID_MAINMAG" || id == "cfID_SUBMAG") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YN_OFFICER", "N");
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.dsList.getColumn(0, "CD_CORP"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	//검색조건 - 자산코드
        	if(id == "ccfCD_ACASSET"){
        		if (arr.length > 0) {
        			//자산코드의 법인 셋팅
        			this.dsSearch.set_enableevent(false);
        			this.dsSearch.setColumn(0, "CD_CORP", arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0, "DS_CORP", arr[0]["DS_CORP"]);
        			this.dsSearch.set_enableevent(true);
        		}
        		this.ccfCD_ASSET.form.fnCodeFindClear();	//자산번호
        	} else if(id == "cfCD_CORP") {	//자산기본정보 - 법인코드
        		this.cfCD_GETDEPT.form.fnCodeFindClear();		//취득부서
        		this.cfCD_GETVENDOR.form.fnCodeFindClear();		//취득거래처
        		this.cfCD_TAKEDEPT.form.fnCodeFindClear();		//보유부서
        		this.cfCD_MAGDEPT.form.fnCodeFindClear();		//관리부서

        	} else if (id == "cfCD_ACASSET"){	//자산취득정보 - 자산코드
        		if (arr.length > 0) {
        			this.dsList.set_enableevent(false);

        			//상각여부
        			if(arr[0]["TY_DEP"] == "0"){
        				this.dsList.setColumn(0, "TY_DEP", "0");	//정액법
        			}else{
        				this.dsList.setColumn(0, "TY_DEP", "1");	//정률법
        			}
        			if(nexacro.toNumber(arr[0]["YR_TAXLIFE"], 0) > 0){
        				this.dsList.setColumn(0, "YN_DEP", "Y");
        			}else{
        				this.dsList.setColumn(0, "YN_DEP", "N");
        			}

        			//내용연수
        			this.dsList.setColumn(0, "YR_LIFE", arr[0]["YR_TAXLIFE"]);

        			this.dsList.set_enableevent(true);
        		}
        	} else if(id == "cfCD_GETDEPT") {	//자산취득정보 - 취득부서
        		if(arr.length > 0) {
        			this.dsList.set_enableevent(false);
        			//보유부서
        			this.dsList.setColumn(0, "CD_TAKEDEPT", arr[0]["CD_DEPT_ACNT"]);
        			this.dsList.setColumn(0, "DS_TAKEDEPT", arr[0]["DS_DEPT_ACNT"]);
        			//관리부서
        			this.dsList.setColumn(0, "CD_MAGDEPT",  arr[0]["CD_DEPT_ACNT"]);
        			this.dsList.setColumn(0, "DS_MAGDEPT",  arr[0]["DS_DEPT_ACNT"]);

        			this.v_YmLastDepr = arr[0]["YM_ACCOUNT"];

        			this.dsList.set_enableevent(true);
        		} else {
        			this.cfCD_TAKEDEPT.form.fnCodeFindClear();		//보유부서
        			this.cfCD_MAGDEPT.form.fnCodeFindClear();		//관리부서
        			this.v_YmLastDepr = "";
        		}
        	}

        	//자산취득정보 - 취득거래처(DHX_CFVENDOR) -> DHX_CFALLVENDOR_CODEFIND
        	if(id == "cfCD_GETVENDOR") {
        		var sTyVendor = "";
        		if(arr.length > 0) {
        			sTyVendor = arr[0]["TY_VENDOR"];
        		}
        		this.edtTY_VENDOR.set_value(sTyVendor);
        	}

        	//자산기본정보 - 자산코드
        	if(id == "cfCD_ACASSET") {
        		if(arr.length > 0) {

        			if(arr[0]["TY_DEP"] == "0") {
        				this.cboTY_DEP.set_index(0);
        			} else if(arr[0]["TY_DEP"] == "1") {
        				this.cboTY_DEP.set_index(1);
        			} else {
        				this.cboTY_DEP.set_index(-1);
        			}

        			if(arr[0]["YR_TAXLIFE"] > 0) {
        				this.rdoYN_DEP.set_index(0);
        			} else {
        				this.rdoYN_DEP.set_index(1);
        			}

        			this.edtYR_LIFE.set_value(arr[0]["YR_TAXLIFE"]);
        		}
        	}

        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }


        this.fnGridChg_EnterCell = function(obj, row, cell) {
        	var colNm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = this.dxGrid.getBindDataset();

        	//전표번호가 있을경우 수정불가
        	if(!this.gfnIsNull(objDs.getColumn(row, "CD_SLIP"))){
        		return false;
        	}else{
        		var changFalg = false;
        		if(!this.gfnIsNull(objDs.getColumn(row, "CD_CHANGE"))){
        			switch(objDs.getColumn(row, "CD_CHANGE")) {
        				case "01" : //자본적 지출
        					if(colNm == "AM_CHANGE" || colNm == "AM_CHANGEVAT"   || colNm == "TY_CHGAMOUNT" ||
        					   colNm == "CD_VENDOR" || colNm == "NO_CASHACCOUNT" || colNm == "DT_CASH" || colNm == "YR_RELIFE" ){
        						changFalg = true;
        					}
        					break;
        				case "02" : //폐기
        					changFalg = false;
        					break;
        				case "03" : //매각
        					if(colNm == "AM_CHANGE" || colNm == "AM_CHANGEVAT"  || colNm == "TY_CHGAMOUNT" || colNm == "CD_VENDOR"){
        						changFalg = true;
        					}
        					break;
        			}
        			if(colNm == "CD_PROOF" ){
        				var CD_CODEFIND = "DZX_CFCODE_COM"; // 관리ID
        				var NM_CODEFIND = (objDs.getColumn(row, "CD_CHANGE") == "03") ? "DZX_CFCODE_COM_V11" : "DZX_CFCODE_COM_V10";
        				//증빙코드(CD_PROOF), 증빙명칭(DS_PROOF)
        				this.dxGrid.usCodefindInfo["CD_PROOF"].CD_CODEFIND = "DZX_CFCODE_COM";	// 관리ID
        				this.dxGrid.usCodefindInfo["CD_PROOF"].NM_CODEFIND = NM_CODEFIND;	// 식별ID
        				this.dxGrid.usCodefindInfo["DS_PROOF"].CD_CODEFIND = "DZX_CFCODE_COM";
        				this.dxGrid.usCodefindInfo["DS_PROOF"].NM_CODEFIND = NM_CODEFIND;

        				changFalg = (objDs.getColumn(row, "CD_CHANGE") == "02") ? false : true;
        				//changFalg = true;
        			}
        			if(colNm == "CD_CHANGE" || colNm == "DT_CHANGE" || colNm == "DS_MEMO" || colNm == "NO_DOC" || colNm == "AM_CHANGESUPPLY"){
        				changFalg = true;
        			}
        		}else{
        			if(colNm != "DS_VENDOR" && colNm != "CD_SLIP" && colNm != "NM_CASHACCOUNT"){
        				changFalg = true;
        			}
        		}

        		if(changFalg){
        			return true;
        		}else{
        			return false;
        		}
        	}
        	return true;
        }

        this.fnGridChg_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	var TyVendor = this.dsListChg.getColumn(this.dsListChg.rowposition, "TY_VENDOR");
        	var cdPay = this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_VENDOR");

        	if(id == "DHX_CFALLVENDOR_CODEFIND") {	//거래처
        		dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        	} else if(id == "DFX_CFACCOUNTMATCH") {	//계좌번호

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_VENDOR"))) {
        			this.gfnAlert("거래처를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_VENDOR" , TyVendor);
        		dsUserParam.setColumn(nrow, "CD_PAY" , cdPay);

        	} else if(id == "DZX_CFCODE_COM") {	//증빙코드
        		dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE" , "V10");
        	} else if(id == "DZX_CFCODE_COM_V10") {	//증빙코드
        		dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE" , "V10");
        	} else if(id == "DZX_CFCODE_COM_V11") {	//증빙코드
        		dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE" , "V11");
        	}
        	return true;
        };

        this.fnGridChg_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsListChg.rowposition;

        	if(id == "DHX_CFVENDOR"){
        		this.dsListChg.set_enableevent(false);
        		this.dsListChg.setColumn(rowPos, "NO_CASHACCOUNT", "");	//계좌번호
        		this.dsListChg.setColumn(rowPos, "NM_CASHACCOUNT", "");	//계좌번호명
        		this.dsListChg.set_enableevent(true);
        	}

        	if(id == "DZX_CFCODE_COM" || id == "DZX_CFCODE_COM_V10" || id == "DZX_CFCODE_COM_V11") {	//증빙코드
        		if (arrData.length > 0) {
        			var vatRate   = arrData[0]["DS_ETC2"];	//부가세율
        			var ynVatBgje = arrData[0]["DS_ETC3"];	//불공제여부
        			this.dsListChg.setColumn(this.dsListChg.rowposition, "VAT_RATE", vatRate);
        		}else{
        			this.dsListChg.setColumn(this.dsListChg.rowposition, "VAT_RATE", "");
        			this.dsListChg.setColumn(this.dsListChg.rowposition, "AM_CHANGE", "");
        			this.dsListChg.setColumn(this.dsListChg.rowposition, "AM_CHANGEVAT", "");
        		}

        		//부가세 계산
        		this.fnVatCal();
        	}
        	this.fnCompEnable();
        }

        this.dsListChg_OnColumnChanged = function(obj,e) {
        	if(e.columnid == "CD_CHANGE") {
        		var tyChgAmount = "";
        		if(e.newvalue == "01"){			//자본적지출
        			tyChgAmount = "0"; 			//결재방법(0:미지급금)
        		}else if(e.newvalue == "03"){	//매각
        			tyChgAmount = "0";			//결재방법(0:미수금)
        		}else if(e.newvalue == "02"){	//폐기
        			obj.setColumn(e.row, "CD_PROOF"	, "");	//증빙코드
        			obj.setColumn(e.row, "DS_PROOF"	, "");	//증빙명칭
        		}

        		obj.setColumn(e.row, "TY_CHGAMOUNT"		, tyChgAmount);
        		obj.setColumn(e.row, "DT_CHANGE"		, "");	//변동일자
        		obj.setColumn(e.row, "AM_CHANGE"		, "0");	//변동금액
        		obj.setColumn(e.row, "AM_CHANGEVAT"		, "0");	//변동부가세액
        		obj.setColumn(e.row, "QN_CHANGE"		, "0");	//변동수량
        		obj.setColumn(e.row, "CD_CHGACCOUNT"	, "");	//대체계정코드
        		obj.setColumn(e.row, "DS_ACCOUNT"		, "");	//대체계정코드명
        		obj.setColumn(e.row, "NO_DOC"			, "");	//문서번호
        		obj.setColumn(e.row, "YR_RELIFE"		, "");	//내용연수
        		obj.setColumn(e.row, "CD_CARDNO"		, "");	//카드번호
        		obj.setColumn(e.row, "CD_VENDOR"		, "");	//거래처
        		obj.setColumn(e.row, "DS_VENDOR"		, "");	//거래처명
        		obj.setColumn(e.row, "DS_MEMO"			, "");	//적요
        		obj.setColumn(e.row, "DT_CASH"			, "");	//현금집행일자
        		obj.setColumn(e.row, "NO_CASHACCOUNT"	, "");	//계좌번호
        		obj.setColumn(e.row, "NM_CASHACCOUNT"	, "");	//계좌번호명
        	}

        	if(e.columnid == "AM_CHANGE" ){	// 공급가
        		//부가세 계산
        		this.fnVatCal();
        	}

        	if(e.columnid == "AM_CHANGEVAT" ) {	//, 부가세액
        		// 공급가
        		var amSupply = nexacro.toNumber(this.dsListChg.getColumn(this.dsListChg.rowposition, "AM_CHANGE"),0);
        		var amVat = nexacro.toNumber(e.newvalue,0);

        		// 합계
        		var amChange = amVat+amSupply;
        		this.dsListChg.setColumn(this.dsListChg.rowposition, "AM_CHANGESUM", amChange);
        	}

        	//최종변동내역이 자본적지출이고 현제 로우 데이터가 전표발행이 안되었을경우
        	if(this.gfnTrim(this.dsList.getColumn(0, "CD_CHANGE")) == "자본적지출" && this.gfnIsNull(this.gfnTrim(obj.getColumn(e.row, "CD_SLIP")))){
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}

        	this.fnCompEnable();
        }

        this.fnGridMove_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        		this.dsListChg.clearData();
        		this.dsListMove.clearData();
        		this.dsListDep.clearData();

        		this.fnCompEnable("N");
           }
        }

        this.dsList_ColumnChanged = function(obj, e)
        {

        	//폼상태에따라 수정상태로 변경
        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}
        	// 전체 권한이 아니면
        	if(this.FormInfo.GR_SEARCH >= "3"){
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}

        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	switch(this.tabData.tabindex) {
        	case 0:
        		if(!this.gfnGridIsRow(this.dxGrid)) return;

        		var flag = this.gfnGetFlag(this.dsListChg, this.dsListChg.rowposition);

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

        		if(this.gfnTrim(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_CHANGE")) == "00"){
        			this.gfnAlert("취득자료는 전표발행할 수 없습니다.");
        			this.ccfCD_ASSET.form.CDTextBox.setFocus();
        			return;
        		}

        		this.gfnConfirm("자산변경 전표 발행을 하시겠습니까?", "fnIssueSlip_callback");
        		break;
        	case 1:
        		if(!this.gfnGridIsRow(this.dxGrid2)) return;

        		var flag = this.gfnGetFlag(this.dsListMove, this.dsListMove.rowposition);

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

        		if(this.gfnTrim(this.dsListMove.getColumn(this.dsListMove.rowposition, "YN_GET")) == "취득"){
        			this.gfnAlert("취득자료는 전표발행할 수 없습니다.");
        			this.ccfCD_ASSET.form.CDTextBox.setFocus();
        			return;
        		}

        		this.gfnConfirm("자산이동 전표 발행을 하시겠습니까?", "fnIssueSlip_callback", "N");
        		break;
        	default:
        	}
        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		switch(this.tabData.tabindex) {
        		case 0:
        			this.dsIssueSlip.clearData();
        			var nRow = this.dsIssueSlip.addRow();

        			var dtChange = this.dsListChg.getColumn(this.dsListChg.rowposition, "DT_CHANGE");
        			var cdChange = this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_CHANGE");

        			//처리할 데이터 담기
        			this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsIssueSlip.setColumn(nRow, "DT_CHANGE"	, dtChange);
        			this.dsIssueSlip.setColumn(nRow, "CD_CHANGE"	, cdChange);
        			this.dsIssueSlip.setColumn(nRow, "CD_ASSET" 	, nexacro.replaceAll(this.ccfCD_ASSET.form.CDTextBox.value,"-",""));
        			this.dsIssueSlip.setColumn(nRow, "CD_SITE_BH" 	, this.AuthClient.CD_DEPT);
        			this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);

        			var strSvcId    = "issueSlip";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "";
        			var inData      = "issueSlip=dsIssueSlip";
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

        			break;
        		case 1:

        			this.dsPrcCall.clearData();
        			var rowPos = this.dsListMove.rowposition;

        			if (strId == "N")
        			{
        				var nRow = this.dsPrcCall.addRow();

        				tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        				this.dsPrcCall.setColumn(nrow, "CD_ASSET", nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")),"-",""));
        				this.dsPrcCall.setColumn(nrow, "NO_SEQ", this.dsListMove.getColumn(rowPos, "NO_SEQ"));
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
        				this.dsPrcCall.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsPrcCall.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			}

        			var strSvcId    = "issueSlip" + strId;
        			var strSvcType  = "savesel";
        			var inProc		= "_dsProc";
        			var inData      = "issueSlipMove=dsPrcCall";
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
        			break;
        		default:
        		}

        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	var dsRem = "";
        	switch(this.tabData.tabindex) {
        	case 0:
        		if(!this.gfnGridIsRow(this.dxGrid)) return;

        		var flag = this.gfnGetFlag(this.dsListChg, this.dsListChg.rowposition);

        		if(!this.gfnIsNull(flag)){
        			this.gfnAlert("저장하지 않은 데이터가 존재합니다.\n저장후 이용하세요.");
        			return;
        		}
        		if (this.gfnIsNull(this.gfnTrim(this.dsListChg.getColumn(this.dsListChg.rowcount-1, "CD_SLIP")))) {
        			this.gfnAlert("전표번호는 필수입니다.");
        			return;
        		}
        		dsRem = "자산변동" ;
        		break;
        	case 1:
        		if(!this.gfnGridIsRow(this.dxGrid2)) return;

        		var flag = this.gfnGetFlag(this.dsListMove, this.dsListMove.rowposition);

        		if(!this.gfnIsNull(flag)){
        			this.gfnAlert("저장하지 않은 데이터가 존재합니다.\n저장후 이용하세요.");
        			return;
        		}
        		if (this.gfnIsNull(this.gfnTrim(this.dsListMove.getColumn(this.dsListMove.rowcount-1, "CD_TRADE_FR")))) {
        			this.gfnAlert("전표번호는 필수입니다.");
        			return;
        		}

        		dsRem = "자산이동" ;
        		break;
        	default:
        	}

        	this.gfnConfirm(dsRem + " 자동전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		switch(this.tabData.tabindex) {
        		case 0:
        			this.dsCancelSlip.clearData();
        			var nRow = this.dsCancelSlip.addRow();

        			var cdSlip   = this.gfnTrim(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_SLIP"));
        			//처리할 데이터 담기
        			this.dsCancelSlip.setColumn(nRow, "CD_SLIP", cdSlip);

        			var strSvcId    = "cancelSlip";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "cancelSlip=dsCancelSlip";
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
        			break;
        		case 1:
        			this.dsSlipCancel1 = new Dataset();
        			this.dsSlipCancel1.addColumn("CD_TRADE", "string");
        			this.dsSlipCancel1.addColumn("CD_CORP", "string");

        			var nRow = this.dsSlipCancel1.addRow();
        			var rowPos = this.dsListMove.rowposition;
        			//처리할 데이터 담기
        			this.dsSlipCancel1.setColumn(nRow, "CD_TRADE"   , this.gfnTrim(this.dsListMove.getColumn(rowPos, "CD_TRADE_FR")));
        			this.dsSlipCancel1.setColumn(nRow, "CD_CORP"	   , this.dsSearch.getColumn(0, "CD_CORP"));

        			var strSvcId    = "cancelSlip";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "cancelSlipMove=dsSlipCancel1";
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

        			break;
        		default:
        		}
        	}

        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
            switch(this.tabData.tabindex) {
            case 0:
        		if (this.gfnIsNull(this.gfnTrim(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_SLIP")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        		}

        		var param = {};
        		param.IUD_FLAG = "S";
        		param.strYN_JUNDO_START = "";
        		param.CD_TRADE = this.gfnTrim(this.dsListChg.getColumn(this.dsListChg.rowposition, "CD_SLIP"));
        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

            	break;
            case 1:
        		if (this.gfnIsNull(this.gfnTrim(this.dsListMove.getColumn(this.dsListMove.rowposition, "CD_TRADE_FR")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        		}

        		var param = {};
        		param.IUD_FLAG = "S";
        		param.strYN_JUNDO_START = "";
        		param.CD_TRADE = this.gfnTrim(this.dsListMove.getColumn(this.dsListMove.rowposition, "CD_TRADE_FR"));
        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
            	break;
            default:
            }
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

        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE"  , "string");
        	this.dsCombo.addColumn("DS_ETC1"  , "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE",  "V01");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_VATBGJE=combo0";
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


        //부가세 계산
        this.fnVatCal = function(){

        	// 공급가
        	var amSupply = nexacro.toNumber(this.dsListChg.getColumn(this.dsListChg.rowposition, "AM_CHANGE"),0);

        	//부가세율
        	var vatRate   = nexacro.toNumber(this.dsListChg.getColumn(this.dsListChg.rowposition, "VAT_RATE") ,0);
        	var amVat = (vatRate == 0 ? 0 : nexacro.floor(amSupply / vatRate));
        	this.dsListChg.setColumn(this.dsListChg.rowposition, "AM_CHANGEVAT", amVat);

        	// 합계
        	var amChange = amVat+amSupply;
        	this.dsListChg.setColumn(this.dsListChg.rowposition, "AM_CHANGESUM", amChange);
        };

        this.divData_tabData_onchanged = function(obj,e) {


        	var tabIdx = this.divData.form.tabData.tabindex;
        	var objDS = this.fnGetBindDataset(e.preindex);

        	trace(" divData_tabData_onchanged=>" + this.gfnDsIsUpdated(objDS));
        	if(this.gfnDsIsUpdated(objDS) && ( e.preindex == 0 || e.preindex== 1 )){
        		this.fnDsUpdateCallback = function(id, val){
        			if(!val){
        				this.divData.form.tabData.set_enableevent(false);
        				this.divData.form.tabData.set_tabindex(e.preindex);
        				this.divData.form.tabData.set_enableevent(true);
        				return false;
        			}else{
        				this.FormBtns.Select.click(true);
        			}
        		}
        		this.gfnConfirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?","fnDsUpdateCallback");
        	}
        	this.fnCompEnable();
        };


        this.fnGetBindDataset = function(tabIdx){
        	var objDS;

        	switch(tabIdx){
        		case 0:
        			objDS = this.dsListChg;
        		break;
        		case 1:
        			objDS = this.dsListMove;
        		break;
        		case 2:
        			objDS = this.dsListDep;
        		break;
        	}

        	return objDS;
        };
        //컴포넌트 비활성 처리
        this.fnCompEnable = function (flag)
        {

        	//자산기본정보
        	this.cfCD_ACASSET.form.set_readonly(true);			//자산코드
        	this.ctclYR_ACCOUNT.form.set_readonly(true);		//회계년도
        	this.cfCD_ASSETSEMOK.form.set_readonly(true);		//자산세목코드
        	this.cfCD_GETDEPT.form.set_readonly(true);			//취득부서
        	//자산취득정보
        	this.cfCD_GETDEPT.form.set_readonly(true);			//취득부서
        	this.cfCD_GETVENDOR.form.set_readonly(true);		//취득거래처
        	//자산내역정보
        	this.cfCD_TAKEDEPT.form.set_readonly(true);			//보유부서
        	this.cfCD_MAGDEPT.form.set_readonly(true);			//관리부서

        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.btnSearchSlip.set_enable(false);
        	this.btnIssueSlip.set_enable(false);
        	this.btnCancelSlip.set_enable(false);

        	//trace(" fnCompEnable CD_CHANGE =>" + this.dsList.getColumn(0, "CD_CHANGE"));
        	if (this.dsList.getColumn(0, "CD_CHANGE") != "매각" && this.dsList.getColumn(0, "CD_CHANGE") != "폐기")
        	{

        		if(this.tabData.tabindex == 0 || this.tabData.tabindex == 1) {
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			this.btnSearchSlip.set_enable(true);
        			this.btnIssueSlip.set_enable(true);
        			this.btnCancelSlip.set_enable(true);
        		}
        	}else{
        		if(this.tabData.tabindex == 0 ) {
        				this.FormBtns.Del.set_enable(true);
        				this.btnSearchSlip.set_enable(true);
        				this.btnIssueSlip.set_enable(true);
        				this.btnCancelSlip.set_enable(true);
        		}
        	}
        	// 전체 권한이 아니면
        	if(this.FormInfo.GR_SEARCH >= "3"){
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print

        	var bEnable =  false;

        	this.FormBtns.Add.set_enable(bEnable);
        	this.FormBtns.Save.set_enable(bEnable);
        	this.FormBtns.Del.set_enable(bEnable);
        };

        this.fnFileUpload = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.","fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ASSET"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ASSET.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("자산번호를 입력하세요.","fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACASSET"))) {
        		this.fnVaidateCallback = function() {
        			this.divData.form.cfCD_ACASSET.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("조회된 자산코드가 없습니다.","fnVaidateCallback");
        		return false;
        	}

        	this.FileManager.CD_DIR = [this.dsSearch.getColumn(0, "CD_CORP"), 		//법인코드
        	                           this.dsSearch.getColumn(0, "CD_ACASSET"), 	//자산코드
        							   nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "CD_ASSET")),"-","")];	//자산번호

        	this.gfnFileManager(this.FileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staTY_CLOSE.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.staDS_CONTENT.addEventHandler("onclick",this.staDS_CONTENT_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.divData.form.btnISSUE_VAT.addEventHandler("onclick",this.divData_btnISSUE_VAT_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETREGINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
