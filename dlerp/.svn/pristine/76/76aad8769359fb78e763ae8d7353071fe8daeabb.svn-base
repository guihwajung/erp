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
            this.set_titletext("평가등록");
            this.set_scrolltype("vertical");
            this.getSetter("maxwidth").set("930");
            this.getSetter("maxheight").set("830");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,1450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_RESULT_SAVE</Col></Row><Row><Col id=\"TARGET\">saveItems</Col><Col id=\"SP\">DAJPR_EVAL_RESULT_DETAIL_SAVE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVAL_RESULT_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAJPR_EVAL_SCORE_REPORT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAJPR_EVAL_GRADES_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_1STCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_1CHACLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1STSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1STSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POINT_1STEVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION_1STADJ\" type=\"STRING\" size=\"256\"/><Column id=\"ID_2NDSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_2NDSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"POINT_2NDEVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION_2NDADJ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_2NDCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"POINT_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_FINAL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_FINAL\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_1STHEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_1STATTI\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_1STEVAL\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_2NDHEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_2NDATTI\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_2NDEVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEVALGRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_EVALGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_EVALGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVALGROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData1","0","0",null,"75","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE1","0","0","900","30",null,null,null,null,null,null,this.divData1.form);
            obj.set_taborder("0");
            obj.set_text("평가기수정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#bdd7ee");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL","10","staTITLE1:10","90","30",null,null,null,null,null,null,this.divData1.form);
            obj.set_taborder("1");
            obj.set_text("평가기수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staBg00","staTERM_EVAL:-1","staTITLE1:10","250","30",null,null,null,null,null,null,this.divData1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staEVAL_STAT","staBg00:-1","staTITLE1:10","90","30",null,null,null,null,null,null,this.divData1.form);
            obj.set_taborder("3");
            obj.set_text("평가진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staBg01","staEVAL_STAT:-1","staTITLE1:10","250","30",null,null,null,null,null,null,this.divData1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_color("red");
            obj.set_visible("false");
            this.divData1.addChild(obj.name, obj);

            obj = new Div("divData2","0","divData1:5",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE2","0","10","900","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("0");
            obj.set_text("평가 대상자 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_background("#bdd7ee");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staDS_SABUN","10","staTITLE2:10","90","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staDS_CORP","10","staDS_SABUN:-1","90","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("4");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION","10","staDS_CORP:-1","90","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("5");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staDS_SABUN:248","staTITLE2:10","90","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("2");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","staDS_CORP:248","staID_SABUN:-1","90","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staDS_DUTY","staDS_POSITION:248","staDS_DEPT:-1","90","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("12");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staBg01","staDS_SABUN:-1","staTITLE2:10","250","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staBg02","staDS_CORP:-1","staBg01:-1","250","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staBg03","staDS_POSITION:-1","staBg02:-1","250","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staBg04","staID_SABUN:-1","staTITLE2:10","250","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staBg05","staDS_DEPT:-1","staBg01:-1","250","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staBg06","staDS_DUTY:-1","staBg02:-1","250","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData2.addChild(obj.name, obj);

            obj = new Div("divEval1","0","divData2:5",null,"580","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE3","0","0","900","30",null,null,null,null,null,null,this.divEval1.form);
            obj.set_taborder("0");
            obj.set_text("근무평가표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_background("#bdd7ee");
            this.divEval1.addChild(obj.name, obj);

            obj = new Static("staTITLE4","0","staTITLE3:5","610","30",null,null,null,null,null,null,this.divEval1.form);
            obj.set_taborder("3");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divEval1.addChild(obj.name, obj);

            obj = new Grid("objGrid","10","staTITLE4:5","880","340",null,null,null,null,null,null,this.divEval1.form);
            obj.set_taborder("2");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divEval1.addChild(obj.name, obj);

            obj = new Static("sta00","16","objGrid:11","850","75",null,null,null,null,null,null,this.divEval1.form);
            obj.set_taborder("1");
            obj.set_text("A : 90～100 (최우수 등급)  - 모든면에서 월등하며 타의 모범이 되는 자에 해당\r\nB : 80～ 89 (우수 등급)     - 주워진 업무를 성실히 수행하며 솔선수범하는 자에 해당\r\nC : 70～ 79 (평균 등급)     - 주어진 업무를 성실히 수행하는 자에 해당\r\nD : 60～ 69 (저조 등급)     - 업무달성도가 부족하며 좀더 노력이 필요한 자에 해당\r\nE : 59 이하 (부적격 등급)  - 업무에 대한 열의가 부족하며, 부여된 업무를 완수하지 못하는 자에 해당");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divEval1.addChild(obj.name, obj);

            obj = new Static("sta01","16","507","850","70",null,null,null,null,null,null,this.divEval1.form);
            obj.set_taborder("4");
            obj.set_text("(평가표 작성요령)\r\n1. 평가 항목별 등급은 점수로 기재할 것 (평정등급의 점수는 A,B,C,D,E 배점사이에서 기재)\r\n2. 1차 고과자는 각 평가 항목별 점수에 따라 독립적으로 항목별 배점을 적용하고, 2차 고과자는 능력/업적태도 2가지 항목을 종합적으로 판단하여 배점할 것\r\n3. 1차 고과자 : 절대평가, 2차 고과자 : 상대평가 (최우수 25%, 우수 25% ,이하등급 자유배점)\r\n4. 2차 고과자 : 피고과자의 서열을 정하여 인사고과 실시");
            this.divEval1.addChild(obj.name, obj);

            obj = new Div("divEval2","0","divEval1:10",null,"310","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE6","0","0","900","30",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("1");
            obj.set_text("지도관찰표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_background("#bdd7ee");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staTITLE7","0","staTITLE6:5","610","30",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("0");
            obj.set_text("1차평가자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staGRADE_1STHEALTH","10","staTITLE7:10","90","30",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("2");
            obj.set_text("체력");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staBg00","staGRADE_1STHEALTH:-1","staTITLE7:10","650","30",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staBg03","10","staGRADE_1STHEALTH:-1","739","40",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("＊체력          A. 건강해서 어떤 격무도 가능                 B. 건강해서 상당한 무리도 가능          C. 보통\r\n                   D. 평소 업무는 좋으나 무리는 불가능       E. 건강이 좋지 않음");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staSERV_1STATTI","10","staBg03:-1","90","60",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("5");
            obj.set_text("성격\r\n(간략히 기술)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staSERV_1STEVAL","10","staSERV_1STATTI:-1","90","90",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("8");
            obj.set_text("종합의견\r\n(상세히 기술)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divEval2.addChild(obj.name, obj);

            obj = new Combo("cboGRADE_1STHEALTH","staGRADE_1STHEALTH:4","staTITLE7:15","120","20",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divEval2_form_cboGRADE_1STHEALTH_innerdataset = new nexacro.NormalDataset("divEval2_form_cboGRADE_1STHEALTH_innerdataset", obj);
            divEval2_form_cboGRADE_1STHEALTH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">C</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">D</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">E</Col></Row></Rows>");
            obj.set_innerdataset(divEval2_form_cboGRADE_1STHEALTH_innerdataset);
            obj.set_text("A");
            obj.set_value("A");
            obj.set_index("0");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staBg01","staSERV_1STATTI:-1","staBg03:-1","650","60",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divEval2.addChild(obj.name, obj);

            obj = new Static("staBg02","staSERV_1STEVAL:-1","staBg01:-1","650","90",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divEval2.addChild(obj.name, obj);

            obj = new TextArea("edtSERV_1STATTI","staSERV_1STATTI:4","staBg03:4","640","50",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("7");
            obj.set_maxlength("2000");
            this.divEval2.addChild(obj.name, obj);

            obj = new TextArea("edtSERV_1STEVAL","staSERV_1STEVAL:4","staBg01:4","640","80",null,null,null,null,null,null,this.divEval2.form);
            obj.set_taborder("10");
            obj.set_maxlength("2000");
            this.divEval2.addChild(obj.name, obj);

            obj = new Div("divEval3","0","divEval2:10",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE8","0","0","610","30",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("12");
            obj.set_text("2차평가자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staGRADE_2NDHEALTH","10","staTITLE8:10","90","30",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("2");
            obj.set_text("체력");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staBg00","staGRADE_2NDHEALTH:-1","staTITLE8:10","650","30",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staBg03","10","staGRADE_2NDHEALTH:-1","739","40",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("＊체력          A. 건강해서 어떤 격무도 가능                 B. 건강해서 상당한 무리도 가능          C. 보통\r\n                   D. 평소 업무는 좋으나 무리는 불가능       E. 건강이 좋지 않음");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staSERV_2NDATTI","10","staBg03:-1","90","60",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("5");
            obj.set_text("성격\r\n(간략히 기술)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staSERV_2NDEVAL","10","staSERV_2NDATTI:-1","90","90",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("8");
            obj.set_text("종합의견\r\n(상세히 기술)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divEval3.addChild(obj.name, obj);

            obj = new Combo("cboGRADE_2NDHEALTH","staGRADE_2NDHEALTH:4","staTITLE8:15","120","20",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divEval3_form_cboGRADE_2NDHEALTH_innerdataset = new nexacro.NormalDataset("divEval3_form_cboGRADE_2NDHEALTH_innerdataset", obj);
            divEval3_form_cboGRADE_2NDHEALTH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">C</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">D</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">E</Col></Row></Rows>");
            obj.set_innerdataset(divEval3_form_cboGRADE_2NDHEALTH_innerdataset);
            obj.set_text("A");
            obj.set_value("A");
            obj.set_index("0");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staBg01","staSERV_2NDATTI:-1","staBg03:-1","650","60",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divEval3.addChild(obj.name, obj);

            obj = new Static("staBg02","staSERV_2NDEVAL:-1","staBg01:-1","650","90",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divEval3.addChild(obj.name, obj);

            obj = new TextArea("edtSERV_2NDATTI","staSERV_2NDATTI:4","staBg03:4","640","50",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("7");
            obj.set_maxlength("2000");
            this.divEval3.addChild(obj.name, obj);

            obj = new TextArea("edtSERV_2NDEVAL","staSERV_2NDEVAL:4","staBg01:4","640","80",null,null,null,null,null,null,this.divEval3.form);
            obj.set_taborder("10");
            obj.set_maxlength("2000");
            this.divEval3.addChild(obj.name, obj);

            obj = new Div("divBtns","0","divEval3:5",null,"40","18",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","408","7","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnSave","318","7","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData1.form.staBg00","text","dsSearch","TERM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData2.form.staBg01","text","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData2.form.staBg02","text","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData2.form.staBg03","text","dsSearch","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData2.form.staBg04","text","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData2.form.staBg05","text","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData2.form.staBg06","text","dsSearch","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divEval2.form.edtREF_ITEM","value","dsSearch","REF_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divEval2.form.cboGRADE_1STHEALTH","value","dsSearch","GRADE_1STHEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divEval2.form.edtSERV_1STATTI","value","dsSearch","SERV_1STATTI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divEval2.form.edtSERV_1STEVAL","value","dsSearch","SERV_1STEVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divEval3.form.cboGRADE_2NDHEALTH","value","dsSearch","GRADE_2NDHEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divEval3.form.edtSERV_2NDATTI","value","dsSearch","SERV_2NDATTI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divEval3.form.edtSERV_2NDEVAL","value","dsSearch","SERV_2NDEVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData1.form.staBg01","text","dsSearch","EVAL_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_RESULT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gUserType = 0; // (0:전체,  1:평가자1차, 2: 평가자2차)

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
        	this.fnSetCombo();
        	//this.fnSetComboItem();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_visible(false); //조회
        	this.FormBtns.Add.set_visible(false); // 입력
        	this.FormBtns.Del.set_visible(false); //삭제
        	this.FormBtns.Save.set_visible(false);	 //저장
        	this.FormBtns.Print.set_visible(false);	 //출력
        	this.FormBtns.Excel.set_visible(false);	 //엑셀
        	this.FormBtns.Reset.set_visible(false);	 //초기화
        	this.FormBtns.Close.set_visible(false);	 //닫기
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	if (this.FormInfo.GR_SEARCH == 1) {
        		this.btnItem1 = this.gfnFormButtonAdd("btnEvalPrint", "fnEvalPrint");		// 근무평가표 출력
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divEval1.form.objGrid;

        	//this.edtGRADE_1STHEALTH = this.divEval2.form.edtGRADE_1STHEALTH;
        	this.cboGRADE_1STHEALTH = this.divEval2.form.cboGRADE_1STHEALTH;
        	this.edtSERV_1STATTI = this.divEval2.form.edtSERV_1STATTI;
        	this.edtSERV_1STEVAL = this.divEval2.form.edtSERV_1STEVAL;

        	this.cboGRADE_2NDHEALTH = this.divEval3.form.cboGRADE_2NDHEALTH;
        	this.edtSERV_2NDATTI = this.divEval3.form.edtSERV_2NDATTI;
        	this.edtSERV_2NDEVAL = this.divEval3.form.edtSERV_2NDEVAL;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 부모창에서 넘겨준값 받기
        	var P_TY_SAVE = this.getOwnerFrame().P_TY_SAVE; // (I:등록 / U:수정 / S:조회)
        	var val = this.getOwnerFrame().P_DS_PARAM;
        	this.dsSearch.loadCSV(val);

        	// 평가항목 조회
        	this.FormBtns.Select.click();

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_RESULT_ITEMS");

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "combodataset", "dsEVALGRADE");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "combocodecol", "CD_EVALGRADE");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "combodatacol", "NM_EVALGRADE");

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "combodataset", "dsEVALGRADE");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "combocodecol", "CD_EVALGRADE");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "combodatacol", "NM_EVALGRADE");

        	if(P_TY_SAVE == "S"){	// 조회 (DAJ_EVALUATION_FINAL 최종평가조회에서만 사용)
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "edittype", "none");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "cssclass", "BACK_ReadOnly");

        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "edittype","none");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "cssclass","BACK_ReadOnly");
        	}else{
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "edittype", "expr:(SABUN == ID_1STSABUN && YN_1STCLOSE == 'N') ?'combo':'none'");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_1STGRADE"), "cssclass", "expr:(SABUN == ID_1STSABUN && YN_1STCLOSE == 'N') ? '':'BACK_ReadOnly'");

        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "edittype", "expr:(SABUN == ID_2NDSABUN && YN_1STCLOSE == 'Y') ? 'combo':'none'");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE"), "cssclass", "expr:(SABUN == ID_2NDSABUN && YN_1STCLOSE == 'Y') ? '':'BACK_ReadOnly'");
        	}

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "ITEM_EVAL"), "wordWrap", "char" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "SERV_EVAL"), "wordWrap", "char" );

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.addEventHandler("oncellclick", this.fnGrid_oncellclick, this);

        	// 로그인 사번 평가자 체크
        	this.fnCheckUser();
        	this.fnSetDisplay();

        	// 평가항목 조회
        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TERM_EVAL", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_POSITION", "string");
        	this.dsSelect.addColumn("CD_DUTY", "string");
        	this.dsSelect.addColumn("STD_EVAL", "string");
        	this.dsSelect.addColumn("SABUN", "string");
        	this.dsSelect.addColumn("STEP", "bigdecimal"); //2020.06.02 추가

        	this.dsSaveItems = new Dataset();
        	this.dsSaveItems.addColumn("TY_SAVE", "string");
        	this.dsSaveItems.addColumn("TERM_EVAL", "string");
        	this.dsSaveItems.addColumn("ID_SABUN", "string");
        	this.dsSaveItems.addColumn("TY_EVAL", "string");
        	this.dsSaveItems.addColumn("STD_EVAL", "string");
        	this.dsSaveItems.addColumn("ITEM_EVAL", "string");
        	this.dsSaveItems.addColumn("STEP", "bigdecimal");
        	this.dsSaveItems.addColumn("CD_GRADE", "string");
        	this.dsSaveItems.addColumn("SABUN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("TERM_EVAL", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("STEP", "bigdecimal");
        	this.dsSave.addColumn("CLOSE_ONLY", "bigdecimal");
        	this.dsSave.addColumn("CLOSE", "string");
        	this.dsSave.addColumn("GRADE_HEALTH", "string");
        	this.dsSave.addColumn("SERV_ATTI", "string");
        	this.dsSave.addColumn("SERV_EVAL", "string");
        	this.dsSave.addColumn("SABUN", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("TERM_EVAL", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var ID_USER = this.AuthClient.ID_USER;
        	//ID_USER = "19041";	// for test

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	// TERM_EVAL, ID_SABUN 두개만 필요
        	this.dsSelect.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "CD_POSITION", this.dsSearch.getColumn(0, "CD_POSITION"));
        	this.dsSelect.setColumn(0, "CD_DUTY", this.dsSearch.getColumn(0, "CD_DUTY"));
        	//this.dsSelect.setColumn(0, "STD_EVAL", this.dsSearch.getColumn(0, "STD_EVAL"));
        	this.dsSelect.setColumn(0, "SABUN", ID_USER);
        	trace("gUserType"+this.gUserType);
        	this.dsSelect.setColumn(0, "STEP", this.gUserType); //2020.06.02 추가

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var ID_1STSABUN = this.dsSearch.getColumn(0, "ID_1STSABUN");	// 1차평가자
        	var ID_2NDSABUN = this.dsSearch.getColumn(0, "ID_2NDSABUN");	// 2차평가자
        	var YN_1STCLOSE = this.gfnNvl(this.dsSearch.getColumn(0, "YN_1STCLOSE"), "N");		// 1차수 종료 여부
        	var YN_2NDCLOSE = this.gfnNvl(this.dsSearch.getColumn(0, "YN_2NDCLOSE"), "N");		// 2차수 종료 여부
        	var YN_CLOSE = this.gfnNvl(this.dsSearch.getColumn(0, "YN_CLOSE"), "N");			// 마감여부

        	var GRADE_1STHEALTH = this.dsSearch.getColumn(0, "GRADE_1STHEALTH");	// 1차 체력 평가
        	var SERV_1STATTI = this.dsSearch.getColumn(0, "SERV_1STATTI");   		// 1차 성격 평가
        	var SERV_1STEVAL = this.dsSearch.getColumn(0, "SERV_1STEVAL");   		// 1차 종합의견
        	var GRADE_2NDHEALTH = this.dsSearch.getColumn(0, "GRADE_2NDHEALTH");	// 2차 체력 평가
        	var SERV_2NDATTI = this.dsSearch.getColumn(0, "SERV_2NDATTI");   		// 2차 성격 평가
        	var SERV_2NDEVAL = this.dsSearch.getColumn(0, "SERV_2NDEVAL");   		// 2차 종합의견
        	var ID_USER = this.AuthClient.ID_USER;

        	//ID_USER = "19041";	// for test

        	var GRADE_HEALTH = (ID_USER == ID_1STSABUN) ? GRADE_1STHEALTH : GRADE_2NDHEALTH;
        	var SERV_ATTI = (ID_USER == ID_1STSABUN) ? SERV_1STATTI : SERV_2NDATTI;
        	var SERV_EVAL = (ID_USER == ID_1STSABUN) ? SERV_1STEVAL : SERV_2NDEVAL;
        	var strMsg = "";


        	//trace("1차->" + ID_1STSABUN + " / 1차마감->" + YN_1STCLOSE +"\n 2차->" + ID_2NDSABUN + " / 2차마감->" + YN_2NDCLOSE);

        	if(ID_USER != ID_1STSABUN && ID_USER != ID_2NDSABUN){	// 로그인 사번이 1차평가자 / 2차평가자
        		this.gfnAlert( "평가자만 처리 가능 합니다.");
        		return;
        	}

        	if(YN_CLOSE == "Y"){
        		this.gfnAlert( "최종마감 상태입니다.");
        		return;
        	}

        	// 1차평가자 !=  2차평가자
        	// 2차평가자가 평가하러 왔는데 1차 마감 안되었으면 평가못함
        	if (ID_1STSABUN != ID_2NDSABUN ){

        		if(ID_USER == ID_1STSABUN && YN_1STCLOSE == "Y"){
        			this.gfnAlert( "1차 평가마감 상태입니다.");
        			return;
        		}

        		if(ID_USER == ID_2NDSABUN && YN_1STCLOSE != "Y"){
        			this.gfnAlert( "1차 평가 진행중입니다.");
        			return;
        		}
        	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		// gUserType : 1 : 1차평가,   2: 2차평가
        		var CD_GRADE = (this.gUserType == 1) ? this.dsList.getColumn(i, "CD_1STGRADE") : this.dsList.getColumn(i, "CD_2NDGRADE");
        		if(this.gfnIsNull(CD_GRADE)) {
        			strMsg += i + "열 : 평가점수 필수입력값입니다.\n";
        		}
        	}
        	if(this.gfnIsNull(GRADE_HEALTH)) {
        		strMsg += "체력 평가는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(SERV_ATTI)) {
        		strMsg += "성격 평가는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(SERV_EVAL)) {
        		strMsg += "종합의견은 반드시 입력 하셔야 합니다.\n";
        	}
        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
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
        	//trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "combo") {
        		//trace("콤보->" + this.dsEVALGRADE.saveXML());

        		// 선택하려는 Cell 의 Cell 인덱스를 설정합니다.
        		// 선택하려는 Cell 이 Grid 에서 위치한 Row 의 인덱스를 설정합니다.

        		var nCellIdx = this.dxGrid.getBindCellIndex("body", "CD_1STGRADE");
        		if(this.gUserType == 2){
        			nCellIdx = this.dxGrid.getBindCellIndex("body", "CD_2NDGRADE");
        		}

        		var nRowIdx = 0;
        		this.dxGrid.setCellPos( nCellIdx , nRowIdx);
        		this.dxGrid.showEditor(true);
        		//this.dxGrid.dropdownCombo();

        	} else if (svcID == "save") {
        		if(errorCode == 0){
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	var CD_EVALGROUP = this.dsList.getColumn(row, "CD_EVALGROUP");
        	this.dsEVALGRADE.set_filterstr( "CD_EVALGROUP == " + CD_EVALGROUP );
        }

        this.fnGrid_oncellclick = function(obj,e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	switch(obj.getCurEditType()){
        		case "combo" :
        			if (obj.isDropdownCombo() == false) {
        				obj.showEditor(true);
        				obj.dropdownCombo();
        			}
        			break;

        		case "date" :
        			if (obj.isDropdownCalendar() == false) {
        				obj.showEditor(true);
        				obj.dropdownCalendar();
        			}
        			break;
        	}

        	/*
        	if(colnm == "CD_1STGRADE"){
        		obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		obj.setCellPos(e.cell);
        	}
        	*/
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 저장 버튼 클릭
        this.divBtns_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var GRADE_1STHEALTH = this.dsSearch.getColumn(0, "GRADE_1STHEALTH");	// 1차 체력 평가
        	var SERV_1STATTI = this.dsSearch.getColumn(0, "SERV_1STATTI");   		// 1차 성격 평가
        	var SERV_1STEVAL = this.dsSearch.getColumn(0, "SERV_1STEVAL");   		// 1차 종합의견
        	var GRADE_2NDHEALTH = this.dsSearch.getColumn(0, "GRADE_2NDHEALTH");	// 2차 체력 평가
        	var SERV_2NDATTI = this.dsSearch.getColumn(0, "SERV_2NDATTI");   		// 2차 성격 평가
        	var SERV_2NDEVAL = this.dsSearch.getColumn(0, "SERV_2NDEVAL");   		// 2차 종합의견

        	var ID_1STSABUN = this.dsSearch.getColumn(0, "ID_1STSABUN");			// 1차평가자
        	var ID_2NDSABUN = this.dsSearch.getColumn(0, "ID_2NDSABUN");			// 2차평가자
        	var ID_USER = this.AuthClient.ID_USER;

        	//ID_USER = "19041";	// for test

        	var GRADE_HEALTH = (ID_USER == ID_1STSABUN) ? GRADE_1STHEALTH : GRADE_2NDHEALTH;
        	var SERV_ATTI = (ID_USER == ID_1STSABUN) ? SERV_1STATTI : SERV_2NDATTI;
        	var SERV_EVAL = (ID_USER == ID_1STSABUN) ? SERV_1STEVAL : SERV_2NDEVAL;
        	//var CLOSE = (ID_USER == ID_1STSABUN) ? SERV_1STEVAL : SERV_2NDEVAL;
        	//YN_1STCLOSE
        	//YN_2NDCLOSE

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	//-----------------------------------------
        	// 지도관찰표 (체력,성격,의견) DAJPR_EVAL_RESULT_SAVE
        	//-----------------------------------------
        	this.dsSave.setColumn(nrow, "TY_SAVE", "U");	// 저장구분 'U':UPDATE
        	this.dsSave.setColumn(nrow, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "STEP", this.gUserType);	// 1 : 1차평가,   2: 2차평가
        	this.dsSave.setColumn(nrow, "CLOSE_ONLY", 2); 			// 1 : 마감만 UPDATE,  2: 마감 제외 UPDATE
        	this.dsSave.setColumn(nrow, "GRADE_HEALTH", GRADE_HEALTH);
        	this.dsSave.setColumn(nrow, "SERV_ATTI", SERV_ATTI);
        	this.dsSave.setColumn(nrow, "SERV_EVAL", SERV_EVAL);
        	this.dsSave.setColumn(nrow, "SABUN", ID_USER);

        	//-----------------------------------------
        	// 근무평가표 (능력,업적/태도) DAJPR_EVAL_RESULT_DETAIL_SAVE
        	//-----------------------------------------
        	this.dxGrid.updateToDataset();
        	this.dsSaveItems.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsSaveItems.addRow();
        		var CD_GRADE = (this.gUserType == 1) ? this.dsList.getColumn(i, "CD_1STGRADE") : this.dsList.getColumn(i, "CD_2NDGRADE");
        		this.dsSaveItems.setColumn(nrow, "TY_SAVE", "U");	// 저장구분 'U':UPDATE
        		this.dsSaveItems.setColumn(nrow, "TERM_EVAL", this.dsList.getColumn(i, "TERM_EVAL"));
        		this.dsSaveItems.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        		this.dsSaveItems.setColumn(nrow, "TY_EVAL", this.dsList.getColumn(i, "TY_EVAL"));
        		this.dsSaveItems.setColumn(nrow, "STD_EVAL", this.dsList.getColumn(i, "STD_EVAL"));
        		this.dsSaveItems.setColumn(nrow, "ITEM_EVAL", this.dsList.getColumn(i, "ITEM_EVAL"));
        		this.dsSaveItems.setColumn(nrow, "STEP", this.gUserType);	// 1 : 1차평가,   2: 2차평가
        		this.dsSaveItems.setColumn(nrow, "CD_GRADE", CD_GRADE);
        		this.dsSaveItems.setColumn(nrow, "SABUN", ID_USER);
        	}

        	if (this.dsSaveItems.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveItems=dsSaveItems save=dsSave";
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
        };


        //그룹 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           //this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_GROUP", "string");

           this.dsCombo.addRow();
           //this.dsCombo.setColumn(0, "TY_SEL", "A");
           this.dsCombo.setColumn(0, "CD_GROUP", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsEVALGRADE=combo0";
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

        // 취소 버튼 클릭
        this.divBtns_btnCancle_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        // 로그인 사번 평가자 체크
        this.fnCheckUser = function(){
        	var ID_1STSABUN = this.dsSearch.getColumn(0, "ID_1STSABUN");	// 1차평가자
        	var ID_2NDSABUN = this.dsSearch.getColumn(0, "ID_2NDSABUN");	// 2차평가자
        	var YN_1STCLOSE = this.gfnNvl(this.dsSearch.getColumn(0, "YN_1STCLOSE"), "N");	// 1차수 종료 여부
        	var P_TY_SAVE = this.getOwnerFrame().P_TY_SAVE; // (I:등록 / U:수정 / S:조회)
        	var ID_USER = this.AuthClient.ID_USER;

        	//ID_USER = "19041";	// for test
        	this.gUserType = 0;

        	if(P_TY_SAVE != "S"){	// 조회 (DAJ_EVALUATION_FINAL 최종평가조회에서만 사용)
        		if(ID_USER == ID_1STSABUN && YN_1STCLOSE == "N"){	// 로그인 사번이 1차평가자
        			this.gUserType = 1;
        		}

        		if(ID_USER == ID_1STSABUN && ID_1STSABUN == ID_2NDSABUN && YN_1STCLOSE == "N"){	// 로그인 사번이 1차평가자
        			this.gUserType = 1;
        		}

        		if(ID_USER == ID_2NDSABUN && YN_1STCLOSE == "Y"){	// 로그인 사번이 2차평가자이고 1차평가종료
        			this.gUserType = 2;
        		}
        	}

        	//trace(   "1차평가자->" +ID_1STSABUN+ "\n2차평가자->" + ID_2NDSABUN + "\n로그인사번-> " + ID_USER
        	//+ "\n조회->" + P_TY_SAVE+ "\n1차마감->" + YN_1STCLOSE + "\n 유저구분값->" + this.gUserType);


        }

        this.fnSetDisplay = function(){
        	var P_TY_SAVE = this.getOwnerFrame().P_TY_SAVE; // (I:등록 / U:수정 / S:조회)
        	var bReadOnly1 = (this.gUserType == 1) ? false : true;	// 로그인 사번이 1차평가자
        	var bReadOnly2 = (this.gUserType == 2) ? false : true;	// 로그인 사번이 2차평가자
        	var benable =  (P_TY_SAVE != "S") ? true : false;	// 조회 (DAJ_EVALUATION_FINAL 최종평가조회에서만 사용)

        	this.divBtns.form.btnSave.set_enable(benable) // 저장버튼

        	this.cboGRADE_1STHEALTH.set_readonly(bReadOnly1);
        	this.edtSERV_1STATTI.set_readonly(bReadOnly1);
        	this.edtSERV_1STEVAL.set_readonly(bReadOnly1);

        	this.cboGRADE_2NDHEALTH.set_readonly(bReadOnly2);
        	this.edtSERV_2NDATTI.set_readonly(bReadOnly2);
        	this.edtSERV_2NDEVAL.set_readonly(bReadOnly2);
        	this.dxGrid.info = (this.gUserType == 0) ? "Y" : "N";
        }

        this.fnEvalPrint = function(obj, e){
        	var YN_CLOSE = this.gfnNvl(this.dsSearch.getColumn(0, "YN_CLOSE"), "N");			// 마감여부
        	if(YN_CLOSE == "Y"){

        		this.dsReport.clearData();
        		this.dsReport.addRow();
        		this.dsReport.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        		this.dsReport.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));

        		var inProc		= "_dsProc";
        		//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        		var inParam 	= "";						// 필요없는 경우 생략
        		var inData      = "report=dsReport";
        		var reportpath  = "/da/daj/DAJ_EVAL_RESULT.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	}else{
        		this.gfnAlert( "최종마감 상태에서 출력 가능합니다.");
        		return;
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divEval1.form.sta00.addEventHandler("onclick",this.divEval1_sta00_onclick,this);
            this.divEval1.form.sta01.addEventHandler("onclick",this.divEval1_sta00_onclick,this);
            this.divBtns.form.btnCancle.addEventHandler("onclick",this.divBtns_btnCancle_onclick,this);
            this.divBtns.form.btnSave.addEventHandler("onclick",this.divBtns_btnSave_onclick,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_RESULT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
