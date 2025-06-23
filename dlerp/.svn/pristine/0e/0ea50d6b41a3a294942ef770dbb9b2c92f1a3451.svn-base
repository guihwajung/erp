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
            this.set_titletext("개인별실적등록");
            this.getSetter("maxwidth").set("635");
            this.getSetter("maxheight").set("680");
            if (Form == this.constructor)
            {
                this._setFormPosition(601,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DT_WORK\"/><Col id=\"ID_PERSON\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_WORKINFO_DETAIL</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_WORKINFO_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TM_START\" type=\"STRING\" size=\"256\"/><Column id=\"TM_END\" type=\"STRING\" size=\"256\"/><Column id=\"TM_BREAK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SOVER\" type=\"STRING\" size=\"256\"/><Column id=\"TM_EOVER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"TM_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TM_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_WORK1\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_OVER\" type=\"STRING\" size=\"256\"/><Column id=\"WK_LIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"WK_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM_EWORK\" type=\"STRING\" size=\"256\"/><Column id=\"HH_SOVER\" type=\"STRING\" size=\"256\"/><Column id=\"MM_SOVER\" type=\"STRING\" size=\"256\"/><Column id=\"HH_EOVER\" type=\"STRING\" size=\"256\"/><Column id=\"MM_EOVER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CHANGE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_EARLY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMM_EARLY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_SOVER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_EOVER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_SWORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHH_EWORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMM_WORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","134","47","466","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","0","47","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("근무일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDT_NAME","139","52","457","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","424","76","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","429","81","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","309","76","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","134","76","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","139","81","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","0","76","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","134","105","466","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORG","139","110","457","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","0","105","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","424","206","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_END","429","211","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","309","206","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("퇴근시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","134","206","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","0","206","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("출근시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","134","177","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDS_WORK","139","182","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","0","177","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","140","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("근무정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta14","424","177","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta15","309","177","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("결재구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDS_APPROVAL","429","182","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_START","139","211","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","424","235","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","309","235","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("소정근로종료시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta18","134","235","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta19","0","235","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("소정근로시작시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta20","424","264","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_EWORK","429","240","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta21","309","264","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("연장근로종료시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","134","264","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_SWORK","139","240","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","0","264","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("연장근로시작시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta24","424","293","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta25","309","293","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("연장근로시간합");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta26","134","293","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","0","293","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("소정근로시간 합");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta28","424","322","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_EOVER","429","269","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta29","309","322","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("휴게시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta30","134","322","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_SOVER","139","269","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta31","0","322","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("일 근무시간 합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Edit("txtSUM_OVER","429","298","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("txtSUM_WORK","139","298","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("txtTM_WORK_DAY","139","327","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit","470","370","130","27",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("연장근로 변경신청");
            this.addChild(obj.name, obj);

            obj = new Div("divDataSubmit","0","412","600","208",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta54_00","134","29","466","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta44","424","0","176","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta47","134","0","176","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta45","309","0","116","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("2");
            obj.set_text("주간근무시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Edit("txtWK_WORK","429","5","167","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta46","0","0","135","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("4");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta58","134","87","466","71",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta59","0","87","135","71",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("6");
            obj.set_text("연장근로시간 사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta54","134","58","466","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta55","6","168","135","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("8");
            obj.set_text("대체근무일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta51","0","58","135","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("9");
            obj.set_text("연장근무시작시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta48","424","58","176","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta49","309","58","116","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("11");
            obj.set_text("연장근무종료시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","139","92","457","61",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("12");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboMM_EOVER","504","63","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM_EARLY");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboHH_EOVER","429","63","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_EOVER");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboMM_SOVER","214","63","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("15");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM_EARLY");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboHH_SOVER","139","63","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("16");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_SOVER");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboCD_CHANGE","139","5","167","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("17");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_CHANGE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Div("divBtns","400","178","200","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("18");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Button("btnOK","20","0","80","27",null,null,null,null,null,null,this.divDataSubmit.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.divDataSubmit.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnAPP","btnOK:20","0","80","27",null,null,null,null,null,null,this.divDataSubmit.form.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("전자결재");
            this.divDataSubmit.form.divBtns.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHANGE","145","173","105","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta51_00","0","29","135","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("20");
            obj.set_text("소정근무시작시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Static("sta49_00","309","29","116","30",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("21");
            obj.set_text("소정근무종료시간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboHH_SWORK","139","33","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("23");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_SWORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboMM_SWORK","214","33","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("24");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM_WORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboHH_EWORK","429","33","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("25");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsHH_EWORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Combo("cboMM_EWORK","504","33","70","20",null,null,null,null,null,null,this.divDataSubmit.form);
            obj.set_taborder("26");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsMM_WORK");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divDataSubmit.addChild(obj.name, obj);

            obj = new Edit("txtTM_BREAK","429","327","167","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","32","372","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","txtDT_NAME","value","dsData","DT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","txtDS_HNAME","value","dsData","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","txtDS_POSITION","value","dsData","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","txtDS_ORG","value","dsData","DS_ORG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","txtDS_WORK","value","dsData","DS_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","txtTM_START","value","dsData","TM_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","txtTM_SWORK","value","dsData","TM_SWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","txtTM_SOVER","value","dsData","TM_SOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","txtSUM_WORK","value","dsData","SUM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","txtTM_WORK_DAY","value","dsData","TM_WORK_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","txtSUM_OVER","value","dsData","SUM_OVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","txtTM_EOVER","value","dsData","TM_EOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","txtTM_EWORK","value","dsData","TM_EWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","txtTM_BREAK","value","dsData","TM_BREAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","txtTM_END","value","dsData","TM_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","txtDS_APPROVAL","value","dsData","DS_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDataSubmit.form.txtWK_WORK","value","dsData","WK_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDataSubmit.form.txtDS_REMARK","value","dsData","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDataSubmit.form.cboMM_EOVER","value","dsData","MM_EOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDataSubmit.form.cboHH_EOVER","value","dsData","HH_EOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divDataSubmit.form.cboMM_SOVER","value","dsData","MM_SOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divDataSubmit.form.cboHH_SOVER","value","dsData","HH_SOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divDataSubmit.form.cboCD_CHANGE","value","dsData","CD_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDataSubmit.form.tclDT_CHANGE","value","dsData","DT_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDataSubmit.form.cboHH_SWORK","value","dsData","HH_SWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDataSubmit.form.cboMM_SWORK","value","dsData","MM_SWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDataSubmit.form.cboHH_EWORK","value","dsData","HH_EWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDataSubmit.form.cboMM_EWORK","value","dsData","MM_EWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtID_PERSON","value","dsList","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAG_WORKDAY_INFO_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gbSetVisible = "false";	// divDataSubmit 숨김

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();

        	// 연장근로 변경신청 버튼 밑에부분 숨기고 숨긴부분만큼 화면을 줄인다(버튼클릭시 숨긴부분 보이고 화면도 늘린다)
        	this.divDataSubmit.set_visible(false);
        	this.getOwnerFrame().set_height(462);
        	this.set_height(462);

        	// 메인창 파라미터 받기
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "DT_WORK", this.getOwnerFrame().DT_WORK);
        	this.dsList.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        	this.dsList.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);

        	var today = this.gfnGetDate();
        	if(this.dsList.getColumn(0, "DT_WORK") < today.substr(0,8)){
        		this.btnSubmit.set_enable(false);
        	}else{
        		this.btnSubmit.set_enable(true);
        	}

        	this.fnSelect();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_CORP = this.ccfCD_CORP;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("DT_WORK", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_WORK", "string");
        	this.dsSave.addColumn("HH_SOVER", "string");
        	this.dsSave.addColumn("MM_SOVER", "string");
        	this.dsSave.addColumn("HH_EOVER", "string");
        	this.dsSave.addColumn("MM_EOVER", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DT_CHANGE", "string");
        	//
        	this.dsSave.addColumn("HH_SWORK", "string");
        	this.dsSave.addColumn("MM_SWORK", "string");
        	this.dsSave.addColumn("HH_EWORK", "string");
        	this.dsSave.addColumn("MM_EWORK", "string");
        	//
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        };

         /*
          *	조회
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_WORK", this.dsList.getColumn(0, "DT_WORK"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsData=select0";
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

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	this.dlgfnSave();
        };


        this.dlgfnSave = function() {
        	//if (!this.fnDataValidate()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "DT_WORK", this.dsList.getColumn(0, "DT_WORK"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "CD_WORK", this.dsData.getColumn(0, "CD_CHANGE"));
        	this.dsSave.setColumn(nrow, "HH_SOVER", this.dsData.getColumn(0, "HH_SOVER"));
        	this.dsSave.setColumn(nrow, "MM_SOVER", this.dsData.getColumn(0, "MM_SOVER"));
        	this.dsSave.setColumn(nrow, "HH_EOVER", this.dsData.getColumn(0, "HH_EOVER"));
        	this.dsSave.setColumn(nrow, "MM_EOVER", this.dsData.getColumn(0, "MM_EOVER"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsData.getColumn(0, "DS_REMARK"));
        	this.dsSave.setColumn(nrow, "DT_CHANGE", this.dsData.getColumn(0, "DT_CHANGE").toString().substr(0,8));
        	//
        	this.dsSave.setColumn(nrow, "HH_SWORK", this.dsData.getColumn(0, "HH_SWORK"));
        	this.dsSave.setColumn(nrow, "MM_SWORK", this.dsData.getColumn(0, "MM_SWORK"));
        	this.dsSave.setColumn(nrow, "HH_EWORK", this.dsData.getColumn(0, "HH_EWORK"));
        	this.dsSave.setColumn(nrow, "MM_EWORK", this.dsData.getColumn(0, "MM_EWORK"));
        	//
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnDataValidate = function(){
        	/*
        	if(this.gfnIsNull(this.ctclDT_BASE.value)) {
        		this.ctclDT_BASE.setFocus();
        		this.gfnAlert("기준일자를 입력해주세요");
        		return false;
        	}
        	else if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인을 입력해주세요");
        		return false;
        	}
        	*/
        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.fnClose = function() {
        				//this.getParentContext().close(true);
        				this.fnSelect();
        			//}
        			//this.gfnAlert("작업이 완료 되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "select") {
        		if(this.dsData.getColumn(0,"CD_CHANGE") == "C"){	//휴일근무일때만 활성화
        			this.divDataSubmit.form.tclDT_CHANGE.set_enable(true);
        		}else{
        			this.divDataSubmit.form.tclDT_CHANGE.set_enable(false);
        			this.dsData.setColumn(0, "DT_CHANGE", "");
        		}
        	}
        }


        // 연장근로 변경신청 버튼 클릭 이벤트
        this.btnSubmit_onclick = function(obj,e)
        {
        	// 연장근로 변경신청 내역 보이거나 숨기기
        	if(this.gbSetVisible == "false"){
        		this.gbSetVisible = "true";
        		this.divDataSubmit.set_visible(true);
        		this.getOwnerFrame().set_height(680);
        		this.set_height(680);
        	}else{
        		this.gbSetVisible = "false";
        		this.divDataSubmit.set_visible(false);
        		this.getOwnerFrame().set_height(462);
        		this.set_height(462);
        	}
        };

        // 전자결재 버튼 클릭 이벤트
        this.divDataSubmit_divBtns_btnAPP_onclick = function(obj,e)
        {
        	//if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        	//	this.gfnAlert("저장 후 처리하세요.", "");
        	//	return;
        	//}

        	var param = {};
        	param.V1 = this.dsList.getColumn(0, "ID_PERSON");
        	param.V2 = this.dsList.getColumn(0, "DT_WORK");
        	param.V3 = "";
        	param.V4 = "";
        	param.ID_AP = this.dsData.getColumn(0, "NO_APPROVAL");	// 전자결재문서번호
        	param.DS_ETITLE = "연장근무신청";

        	this.gfnFormOpen("DAG", "DAG_WORKDAY_INFO_APP", "fnAprvDialogCallback", param, 1200, 750);
        };

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.fnSelect();
        	//}
        };



        //근무구분 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "P");
           this.dsCombo.setColumn(0, "CD_PREFIX", "GL");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_CHANGE=combo0";
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


        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "CD_CHANGE") {	// 근무구분
        			if(this.dsData.getColumn(0,"CD_CHANGE") == "C"){	//휴일근무일때만 활성화
        				this.divDataSubmit.form.tclDT_CHANGE.set_enable(true);
        			}else{
        				this.divDataSubmit.form.tclDT_CHANGE.set_enable(false);
        				this.dsData.setColumn(0, "DT_CHANGE", "");
        			}
        		}

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta05.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta06.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta07.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta10.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta11.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta08.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta09.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta12.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta13.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta14.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta15.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta16.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta17.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta18.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta19.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta20.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta21.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta22.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta23.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta24.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta25.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta26.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta27.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta28.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta29.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta30.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta31.addEventHandler("onclick",this.sta05_onclick,this);
            this.btnSubmit.addEventHandler("onclick",this.btnSubmit_onclick,this);
            this.divDataSubmit.form.sta54_00.addEventHandler("onclick",this.sta23_onclick,this);
            this.divDataSubmit.form.sta44.addEventHandler("onclick",this.sta23_onclick,this);
            this.divDataSubmit.form.sta47.addEventHandler("onclick",this.sta23_onclick,this);
            this.divDataSubmit.form.sta45.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.sta46.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.sta58.addEventHandler("onclick",this.sta23_onclick,this);
            this.divDataSubmit.form.sta59.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.sta54.addEventHandler("onclick",this.sta23_onclick,this);
            this.divDataSubmit.form.sta55.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.sta51.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.sta48.addEventHandler("onclick",this.sta23_onclick,this);
            this.divDataSubmit.form.sta49.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divDataSubmit.form.divBtns.form.btnAPP.addEventHandler("onclick",this.divDataSubmit_divBtns_btnAPP_onclick,this);
            this.divDataSubmit.form.sta51_00.addEventHandler("onclick",this.sta05_onclick,this);
            this.divDataSubmit.form.sta49_00.addEventHandler("onclick",this.sta05_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_WORKDAY_INFO_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
