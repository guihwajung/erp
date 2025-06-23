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
            this.set_titletext("New Form");
            this.getSetter("maxwidth").set("1280");
            this.getSetter("maxheight").set("720");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">sphelp</Col><Col id=\"SP\">DZZPR_SP_PARAM_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_FORMBUTTON_SELECT</Col><Col id=\"TARGET\">btnselect</Col></Row><Row><Col id=\"TARGET\">btnsave</Col><Col id=\"SP\">DZZPR_FORMBUTTON_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPreview", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormSet", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_GRID\" type=\"STRING\" size=\"256\"/><Column id=\"SELECTSP\" type=\"STRING\" size=\"256\"/><Column id=\"INSERTSP\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATESP\" type=\"STRING\" size=\"256\"/><Column id=\"DELETESP\" type=\"STRING\" size=\"256\"/><Column id=\"SAVESP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\"/><Col id=\"ID_GRID\"/><Col id=\"SELECTSP\"/><Col id=\"INSERTSP\"/><Col id=\"UPDATESP\"/><Col id=\"DELETESP\"/><Col id=\"SAVESP\"/><Col id=\"TY_SP\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProperties", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"UNDERLINE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"CDTEXTWIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"CODEFINDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATEFORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ID_COMP\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_COL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateFormat", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">YYYY_MM_DD</Col><Col id=\"DS_CODE\">YYYY_MM_DD</Col></Row><Row><Col id=\"CD_CODE\">YYYY_MM</Col><Col id=\"DS_CODE\">YYYY_MM</Col></Row><Row><Col id=\"CD_CODE\">YYYY</Col><Col id=\"DS_CODE\">YYYY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComboBox", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_COMP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommonBtns", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">INSERT</Col><Col id=\"TEXT\">입력</Col><Col id=\"VISIBLE\">Y</Col></Row><Row><Col id=\"ID\">SAVE</Col><Col id=\"TEXT\">저장</Col><Col id=\"VISIBLE\">Y</Col></Row><Row><Col id=\"ID\">DELETE</Col><Col id=\"TEXT\">삭제</Col><Col id=\"VISIBLE\">Y</Col></Row><Row><Col id=\"ID\">PRINT</Col><Col id=\"TEXT\">출력</Col><Col id=\"VISIBLE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExtBtns", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">FORM</Col><Col id=\"DS_CODE\">FORM</Col></Row><Row><Col id=\"CD_CODE\">EXEC</Col><Col id=\"DS_CODE\">EXEC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpHelp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpHelp4cond", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpRadio", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Radio</Col><Col id=\"DS_CODE\">Radio</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddSP", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\"/></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindCol", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData1","0","10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","50",null,null,null,null,this.divData1.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData1.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData1.form.tabData);
            obj.set_text("Form Setting");
            this.divData1.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta00","10","0",null,"22","0",null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_text("Form Setting");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new GroupBox("grbGrid","10","sta00:10","689","71",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_text("Grid Info");
            obj.set_edge("");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","34","58","50","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_text("Grid ID");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCdSystem","94","58","50","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_maxlength("2");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtGridId","149","58","360","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("1");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnLoad","515","58","69","27",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_text("Load");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new GroupBox("grbSp","11","114","519","203",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_text("Stored Procedure");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","grbSp:-464","grbSp:-165","60","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_text("Select SP");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtSelectSp","sta01:10","grbSp:-165","375","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("2");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","grbSp:-464","sta01:5","60","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_text("Insert SP");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtInsertSp","sta02:10","txtSelectSp:5","375","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("3");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","grbSp:-464","sta02:5","60","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_text("Update SP");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtUpdateSp","sta03:10","txtInsertSp:5","375","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("4");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","grbSp:-464","sta03:5","60","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_text("Delete SP");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDeleteSp","sta04:10","txtUpdateSp:5","375","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("5");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","grbSp:-464","sta04:5","60","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_text("Save SP");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtSaveSp","sta07:10","txtDeleteSp:5","375","25",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SP","25","197","20","117",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsTY_SP");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("div00","48","193","11","60",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_border("1px solid black, 0px none, 1px solid black, 1px solid black");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnAddSP","549","120","69","27",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_text("Add");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnDelSP","628","120","69","27",null,null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_text("Remove");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridAddSP","549","156",null,"161","10",null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsAddSP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Target\"/><Cell col=\"1\" text=\"ds Name\"/><Cell col=\"2\" text=\"SP Name\"/></Band><Band id=\"body\"><Cell text=\"bind:TARGET\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:DS_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:SP_NAME\" edittype=\"text\"/></Band></Format></Formats>");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","10","grbSp:10",null,"22","10",null,null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_text("Grid Preview");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridPreview","10","sta06:10",null,null,"10","10",null,null,null,null,this.divData1.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj._setContents("");
            this.divData1.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData1.form.tabData);
            obj.set_text("Condition Setting");
            this.divData1.form.tabData.addChild(obj.name, obj);

            obj = new Div("divCtrl","10","50",null,"85","10",null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_border("1px solid darkorange");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnAddStatic","10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("Static");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnAddEdit","btnAddStatic:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("Edit");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnAddCodeFind","btnAddEdit:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("CodeFind");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnAddCalendar","btnAddCodeFind:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("Calendar");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnAddComboBox","btnAddCalendar:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("ComboBox");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnAddRadio","btnAddComboBox:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_text("Radio");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnRemove","btnAddRadio:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_text("Remove");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnClear","btnRemove:10","10","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_text("Clear");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","10","divCtrl:10",null,"22","10",null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_text("Properties");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridProperties","10","sta00:10",null,"120","10",null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsProperties");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Width\"/><Cell col=\"2\" text=\"Text\"/><Cell col=\"3\" text=\"isUnderline\"/><Cell col=\"4\" text=\"isRequired\"/><Cell col=\"5\" text=\"CDTextWidth\"/><Cell col=\"6\" text=\"CodeFindName\"/><Cell col=\"7\" text=\"DateFormat\"/><Cell col=\"8\" text=\"isChecked\"/><Cell col=\"9\" text=\"BindColumn\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:WIDTH\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"2\" text=\"bind:TEXT\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:UNDERLINE\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" text=\"bind:REQUIRED\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:CDTEXTWIDTH\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:CODEFINDNAME\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:DATEFORMAT\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsDateFormat\" combodatacol=\"DS_CODE\" combocodecol=\"CD_CODE\"/><Cell col=\"8\" text=\"bind:CHECKED\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"9\" text=\"bind:BIND_COL\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsBindCol\" combodatacol=\"DS_CODE\" combocodecol=\"CD_CODE\"/></Band></Format></Formats>");
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Div("divBindDataset","10","objGridProperties:10",null,"170","10",null,null,null,null,null,this.divData1.form.tabData.tab2.form);
            this.divData1.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","0","10","120","22",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form.divBindDataset.form);
            obj.set_taborder("11");
            obj.set_text("BindDataSet");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab2.form.divBindDataset.addChild(obj.name, obj);

            obj = new Grid("objGridBindDs","0","sta01:10",null,"120","0",null,null,null,null,null,this.divData1.form.tabData.tab2.form.divBindDataset.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsComboBox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Code\" edittype=\"text\"/><Cell col=\"1\" text=\"Data\"/><Cell col=\"2\" text=\"id\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CODE\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:DS_CODE\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:ID_COMP\"/></Band></Format></Formats>");
            this.divData1.form.tabData.tab2.form.divBindDataset.addChild(obj.name, obj);

            obj = new Button("btnAddRow","sta01:50","8","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form.divBindDataset.form);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.divData1.form.tabData.tab2.form.divBindDataset.addChild(obj.name, obj);

            obj = new Button("btnRemoveRow","btnAddRow:5","8","70","27",null,null,null,null,null,null,this.divData1.form.tabData.tab2.form.divBindDataset.form);
            obj.set_taborder("3");
            obj.set_text("Remove");
            this.divData1.form.tabData.tab2.form.divBindDataset.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData1.form.tabData);
            obj.set_text("Form Button Setting");
            this.divData1.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta00","10","10","200","22",null,null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("Common Button Visible");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGridCommonBtns","10","sta00:10",null,"122","10",null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCommonBtns");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Text\"/><Cell col=\"2\" text=\"Visible\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:TEXT\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:VISIBLE\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","10","objGridCommonBtns:20","200","22",null,null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_text("Extension Button");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnAddExtBtn","sta01:10","183","100","27",null,null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_text("Add Ext Buton");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnDelExtBtn","btnAddExtBtn:10","183","100","27",null,null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("Del Ext Buton");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGridExtBtns","10","sta01:10",null,"200","10",null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsExtBtns");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Text\"/><Cell col=\"2\" text=\"Type\"/><Cell col=\"3\" text=\"Remark\"/><Cell col=\"4\" text=\"Group\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:TEXT\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:TYPE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsBtnType\" combodatacol=\"DS_CODE\" combocodecol=\"CD_CODE\"/><Cell col=\"3\" text=\"bind:REMARK\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:GROUP\" edittype=\"text\"/></Band></Format></Formats>");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta02","10","objGridExtBtns:20",null,"22","10",null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_text("Button Preview");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Div("divBtns","10","sta02:10",null,"65","10",null,null,null,null,null,this.divData1.form.tabData.tab3.form);
            obj.set_border("1px solid limegreen");
            this.divData1.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Div("divComBtn","5","10","300","43",null,null,null,null,null,null,this.divData1.form.tabData.tab3.form.divBtns.form);
            obj.set_taborder("5");
            this.divData1.form.tabData.tab3.form.divBtns.addChild(obj.name, obj);

            obj = new Div("divExtBtn","divComBtn:10","10",null,"43","10",null,null,null,null,null,this.divData1.form.tabData.tab3.form.divBtns.form);
            obj.set_taborder("5");
            this.divData1.form.tabData.tab3.form.divBtns.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData1.form.tabData);
            obj.set_text("xfdl Source");
            this.divData1.form.tabData.addChild(obj.name, obj);

            obj = new TextArea("txtSrc","0","0",null,null,"0","0",null,null,null,null,this.divData1.form.tabData.tab4.form);
            obj.set_taborder("0");
            this.divData1.form.tabData.tab4.addChild(obj.name, obj);

            obj = new TextArea("txtTemplateSrc","1079","22","100","50",null,null,null,null,null,null,this.divData1.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_value("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<FDL version=\"2.0\">\n  <Form id=\"form\" width=\"1280\" height=\"720\" titletext=\"New Form\" onload=\"form_onload\">\n    <Layouts>\n      <Layout>\n        <Div id=\"divSearch\" taborder=\"0\" left=\"0\" top=\"0\" height=\"45\" right=\"0\" cssclass=\"div_SEARCH_Bg\" formscrolltype=\"none\">\n          <Layouts>\n            <Layout>\n$condition$\n            </Layout>\n          </Layouts>\n        </Div>\n        <Div id=\"divData\" taborder=\"0\" left=\"0\" top=\"divSearch:10\" bottom=\"0\" right=\"0\" cssclass=\"div_DATA_Bg\">\n          <Layouts>\n            <Layout>\n              <Grid id=\"objGrid\" taborder=\"0\" left=\"0\" top=\"0\" bottom=\"0\" right=\"0\"/>\n            </Layout>\n          </Layouts>\n        </Div>\n      </Layout>\n    </Layouts>\n    <Script type=\"xscript5.1\"><![CDATA[this.objApp = this.gfnGetApplication();\n\nthis.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n{\n\t// -- 필수 -------------------//\n\tthis.gfnFormOnLoad(this);\t\n\tthis.gfnFormInfo(this);\t\t\n\t// ---------------------------//\n\t\n\tthis.fnSetButton();\n\tthis.fnSetExtendButton();\n\tthis.fnSetVariable();\n\tthis.fnSetEvent();\n\tthis.fnSetParameter();\n};\n\n/************************************************************************\n * 버튼 설정 : 화면(Tab) 전환시 마다 호출\n * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리\n ************************************************************************/\nthis.fnSetButton = function() {\n}\n\n/************************************************************************\n * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)\n ************************************************************************/\nthis.fnSetExtendButton = function() {\n$extButtons$\n};\n\n/************************************************************************\n * 변수 선언\n ************************************************************************/\nthis.fnSetVariable = function() {\t\n\tthis.dxGrid = this.divData.form.objGrid;\n\n$variables$\n};\n\n/************************************************************************\n * 이벤트 설정\n ************************************************************************/\nthis.fnSetEvent = function() {\n\t// 그리드 초기화\n$gridinit$\n\n$declare_events$\n};\n\n/************************************************************************\n * 파라미터 설정\n ************************************************************************/\nthis.fnSetParameter = function() {\n$parameters$\n}\n\n/************************************************************************\n * 컨트롤 이벤트\n ************************************************************************/\n /*\n  *\t조회 버튼\n  */\nthis.fnSelect = function() {\n\tif (!this.fnSelectValidate()) return false;\n\t\n\tthis.gfnGridBeforeSelect(this.dxGrid);\n\t\n\tthis.dsSelect.clearData();\n\tthis.dsSelect.addRow();\n$select_param$\n\t\n\tvar strSvcId    = \"select\";\n\tvar strSvcType  = \"grid\";\n\tvar inProc\t\t= \"_dsProc\";\n\tvar inData      = \"select=dsSelect\";\n\tvar outData     = \"dsList=select0\";\n\tvar strArg      = \"\";\n\tvar callBackFnc = \"fnCallback\";\n\t\n\tthis.gfnTransaction( strSvcId , \t// transaction을 구분하기 위한 svc id값\n\t\t\t\t\t\tstrSvcType , \t// transaction을 요청할 구분\n\t\t\t\t\t\tinProc,\t\t\t// Procedure 정보 Dataset 이름\n\t\t\t\t\t\tinData , \t\t// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭\n\t\t\t\t\t\toutData , \t\t// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭\n\t\t\t\t\t\tstrArg, \t\t\t// 입력갑스로 보낼 arguments, strFormData=\"20120607\"\n\t\t\t\t\t\tcallBackFnc); // 통신방법 정의 [생략가능]\n}\n\n/*\n *\t입력 버튼\n */\nthis.fnAdd = function() {\n\tvar nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current\n}\n\n/*\n *\t삭제 버튼\n */\nthis.fnDel = function() {\n\tthis.gfnGridDel(this.dxGrid);\n}\n\n/*\n *\t저장 버튼\n */\nthis.fnSave = function() {\n\t// 그리드 필수항목 체크\n\tif (!this.gfnGridValidate(this.dxGrid)) return;\t\n\n\tthis.dxGrid.updateToDataset();\n\n$save_param$\n\n\tvar strSvcId    = \"save\";\n\tvar strSvcType  = \"save\";\n\tvar inProc\t\t= \"_dsProc\";\n\tvar inData      = \"$save_param2$\";\n\tvar outData     = \"\";\n\tvar strArg      = \"\";\n\tvar callBackFnc = \"fnCallback\";\n\t\n\tthis.gfnTransaction( strSvcId , \t// transaction을 구분하기 위한 svc id값\n\t\t\t\t\t\tstrSvcType , \t// transaction을 요청할 구분\n\t\t\t\t\t\tinProc,\t\t\t// Procedure 정보 Dataset 이름\n\t\t\t\t\t\tinData , \t\t// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭\n\t\t\t\t\t\toutData , \t\t// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭\n\t\t\t\t\t\tstrArg, \t\t\t// 입력갑스로 보낼 arguments, strFormData=\"20120607\"\n\t\t\t\t\t\tcallBackFnc); // 통신방법 정의 [생략가능]\n}\n\n/*\n *\t엑셀 버튼\n */\nthis.fnExcel = function() {\n\tthis.gfnExcelExport(this.dxGrid);\n}\n\n/*\n *\t출력 버튼\n */\nthis.fnPrint = function() {\n}\n\n/************************************************************************\n * Validate\n ************************************************************************/\n/*\n *\t조회 Validate\n */\nthis.fnSelectValidate = function() {\n\tvar validate = true;\n\n$select_validate$\n\n\treturn validate;\n};\n\n/************************************************************************\n * 콜백 이벤트\n ************************************************************************/\n/*\n *\t콜백 처리\n */\nthis.fnCallback = function(svcID, errorCode, errorMsg)\n{\n\tif (svcID == \"select\") {\n\t\tthis.gfnGridAfterSelect(this.dxGrid);\t\n\t}\n\telse if(svcID == \"save\") {\n\t\tif (errorCode == 0) {\n\t\t\tthis.FormBtns.Select.click();\n\t\t} else {\n\t\t\tthis.gfnAlert(errorMsg);\n\t\t}\n\t}\n}\n\n/************************************************************************\n * 코드파인드 이벤트\n ************************************************************************/\n$codefind_event$\n\n/************************************************************************\n * 그리드 이벤트\n ************************************************************************/\n $grid_event$\n\n/************************************************************************\n * 기타 이벤트\n ************************************************************************/\nthis.dsSearch_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)\n{\n\tif(e.oldvalue != e.newvalue) {\n\t\tthis.gfnSetFormStatus(this);\t// 폼상태 초기화\n\t\tthis.gfnGridClear(this.dxGrid);\t\n\t}\n};\n\n$btn_event$\n\n]]></Script>\n    <Objects>\n      <Dataset id=\"dsList\"/>\n      <Dataset id=\"_dsProc\">\n        <ColumnInfo>\n          <Column id=\"TARGET\" type=\"STRING\" size=\"256\"/>\n          <Column id=\"SP\" type=\"STRING\" size=\"256\"/>\n        </ColumnInfo>\n        <Rows>\n$dsProc$\n        </Rows>\n      </Dataset>\n      <Dataset id=\"dsSearch\" onvaluechanged=\"dsSearch_onvaluechanged\">\n$dsSearch$\n      </Dataset>\n$dataset$\n    </Objects>\n$binding$\n  </Form>\n</FDL>\n");
            obj.set_visible("false");
            this.divData1.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnGenerate","0",null,null,"40","0","5",null,null,null,null,this.divData1.form);
            obj.set_taborder("1");
            obj.set_text("Generate");
            this.divData1.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData1.form.tabData.tab1.form.txtCdSystem","value","dsFormSet","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData1.form.tabData.tab1.form.txtGridId","value","dsFormSet","ID_GRID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData1.form.tabData.tab1.form.txtSelectSp","value","dsFormSet","SELECTSP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData1.form.tabData.tab1.form.txtInsertSp","value","dsFormSet","INSERTSP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData1.form.tabData.tab1.form.txtUpdateSp","value","dsFormSet","UPDATESP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData1.form.tabData.tab1.form.txtDeleteSp","value","dsFormSet","DELETESP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData1.form.tabData.tab1.form.txtSaveSp","value","dsFormSet","SAVESP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData1.form.tabData.tab1.form.rdoTY_SP","value","dsFormSet","TY_SP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_DEV_BASIC3.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var idx = 0;
        var arrCtrls = [];
        var selectedCtrl = null;

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

        	this.fnUpdatePreview();
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
        	this.dxGridPreview = this.divData1.form.tabData.tab1.form.objGridPreview;
        	this.dxGridProperties = this.divData1.form.tabData.tab2.form.objGridProperties;
        	this.dxGridBindDs = this.divData1.form.tabData.tab2.form.divBindDataset.form.objGridBindDs;
        	this.dxGridCommonBtns = this.divData1.form.tabData.tab3.form.objGridCommonBtns;
        	this.dxGridExtBtns = this.divData1.form.tabData.tab3.form.objGridExtBtns;
        	this.dxGridAddSP = this.divData1.form.tabData.tab1.form.objGridAddSP;

        	this.divBindDataset = this.divData1.form.tabData.tab2.form.divBindDataset;

        	this.divCtrl = this.divData1.form.tabData.tab2.form.divCtrl;

        	this.divBtns = this.divData1.form.tabData.tab3.form.divBtns;

        	this.txtSrc = this.divData1.form.tabData.tab4.form.txtSrc;
        	this.txtTemplateSrc = this.divData1.form.tabData.tab4.form.txtTemplateSrc;

        	this.txtSelectSp = this.divData1.form.tabData.tab1.form.txtSelectSp;
        	this.txtInsertSp = this.divData1.form.tabData.tab1.form.txtInsertSp;
        	this.txtUpdateSp = this.divData1.form.tabData.tab1.form.txtUpdateSp;
        	this.txtDeleteSp = this.divData1.form.tabData.tab1.form.txtDeleteSp;
        	this.txtSaveSp = this.divData1.form.tabData.tab1.form.txtSaveSp;
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

        	this.dsSelectParam = new Dataset();
        	this.dsSelectParam.addColumn("SP_NAME", "string");

        	this.dsBtnSelect = new Dataset();
        	this.dsBtnSelect.addColumn("ID_FORM", "string");

        	this.dsBtnSave = new Dataset();
        	this.dsBtnSave.addColumn("TY_SAVE", "string");
        	this.dsBtnSave.addColumn("ID_FORM", "string");
        	this.dsBtnSave.addColumn("ID_BUTTON", "string");
        	this.dsBtnSave.addColumn("DS_BUTTON", "string");
        	this.dsBtnSave.addColumn("TY_BUTTON", "string");
        	this.dsBtnSave.addColumn("RM_BUTTON", "string");
        	this.dsBtnSave.addColumn("GR_1", "string");
        	this.dsBtnSave.addColumn("GR_2", "string");
        	this.dsBtnSave.addColumn("GR_3", "string");
        	this.dsBtnSave.addColumn("GR_5", "string");
        	this.dsBtnSave.addColumn("GR_7", "string");
        	this.dsBtnSave.addColumn("GR_9", "string");
        	this.dsBtnSave.addColumn("TY_AUTH_F", "string");
        	this.dsBtnSave.addColumn("TY_AUTH_U", "string");
        	this.dsBtnSave.addColumn("TY_AUTH_R", "string");
        	this.dsBtnSave.addColumn("YN_QUERYX", "string");
        	this.dsBtnSave.addColumn("YN_UPDATEBLOCK", "string");
        	this.dsBtnSave.addColumn("CD_MODULE", "string");
        	this.dsBtnSave.addColumn("SN_ORDER", "int");
        	this.dsBtnSave.addColumn("NM_COLUMN", "string");
        	this.dsBtnSave.addColumn("LR_BUTTON", "string");
        	this.dsBtnSave.addColumn("NM_GROUP", "string");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        	if (svcID == "sphelp") {
        		var strParam = "";
        		if (this.dsSpHelp.rowcount > 0) {
        			this.fnGenerate();
        		}
        	}
        	else if(svcID == "sphelp4cond") {
        		var strParam = "";
        		if (this.dsSpHelp4cond.rowcount > 0) {
        			this.dsBindCol.clearData();
        			for (var i=0; i<this.dsSpHelp4cond.rowcount; i++) {
        				var rw = this.dsBindCol.addRow();
        				var name = nexacro.replaceAll(this.dsSpHelp4cond.getColumn(i, "PARAMETER_NAME"), "@", "");
        				this.dsBindCol.setColumn(rw, "CD_CODE", name);
        				this.dsBindCol.setColumn(rw, "DS_CODE", name);
        			}
        		}
        	}
        	else if(svcID == "save") {
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

        /************************************************************************
         * Tab1 (Form Setting)
         ************************************************************************/
        //Grid Load & Preview
        this.btnLoad_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsFormSet.getColumn(0, "CD_SYSTEM")) || this.gfnIsNull(this.dsFormSet.getColumn(0, "ID_GRID"))) {
        		this.gfnAlert("Grid Info를 입력하세요.");
        		return;
        	}

        	this.gfnGridInit(this.dxGridPreview, this.dsListPreview, this.dsFormSet.getColumn(0, "CD_SYSTEM"), this.dsFormSet.getColumn(0, "ID_GRID"));
        };

        //Grid Id TextBox changed event
        this.txtGrid_onchanged = function(obj,e) {
        	if (this.gfnIsNull(this.dsFormSet.getColumn(0, "CD_SYSTEM")) || this.gfnIsNull(this.dsFormSet.getColumn(0, "ID_GRID"))) {
        		return;
        	}

        	this.gfnGridInit(this.dxGridPreview, this.dsListPreview, this.dsFormSet.getColumn(0, "CD_SYSTEM"), this.dsFormSet.getColumn(0, "ID_GRID"));

        	if (this.dsGridSpec.rowcount > 0) {
        		// Set grid codefind?
        	}
        };

        //Select SP TextBox changed evnet
        this.txtSelectSp_onchanged = function(obj,e) {
        	this.fnSpHelp4Cond();
        };

        // Add Stored Procedure
        this.btnAddSP_onclick = function(obj,e) {
        	var rw = this.dsAddSP.addRow();
        // 	this.dsAddSp.setColumn(rw, "TARGET", "exec");
        // 	this.dsAddSp.setColumn(rw, "DS_NAME", "dsExec");
        }

        // Remove Stored Procedure
        this.btnDelSP_onclick = function(obj,e) {
        	this.dsAddSP.deleteRow(this.dsAddSP.rowposition);
        }

        // Select I/U/D SP or Save SP
        this.rdoTY_SP_onitemchanged = function(obj,e) {
        	if (e.postvalue != e.prevalue) {
        		if (e.postvalue == "1") {
        			this.txtInsertSp.set_readonly(false);
        			this.txtUpdateSp.set_readonly(false);
        			this.txtDeleteSp.set_readonly(false);
        			this.txtSaveSp.set_readonly(true);
        		}
        		else {
        			this.txtInsertSp.set_readonly(true);
        			this.txtUpdateSp.set_readonly(true);
        			this.txtDeleteSp.set_readonly(true);
        			this.txtSaveSp.set_readonly(false);
        		}
        	}
        };

        /************************************************************************
         * Tab2 (Condition Setting)
         ************************************************************************/
        // Add Component
        this.btnAddCompnent_onclick = function(obj,e) {
        	this.dxGridProperties.updateToDataset();
        	this.dxGridBindDs.updateToDataset();

        	var div = new Div();
        	div.init("div"+idx, 10 + (idx*100), 10, 60, 25,null,null,null,null,null,null);
        	div.addEventHandler("onmouseenter", this.div_onmouseenter, this);
        	div.addEventHandler("onmouseleave", this.div_onmouseleave, this);
        	div.addEventHandler("onlbuttondown", this.div_onlbuttondown, this);
        	div.getSetter("isSelected").set(false);

        	var ctrl = null;
        	switch (obj.id) {
        		case "btnAddStatic":
        			ctrl = new Static("sta"+idx,0,0,null,null,0,0,null,null,null,null);
        			ctrl.set_taborder(idx);
        			ctrl.set_text("Title");
        			ctrl.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			div.getSetter("dgType").set("sta");
        			div.addChild(ctrl.name, ctrl);
        			ctrl.show();
        			break;

        		case "btnAddEdit":
        			ctrl = new Edit("txt"+idx,2,2,null,null,2,2,null,null,null,null);
        			ctrl.set_taborder(idx);
        			ctrl.set_enable(false);
        			ctrl.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			div.getSetter("dgType").set("txt");
        			div.addChild(ctrl.name, ctrl);
        			ctrl.show();
        			break;

        		case "btnAddCodeFind":
        			ctrl = new Div("cf"+idx,2,2,null,null,2,2,null,null,null,null);
        			ctrl.set_taborder(idx);
        			ctrl.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);

        			var ctrl1 = new Edit("txtcd",0,0,30,null,null,0,null,null,null,null);
        			ctrl1.set_taborder(idx);
        			ctrl1.set_enable(false);
        			ctrl1.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			ctrl.addChild(ctrl1.name, ctrl1);

        			var ctrl2 = new Button("btn","txtcd:2",0,20,null,null,0,null,null,null,null);
        			ctrl2.set_taborder(idx);
        			ctrl2.set_enable(false);
        			ctrl2.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			ctrl.addChild(ctrl2.name, ctrl2);

        			var ctrl3 = new Edit("txtds","btn:2",0,null,null,0,0,null,null,null,null);
        			ctrl3.set_taborder(idx);
        			ctrl3.set_enable(false);
        			ctrl3.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			ctrl.addChild(ctrl3.name, ctrl3);

        			div.getSetter("dgType").set("cf");
        			div.addChild(ctrl.name, ctrl);
        			div.set_width(110);
        			ctrl.show();
        			break;

        		case "btnAddCalendar":
        			ctrl = new Calendar("tcl"+idx,2,2,null,null,2,2,null,null,null,null);
        			ctrl.set_taborder(idx);
        			ctrl.set_enable(false);
        			ctrl.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			div.getSetter("dgType").set("tcl");
        			div.addChild(ctrl.name, ctrl);
        			ctrl.show();
        			break;

        		case "btnAddComboBox":
        			ctrl = new Combo("cbo"+idx,2,2,null,null,2,2,null,null,null,null);
        			ctrl.set_taborder(idx);
        			ctrl.set_enable(false);
        			ctrl.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			div.getSetter("dgType").set("cbo");
        			div.addChild(ctrl.name, ctrl);
        			ctrl.show();
        			break;

        		case "btnAddRadio":
        			ctrl = new Radio("rdo"+idx,2,2,null,null,2,2,null,null,null,null);
        			ctrl.set_taborder(idx);
        			ctrl.set_direction("vertical");
        			ctrl.set_fittocontents("width");
        			ctrl.set_innerdataset("dsTmpRadio");
                    ctrl.set_codecolumn("CD_CODE");
                    ctrl.set_datacolumn("DS_CODE");
        			ctrl.set_enable(false);
        			ctrl.addEventHandler("onlbuttondown", this.ctrl_onlbuttondown, this);
        			div.getSetter("dgType").set("rdo");
        			div.addChild(ctrl.name, ctrl);
        			ctrl.show();
        			break;

        	}

        	this.divCtrl.addChild(div.name, div);
        	div.show();

        	arrCtrls.push(div);

        	this.fnAddProperty(div);

        	var arrComp = this.divCtrl.form.components;
        	for (var i=0; i<arrComp.length; i++) {
        		if (arrComp[i] instanceof nexacro.Div) {
        			if (arrComp[i].isSelected) {
        				this.fnSetIsSelected(arrComp[i], false);
        			}
        		}
        	}
        	this.fnSetIsSelected(div, true);
        	this.fnCtrlOrder();
        	idx++;
        };

        // Add property when adding Component
        this.fnAddProperty = function(obj) {
        	var rw = this.dsProperties.addRow();
        	this.dsProperties.setColumn(rw, "ID", "c" + obj.dgType + obj.id.replace("div", ""));
        	this.dsProperties.setColumn(rw, "ID_COMP", obj.id);
        	this.dsProperties.setColumn(rw, "TYPE", obj.dgType);
        	this.dsProperties.setColumn(rw, "WIDTH", 100);

        	switch (obj.dgType) {
        		case "tcl":
        			this.dsProperties.setColumn(rw, "DATEFORMAT", "YYYY_MM_DD");
        			this.dsProperties.setColumn(rw, "WIDTH", 105);
        			break;
        		case "cf":
        			this.dsProperties.setColumn(rw, "CDTEXTWIDTH", "70");
        			this.dsProperties.setColumn(rw, "CODEFINDNAME", "");
        			break;
        	}
        }

        // Enter the mouse pointer in Component
        this.div_onmouseenter = function(obj,e) {
        	if (obj.isSelected)
        		obj.set_background("#DDDDDD");
        	else
        		obj.set_background("#EEEEEE");
        }

        // The mouse pointer leaves the Component
        this.div_onmouseleave = function(obj,e) {
        	if (obj.isSelected)
        		obj.set_background("#DDDDDD");
        	else
        		obj.set_background(null);
        }

        // Mouse Left Button Click
        // Compnent Toggle
        this.div_onlbuttondown = function(obj,e) {
        	this.dxGridProperties.updateToDataset();
        	this.dxGridBindDs.updateToDataset();

        	var arrComp = this.divCtrl.form.components
        	for (var i=0; i<arrComp.length; i++) {
        		if (arrComp[i] instanceof nexacro.Div) {
        			if (obj.id == arrComp[i].id) continue;;

        			if (arrComp[i].isSelected) {
        				this.fnSetIsSelected(arrComp[i], false);
        			}
        		}
        	}

        	// 선택toggle
        	this.fnSetIsSelected(obj, !obj.isSelected);
        }

        // Mouse Left Button Click
        // Passing event to parent Component(Div)
        this.ctrl_onlbuttondown = function(obj,e) {
        	return false;
        }

        // Remove selected Component
        this.btnRemove_onclick = function(obj,e) {
        	var arrComp = this.divCtrl.form.components
        	for (var i=0; i<arrComp.length; i++) {
        		if (arrComp[i] instanceof nexacro.Div) {
        			if (arrComp[i].isSelected) {
        				var comp_id = arrComp[i].id;
        				this.divCtrl.removeChild(comp_id);

        				var a = arrCtrls.splice(i, 1);

        				this.dsProperties.filter("");
        				var rw = this.dsProperties.findRowNF("ID_COMP", comp_id);
        				this.dsProperties.deleteRow(rw);
        				this.dsProperties.filter("TYPE == 'zzzz'");

        				this.fnCtrlOrder();
        				return;
        			}
        		}
        	}
        };

        // Clear Component
        this.btnClear_onclick = function(obj,e) {
        	var arrComp = this.divCtrl.form.components
        	for (var i=arrComp.length; i>=0; i--) {
        		if (arrComp[i] instanceof nexacro.Div) {
        			this.divCtrl.removeChild(arrComp[i].id);
        		}
        	}
        	arrCtrls.length = 0;
        	this.dsProperties.clearData();
        	idx = 0;
        };

        // 선택여부에 따라 Background/Border 설정
        this.fnSetIsSelected = function(obj, isSelected) {
        	obj.isSelected = isSelected;

        	if (isSelected){
        		obj.set_background("#DDDDDD");
        		obj.set_border("1px solid blue");
        	}
        	else {
        		obj.set_background(null);
        		obj.set_border(null);
        	}

        	this.fnGetProperties(obj, isSelected)
        }

        // Component 추가/삭제 시 위치 조정
        this.fnCtrlOrder = function() {
        	if (arrCtrls.length > 0) {
        		arrCtrls[0].set_left("10");
        		for (var i=1; i<arrCtrls.length; i++) {
        			arrCtrls[i].set_left(arrCtrls[i-1].id + ":10");
        		}
        	}
        }

        // Display Property of Selected Component
        this.fnGetProperties = function(obj, isSelected) {
        	if (!isSelected) {
        		this.dsProperties.filter("TYPE == 'zzzz'");
        		return;
        	}

        	this.dsProperties.filter("ID_COMP == '"+obj.id+"'");

        	this.divBindDataset.set_visible(false);

        	var arrColVisible = [];
        	switch (obj.dgType) {
        		case "sta":
        			arrColVisible.push("TEXT");
        			arrColVisible.push("UNDERLINE");
        			break;
        		case "txt":
        			arrColVisible.push("REQUIRED");
        			arrColVisible.push("BIND_COL");
        			break;
        		case "cf":
        			arrColVisible.push("REQUIRED");
        			arrColVisible.push("CDTEXTWIDTH");
        			arrColVisible.push("CODEFINDNAME");
        			arrColVisible.push("BIND_COL");
        			break;
        		case "tcl":
        			arrColVisible.push("REQUIRED");
        			arrColVisible.push("DATEFORMAT");
        			arrColVisible.push("BIND_COL");
        			break;
        		case "cbo":
        			arrColVisible.push("REQUIRED");
        			arrColVisible.push("BIND_COL");

        			this.divBindDataset.set_visible(true);
        			this.dsComboBox.filter("ID_COMP == '"+obj.id+"'");
        			break;
        		case "rdo":
        			arrColVisible.push("REQUIRED");
        			arrColVisible.push("CHECKED");
        			arrColVisible.push("BIND_COL");

        			this.divBindDataset.set_visible(true);
        			this.dsComboBox.filter("ID_COMP == '"+obj.id+"'");
        			break;
        	}

        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","TEXT"), "size", 120);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","UNDERLINE"), "size", 90);
        	//this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","REQUIRED"), "size", 90);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","REQUIRED"), "size", 0);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","CDTEXTWIDTH"), "size", 100);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","CODEFINDNAME"), "size", 150);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","DATEFORMAT"), "size", 120);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","CHECKED"), "size", 80);
        	this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body","BIND_COL"), "size", 120);

        	for (var i=0; i<this.dsProperties.colcount; i++) {
        		if (this.dsProperties.colinfos[i].name=="ID" || this.dsProperties.colinfos[i].name=="WIDTH")
        			continue;

        		if (!arrColVisible.includes(this.dsProperties.colinfos[i].name)) {
        			this.dxGridProperties.setFormatColProperty(this.dxGridProperties.getBindCellIndex("body",this.dsProperties.colinfos[i].name), "size", 0);
        		}
        	}

        }

        // Bind Dataset Remove Row
        this.btnRemoveRow_onclick = function(obj,e) {
        	this.dsComboBox.deleteRow(this.dsComboBox.rowposition);
        };

        // Bind Dataset Add Row
        this.btnAddRow_onclick = function(obj,e) {
        	var rw = this.dsComboBox.addRow();
        	if (this.dsProperties.rowcount > 0) {
        		var id = this.dsProperties.getColumn(0, "ID_COMP");
        		this.dsComboBox.setColumn(rw, "ID_COMP", id);
        	}
        	else {
        		// Error??
        	}
        };

        // Change DateFormat Property of Calendar Component
        this.objGridProperties_oncloseup = function(obj,e) {
        	var columnid = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (columnid == "DATEFORMAT") {
        		var cwidth = 105;
        		if (e.value == "YYYY_MM_DD")
        			cwidth = 105;
        		else if (e.value == "YYYY_MM")
        			cwidth = 80;
        		else if (e.value == "YYYY")
        			cwidth = 60;

        		this.dsProperties.setColumn(e.row, "WIDTH", cwidth);
        	}
        	else if (columnid == "BIND_COL") {
        		var cid = "c" + this.dsProperties.getColumn(e.row, "TYPE") + e.value;
        		this.dsProperties.setColumn(e.row, "ID", cid);
        	}
        };

        /************************************************************************
         * Tab3 (Form Button Setting)
         ************************************************************************/
        // Update Common Button Visible
        this.dsCommonBtns_onvaluechanged = function(obj,e) {
        	if (e.columnid == "VISIBLE") {
        		this.fnUpdateCommonPreview();
        	}
        };

        // Add Extension Button
        this.btnAddExtBtn_onclick = function(obj,e) {
        	var rw = this.dsExtBtns.addRow();
        	this.dsExtBtns.setColumn(rw, "TYPE", "FORM");
        };

        // Delete Extension Button
        this.btnDelExtBtn_onclick = function(obj,e) {
        	this.dsExtBtns.deleteRow(this.dsExtBtns.rowposition);
        	this.fnUpdateExtensionPreview();
        };

        // Update Extension Button
        this.dsExtBtns_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.fnUpdateExtensionPreview();
        	}
        };

        // Refresh Extension Button Privew
        this.fnUpdatePreview = function() {
        	this.fnUpdateCommonPreview();
        	this.fnUpdateExtensionPreview();
        }

        // Refresh Common Button Privew
        this.fnUpdateCommonPreview = function() {
        	var arrBtns = this.divBtns.form.divComBtn.form.components;
        	for (var i=arrBtns.length; i>=0; i--) {
        		if (arrBtns[i] instanceof nexacro.Button) {
        			this.divBtns.form.divComBtn.removeChild(arrBtns[i].id);
        		}
        	}

        	var btns = [ "btnSel", "btnAdd", "btnSav", "btnDel", "btnExl", "btnPrt", "btnCls" ];
        	var btnCss = [ "btn_find", "btn_add", "btn_save", "btn_del", "btn_excel", "btn_print", "btn_close" ];

        	var isAddVis = true;
        	var isSavVis = true;
        	var isDelVis = true;
        	var isPrtVis = true;

        	for (var i=0; i<this.dsCommonBtns.rowcount; i++) {
        		var isVisible = this.dsCommonBtns.getColumn(i, "VISIBLE") == "Y";
        		switch (this.dsCommonBtns.getColumn(i, "ID")) {
        			case "INSERT":
        				isAddVis = isVisible;
        				break;
        			case "SAVE":
        				isSavVis = isVisible;
        				break;
        			case "DELETE":
        				isDelVis = isVisible;
        				break;
        			case "PRINT":
        				isPrtVis = isVisible;
        				break;
        		}
        	}

        	for (var i=0; i<btns.length; i++) {
        		switch (i) {
        			case 1:
        				if (!isAddVis)
        					continue;;
        				break;
        			case 2:
        				if (!isSavVis)
        					continue;;
        				break;
        			case 3:
        				if (!isDelVis)
        					continue;;
        				break;
        			case 5:
        				if (!isPrtVis)
        					continue;;
        				break;
        		}
        		var btn = new Button(btns[i],10,8,27,26,null,null,null,null,null,null);
        		this.divBtns.form.divComBtn.addChild(btn.name, btn);
        		btn.set_cssclass(btnCss[i]);
        		btn.show();
        	}

        	for (var i=1; i<arrBtns.length; i++) {
        		if (i > 0) {
        			arrBtns[i].set_left(arrBtns[i-1].id + ":3");
        		}
        	}
        }

        // Refresh Extension Button Privew
        this.fnUpdateExtensionPreview = function() {
        	var arrBtns = this.divBtns.form.divExtBtn.form.components;
        	for (var i=arrBtns.length; i>=0; i--) {
        		if (arrBtns[i] instanceof nexacro.Button) {
        			this.divBtns.form.divExtBtn.removeChild(arrBtns[i].id);
        		}
        	}

        	for (var i=this.dsExtBtns.rowcount-1; i>=0; i--) {
        		var btn = new Button("btnExt_"+i,null,8,27,20,10,null,null,null,null,null);
        		btn.set_fittocontents("width");
        		btn.set_text(this.dsExtBtns.getColumn(i, "TEXT"));
        		if(this.dsExtBtns.getColumn(i, "TYPE") == "EXEC") {
        			btn.set_cssclass("btnExt2");
        		} else {
        			btn.set_cssclass("btnExt");
        		}
        		this.divBtns.form.divExtBtn.addChild(btn.name, btn);
        		btn.show();
        	}

        	for (var i=0; i<arrBtns.length; i++) {
        		if (i > 0) {
        			arrBtns[i].set_right(arrBtns[i-1].id + ":3");
        		}
        	}
        }

        /************************************************************************
         * Generate
         ************************************************************************/
        // Generate Button Click
        this.btnGenerate_onclick = function(obj,e) {
        	//validate
        	if (!this.fnValidateGenerate()) return;

        	// Get Sp Parameter
        	this.fnSpHelp();

        };

        this.fnGenerate = function() {
        	var src = this.txtTemplateSrc.value;

        	// Grid Init
        	src = src.replace("$gridinit$", "	this.gfnGridInit(this.dxGrid, this.dsList, \""+this.dsFormSet.getColumn(0, "CD_SYSTEM")+"\", \""+this.dsFormSet.getColumn(0, "ID_GRID")+"\");");

        	// Condition design
        	src = src.replace("$condition$", this.fnGetCondition());

        	// Set component variables
        	src = src.replace("$variables$", this.fnGetVariables());

        	// Add select validate
        	src = src.replace("$select_validate$", this.fnGetSelectValidate());

        	// Set _dsProc dataset
        	src = src.replace("$dsProc$", this.fnProc());

        	// Add declare parameters
        	src = src.replace("$parameters$", this.fnParametersSetting());

        	// Set dsSearch dataset
        	src = src.replace("$dsSearch$", this.fnDsSearch());

        	// Set bind component
        	src = src.replace("$binding$", this.fnGetBind());

        	// Set used dataset
        	src = src.replace("$dataset$", this.fnGetUsedDataset());

        	this.txtSrc.set_value(src);

        	// Add parameters
        	this.fnParameters();
        }

        // Validate Generation
        this.fnValidateGenerate = function() {
        	var validate = true;
        	var msg = "";
        	if (this.gfnIsNull(this.dsFormSet.getColumn(0, "CD_SYSTEM"))) {
        		msg += "System Code is Empty!\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsFormSet.getColumn(0, "ID_GRID"))) {
        		msg += "Grid ID is Empty!\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsFormSet.getColumn(0, "SELECTSP"))) {
        		msg += "SELECT SP is Empty!\n";
        		validate = false;
        	}

        	return validate;
        }

        // Condition Design
        this.fnGetCondition = function() {
        	var tag = "";
        	var left = "10";
        	var oldfilterstr = this.dsProperties.filterstr;

        	this.dsProperties.filter(null);
        	for (var i=0; i<this.dsProperties.rowcount; i++) {
        		if (i > 0) {
        			left = this.dsProperties.getColumn(i-1, "ID") + ":10";
        		}
        		switch (this.dsProperties.getColumn(i, "TYPE")) {
        			case "sta":
        				var underline = "";
        				if (this.dsProperties.getColumn(i, "UNDERLINE") == "Y") {
        					underline = "textDecoration=\"underline\"";
        				}
        				tag += "<Static id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" text=\""+this.gfnNvl(this.dsProperties.getColumn(i, "TEXT"))+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" "+underline+"/>\n";
        				break;
        			case "txt":
        				tag += "<Edit id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" />\n";
        				break;
        			case "cf":
        				tag += "<Div id=\""+this.dsProperties.getColumn(i, "ID")+"\" CodeFindName=\""+this.dsProperties.getColumn(i, "CODEFINDNAME")+"\" CDTextWidth=\""+this.dsProperties.getColumn(i, "CDTEXTWIDTH")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" url=\"cmm::cmmCodeFind.xfdl\"/>\n";
        				break;
        			case "tcl":
        				switch (this.dsProperties.getColumn(i, "DATEFORMAT")) {
        					case "YYYY_MM_DD":
        						tag += "<Calendar id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" dateformat=\"yyyy-MM-dd\" editformat=\"yyyyMMdd\" autoselect=\"true\"/>\n";
        						break;
        					case "YYYY_MM":
        						tag += "<Div id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" url=\"cmm::cmmCalMM.xfdl\"/>\n";
        						break;
        					case "YYYY":
        						tag += "<Div id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" url=\"cmm::cmmCalYY.xfdl\"/>\n";
        						break;
        				}
        				break;
        			case "cbo":
        				var colid = this.dsProperties.getColumn(i, "BIND_COL");
        				tag += "<Combo id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" width=\""+this.dsProperties.getColumn(i, "WIDTH")+"\" height=\"25\" innerdataset=\"ds"+colid+"\" codecolumn=\"CD_CODE\" datacolumn=\"DS_CODE\"/>\n";
        				break;
        			case "rdo":
        				var colid = this.dsProperties.getColumn(i, "BIND_COL");
        				tag += "<Radio id=\""+this.dsProperties.getColumn(i, "ID")+"\" taborder=\""+i+"\" left=\""+left+"\" top=\"10\" height=\"25\" direction=\"vertical\" fittocontents=\"width\" width=\"80\" innerdataset=\"ds"+colid+"\" codecolumn=\"CD_CODE\" datacolumn=\"DS_CODE\"/>\n";
        				break;
        		}
        	}
        	this.dsProperties.filter(oldfilterstr);

        	return tag;
        }

        // Get variables (component in condition)
        this.fnGetVariables = function() {
        	var variables = "";

        	var oldfilterstr = this.dsProperties.filterstr;
        	this.dsProperties.filter(null);
        	for (var i=0; i<this.dsProperties.rowcount; i++) {
        		var dgType = this.dsProperties.getColumn(i, "TYPE");
        		if (dgType == "sta") continue;

        		var comp_id = this.dsProperties.getColumn(i, "ID");

        		variables += "	this." + comp_id + " = this.divSearch.form." + comp_id + ";\n";
        	}
        	this.dsProperties.filter(oldfilterstr);

        	return variables;
        }

        // Make fnSelectValidate function
        this.fnGetSelectValidate = function() {
        	var strValidate = "";
        	var oldfilterstr = this.dsProperties.filterstr;

        	this.dsProperties.filter(null);
        	var strHeader = "";
        	var isUnderline = "N";
        	for (var i=0; i<this.dsProperties.rowcount; i++) {
        		var dgType = this.dsProperties.getColumn(i, "TYPE");
        		if (dgType == "sta") {
        			strHeader = this.dsProperties.getColumn(i, "TEXT");
        			isUnderline = this.dsProperties.getColumn(i, "UNDERLINE");
        			continue;
        		}

        		if (!isUnderline) continue;

        		var colName = this.dsProperties.getColumn(i, "BIND_COL");
        		var comp_id = this.dsProperties.getColumn(i, "ID");

        		switch (dgType) {
        			case "cf":
        				comp_id += ".form.CDTextBox";
        				break;
        			case "tcl":
        				if (this.dsProperties.getColumn(i, "DATEFORMAT") == "YYYY" || this.dsProperties.getColumn(i, "DATEFORMAT") == "YYYY_MM") {
        					comp_id += ".form.TextBox";
        				}
        				break;
        		}

        		strValidate += "	if (this.gfnIsNull(this.dsSearch.getColumn(0,\"" + colName + "\"))) {\n";
        		strValidate += "		validate = false;\n";
        		strValidate += "		this.fnVaidateCallback = function() {\n";
        		strValidate += "			this." + comp_id + ".setFocus();\n";
        		strValidate += "		}\n";
        		strValidate += "		this.gfnAlert(\"" + strHeader + "을(를) 입력하세요.\", \"fnVaidateCallback\")\n";
        		strValidate += "	}\n";
        	}

        	this.dsProperties.filter(oldfilterstr);

        	return strValidate;
        }

        // Get dsSearch dataset
        this.fnDsSearch = function() {
        	var strSearch = "";

        	this.dsSpHelp.filter("gubun=='select'");
        	if (this.dsSpHelp.rowcount > 0) {
        		var cid = "";
        		var ctype = "";
        		for (var i=0; i<this.dsSpHelp.rowcount; i++) {
        			var name = nexacro.replaceAll(this.dsSpHelp.getColumn(i, "PARAMETER_NAME"), "@", "");
        			var type = "";
        			switch (this.dsSpHelp.getColumn(i, "TYPE").toUpperCase()) {
        				case "VARCHAR":
        				case "CHAR":
        					type = "STRING";
        					break;
        				case "INT":
        					type = "INT";
        					break;
        				case "BIGINT":
        				case "NUMERIC":
        				case "DECIMAL":
        					type = "BIGDECIMAL";
        					break;
        			}

        			cid += "           <Column id=\""+name+"\" type=\""+type+"\" size=\"256\"/>\n";
        			ctype += "             <Col id=\""+name+"\"/>\n";
        		}
        		strSearch += "         <ColumnInfo>\n";
        		strSearch += cid;
        		strSearch += "         </ColumnInfo>\n";
        		strSearch += "         <Rows>\n";
        		strSearch += "           <Row>\n";
        		strSearch += ctype;
        		strSearch += "           </Row>\n";
        		strSearch += "         </Rows>\n";
        	}

        	return strSearch;
        }

        // Get _dsProc Rows
        this.fnProc = function() {
        	var proc = "";
        	var tmp = "          <Row>\n";
        	tmp += "            <Col id=\"TARGET\">$target$</Col>\n";
        	tmp += "            <Col id=\"SP\">$name$</Col>\n";
        	tmp += "          </Row>\n";

        	var arrSp = [ "SELECTSP" ];
        	if (this.dsFormSet.getColumn(0, "TY_SP") == "1") {
        		arrSp.push("INSERTSP");
        		arrSp.push("UPDATESP");
        		arrSp.push("DELETESP");
        	}
        	else {
        		arrSp.push("SAVESP");
        	}

        	for (var i=0; i<arrSp.length; i++) {
        		if (!this.gfnIsNull(this.dsFormSet.getColumn(0, arrSp[i]))) {
        			proc += tmp.replace("$target$", arrSp[i].toLowerCase().replace("sp", "")).replace("$name$", this.dsFormSet.getColumn(0, arrSp[i]));
        		}
        	}

        	for (var i=0; i<this.dsAddSP.rowcount; i++) {
        		if (!this.gfnIsNull(this.dsAddSP.getColumn(i, "TARGET")) && !this.gfnIsNull(this.dsAddSP.getColumn(i, "SP_NAME"))  && !this.gfnIsNull(this.dsAddSP.getColumn(i, "DS_NAME"))) {
        			proc += tmp.replace("$target$", this.dsAddSP.getColumn(i, "TARGET")).replace("$name$", this.dsAddSP.getColumn(i, "SP_NAME"));
        		}
        	}

        	return proc;
        }

        // declare sp parameter
        this.fnParametersSetting = function() {
        	if (this.dsSpHelp.rowcount > 0) {
        		var strParam = "";
        		var dsName = "";
        		var preSpName = "";

        		this.dsSpHelp.addColumn("target", "string");
        		this.dsSpHelp.addColumn("gubun", "string");
        		this.dsSpHelp.addColumn("dsName", "string");

        		for (var i=0; i<this.dsSpHelp.rowcount; i++) {
        			if (preSpName != this.dsSpHelp.getColumn(i, "SP_NAME")) {
        				val = this.fnGetDatasetName(this.dsSpHelp.getColumn(i, "SP_NAME"));
        				var json = JSON.parse(val);
        				dsName = json.ds_name;

        				strParam += "\n";
        				strParam += "	this."+dsName+" = new Dataset();\n";
        			}

        			this.dsSpHelp.setColumn(i, "target", json.target);
        			this.dsSpHelp.setColumn(i, "gubun", json.gubun);
        			this.dsSpHelp.setColumn(i, "dsName", json.ds_name);

        			var name = nexacro.replaceAll(this.dsSpHelp.getColumn(i, "PARAMETER_NAME"), "@", "");
        			var type = "";
        			switch (this.dsSpHelp.getColumn(i, "TYPE").toUpperCase()) {
        				case "VARCHAR":
        				case "CHAR":
        					type = "string";
        					break;
        				case "INT":
        					type = "int";
        					break;
        				case "BIGINT":
        				case "NUMERIC":
        				case "DECIMAL":
        					type = "bigdecimal";
        					break;
        			}
        			strParam += "	this."+dsName+".addColumn(\""+name+"\", \""+type+"\");\n";

        			preSpName = this.dsSpHelp.getColumn(i, "SP_NAME");
        		}

        		strParam += "\n";
        	}

        	return strParam;
        }

        // Get dataset name
        this.fnGetDatasetName = function(sp_name) {
        	var arrSp = [ "SELECTSP" ];
        	if (this.dsFormSet.getColumn(0, "TY_SP") == "1") {
        		arrSp.push("INSERTSP");
        		arrSp.push("UPDATESP");
        		arrSp.push("DELETESP");
        	}
        	else {
        		arrSp.push("SAVESP");
        	}

        	var gubun = "";
        	var target = "";
        	var ds_name = "";
        	var arrSpName = [];
        	for (var i=0; i<arrSp.length; i++) {
        		if (!this.gfnIsNull(this.dsFormSet.getColumn(0, arrSp[i]))) {
        			if (this.dsFormSet.getColumn(0, arrSp[i]) == sp_name) {
        				switch (arrSp[i]) {
        					case "SELECTSP":
        						ds_name = "dsSelect";
        						gubun = "select";
        						target = "select";
        						break;
        					case "INSERTSP":
        						ds_name = "dsInsert";
        						gubun = "insert";
        						target = "insert";
        						break;
        					case "UPDATESP":
        						ds_name = "dsUpdate";
        						gubun = "update";
        						target = "update";
        						break;
        					case "DELETESP":
        						ds_name = "dsDelete";
        						gubun = "delete";
        						target = "delete";
        						break;
        					case "SAVESP":
        						ds_name = "dsSave";
        						gubun = "save";
        						target = "save";
        						break;
        				}
        				break;
        			}
        		}
        	}

        	if (ds_name == "") {
        		for (var i=0; i<this.dsAddSP.rowcount; i++) {
        			if (this.dsAddSP.getColumn(i, "SP_NAME") == sp_name) {
        				ds_name = this.dsAddSP.getColumn(i, "DS_NAME");
        				gubun = "exec";
        				target = this.dsAddSP.getColumn(i, "TARGET");
        				break;
        			}
        		}
        	}

        	var json = {};
        	json.ds_name = ds_name;
        	json.gubun = gubun;
        	json.target = target;
        	return JSON.stringify(json);
        }

        // Set sp parameter
        this.fnParameters = function() {
        	var select_param = "";
        	var insert_param = "";
        	var update_param = "";
        	var delete_param = "";
        	var save_param = "";
        	var save_param2 = "";

        	this.dsSpHelp.filter("gubun=='select'");
        	if (this.dsSpHelp.rowcount > 0) {
        		select_param = this.fnParameterDetails("select", this.dsSpHelp.getColumn(0, "dsName"));
        	}
        	if (this.dsFormSet.getColumn(0, "TY_SP") == "1") {
        		var strParam = "";
        		this.dsSpHelp.filter("gubun=='insert'");
        		if (this.dsSpHelp.rowcount > 0) {
        			insert_param = this.fnParameterDetails("insert", this.dsSpHelp.getColumn(0, "dsName"));
        		}
        		this.dsSpHelp.filter("gubun=='update'");
        		if (this.dsSpHelp.rowcount > 0) {
        			update_param = this.fnParameterDetails("update", this.dsSpHelp.getColumn(0, "dsName"));
        		}
        		this.dsSpHelp.filter("gubun=='delete'");
        		if (this.dsSpHelp.rowcount > 0) {
        			delete_param = this.fnParameterDetails("delete", this.dsSpHelp.getColumn(0, "dsName"));
        		}

        		if (!this.gfnIsNull(insert_param) || !this.gfnIsNull(update_param) || !this.gfnIsNull(delete_param))
        		{
        			if (!this.gfnIsNull(insert_param)) {
        				save_param += "	this.dsInsert.clearData();\n";
        			}
        			if (!this.gfnIsNull(update_param)) {
        				save_param += "	this.dsUpdate.clearData();\n";
        			}
        			if (!this.gfnIsNull(delete_param)) {
        				save_param += "	this.dsDelete.clearData();\n";
        			}

        			save_param += "\n";
        			save_param += "	for (var i = 0; i < this.dsList.rowcount; i++) {\n";
        			save_param += "		var flag = this.gfnGetFlag(this.dsList, i);\n";
        			save_param += "		switch(flag) {\n";

        			if (!this.gfnIsNull(insert_param)) {
        				save_param += "			case \"I\":\n";
        				save_param += "				var nrow = this.dsInsert.addRow();\n";
        				save_param += insert_param;
        				save_param += "				break;\n";
        			}
        			if (!this.gfnIsNull(update_param)) {
        				save_param += "			case \"U\":\n";
        				save_param += "				var nrow = this.dsUpdate.addRow();\n";
        				save_param += update_param;
        				save_param += "				break;\n";
        			}
        			if (!this.gfnIsNull(delete_param)) {
        				save_param += "			case \"D\":\n";
        				save_param += "				var nrow = this.dsDelete.addRow();\n";
        				save_param += delete_param;
        				save_param += "				break;\n";
        			}

        			save_param += "		}\n";
        			save_param += "	}\n";

        			save_param += "\n";
        			save_param += "	if (";
        			var isExist = false;
        			if (!this.gfnIsNull(insert_param)) {
        				save_param += "this.dsInsert.rowcount == 0";
        				save_param2 += "insert=dsInsert";
        				isExist = true;
        			}
        			if (!this.gfnIsNull(update_param)) {
        				if (isExist) {
        					save_param += " && ";
        					save_param2 += " ";
        				}
        				save_param += "this.dsUpdate.rowcount == 0";
        				save_param2 += "update=dsUpdate";
        				isExist = true;
        			}
        			if (!this.gfnIsNull(delete_param)) {
        				if (isExist) {
        					save_param += " && ";
        					save_param2 += " ";
        				}
        				save_param += "this.dsDelete.rowcount == 0";
        				save_param2 += "delete=dsDelete";
        				isExist = true;
        			}
        			save_param += ") return;\n";
        		}
        	}
        	else {
        		this.dsSpHelp.filter("gubun=='save'");
        		if (this.dsSpHelp.rowcount > 0) {
        			save_param += "	this.dsSave.clearData();\n\n";
        			save_param += "	for (var i = 0; i < this.dsList.rowcount; i++) {\n";
        			save_param += "		var flag = this.gfnGetFlag(this.dsList, i);\n";
        			save_param += "		switch(flag) {\n";
        			save_param += "			case \"I\":\n";
        			save_param += "			case \"U\":\n";
        			save_param += "			case \"D\":\n";
        			save_param += "				var nrow = this.dsSave.addRow();\n";
        			save_param += this.fnParameterDetails("save", this.dsSpHelp.getColumn(0, "dsName"));
        			save_param += "				break;\n";
        			save_param += "		}\n";
        			save_param += "	}\n";
        			save_param += "\n";
        			save_param += "	if (this.dsSave.rowcount == 0) return;\n";

        			save_param2 += "save=dsSave";
        		}

        	}


        	var src = this.txtSrc.value;
        	src = src.replace("$select_param$", select_param);
        	src = src.replace("$save_param$", save_param);
        	this.txtSrc.set_value(src.replace("$save_param2$", save_param2));
        }

        // Set sp parameter details
        this.fnParameterDetails = function(gubun, dsName) {
        	var param = "";
        	this.dsSpHelp.filter("gubun=='"+gubun+"'");
        	if (this.dsSpHelp.rowcount > 0) {
        		for (var i=0; i<this.dsSpHelp.rowcount; i++) {
        			name = nexacro.replaceAll(this.dsSpHelp.getColumn(i, "PARAMETER_NAME"), "@", "");
        			if (gubun == "select") {
        				param += "	this."+dsName+".setColumn(0, \""+name+"\", this.dsSearch.getColumn(0, \""+name+"\"));\n";
        			}
        			else if (gubun == "insert" || gubun == "update" || gubun == "delete") {
        				param += "				this."+dsName+".setColumn(nrow, \""+name+"\", this.dsList.getColumn(i, \""+name+"\"));\n";
        			}
        			else if (gubun == "save") {
        				if (name == "TY_SAVE" || name == "TY_FLAG" || name == "TY_WRK")
        					param += "				this."+dsName+".setColumn(nrow, \""+name+"\", flag));\n";
        				else
        					param += "				this."+dsName+".setColumn(nrow, \""+name+"\", this.dsList.getColumn(i, \""+name+"\"));\n";
        			}
        // 			else if (gubun == "exec") {
        // 				param += "				this."+dsName+".setColumn(0, \""+name+"\", this.dsList.getColumn(this.dsList.rowposition, \""+name+"\"));";
        // 			}
        		}
        	}

        	return param;
        }

        // Get bind component
        this.fnGetBind = function() {
        	var tagBind = "";

        	if (this.dsProperties.rowcount > 0) {
        		var oldfilterstr = this.dsProperties.filterstr;
        		tagBind += "	<Bind>\n";

        		this.dsProperties.filter(null);
        		var itemNo = 0;
        		for (var i=0; i<this.dsProperties.rowcount; i++) {
        			var dgType = this.dsProperties.getColumn(i, "TYPE");

        			if (dgType == "sta") continue;
        			if (this.gfnIsNull(this.dsProperties.getColumn(i, "BIND_COL"))) continue;

        			var comp_id = this.dsProperties.getColumn(i, "ID");
        			var colName = this.dsProperties.getColumn(i, "BIND_COL");

        			switch (dgType) {
        				case "cf":
        					comp_id += ".form.CDTextBox";
        					break;
        				case "tcl":
        					if (this.dsProperties.getColumn(i, "DATEFORMAT") == "YYYY" || this.dsProperties.getColumn(i, "DATEFORMAT") == "YYYY_MM") {
        						comp_id += ".form.TextBox";
        					}
        					break;
        			}

        			tagBind += "		<BindItem id=\"item"+itemNo+"\" compid=\"divSearch.form."+comp_id+"\" propid=\"value\" datasetid=\"dsSearch\" columnid\""+colName+"\"/>\n";

        			itemNo++;
        		}
        		tagBind += "	</Bind>";

        		this.dsProperties.filter(oldfilterstr);
        	}

        	return tagBind;
        }

        // Get used dataset
        this.fnGetUsedDataset = function() {
        	var dsTemplate = "";
        	dsTemplate += "       <Dataset id=\"ds$dsName$\">\n";
        	dsTemplate += "         <ColumnInfo>\n";
        	dsTemplate += "           <Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/>\n";
        	dsTemplate += "           <Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/>\n";
        	dsTemplate += "         </ColumnInfo>\n";
        	dsTemplate += "         <Rows>\n";
        	dsTemplate += "$rows$";
        	dsTemplate += "        </Rows>\n";
        	dsTemplate += "       </Dataset>\n";

        	var rowTemplate = "";
        	rowTemplate += "           <Row>\n";
        	rowTemplate += "             <Col id=\"CD_CODE\">$code$</Col>\n";
        	rowTemplate += "             <Col id=\"DS_CODE\">$data$</Col>\n";
        	rowTemplate += "           </Row>\n";

        	var tagUsedDSs = "";

        	if (this.dsProperties.rowcount > 0) {
        		var oldfilterstr = this.dsProperties.filterstr;
        		var oldfilterstr2 = this.dsComboBox.filterstr;
        		this.dsProperties.filter(null);

        		var strDs = "";
        		for (var i=0; i<this.dsProperties.rowcount; i++) {
        			strDs = nexacro.replaceAll(dsTemplate, "$dsName$", this.dsProperties.getColumn(i, "BIND_COL"));
        			var strRows = "";

        			var dgType = this.dsProperties.getColumn(i, "TYPE");
        			if (dgType == "cbo" || dgType == "rdo") {
        				this.dsComboBox.filter("ID_COMP=='" + this.dsProperties.getColumn(i, "ID_COMP") + "'");
        				for (var j=0; j<this.dsComboBox.rowcount; j++) {
        					var strRow = "";
        					strRow = nexacro.replaceAll(rowTemplate, "$code$", this.gfnNvl(this.dsComboBox.getColumn(j, "CD_CODE")));
        					strRows += nexacro.replaceAll(strRow, "$data$", this.gfnNvl(this.dsComboBox.getColumn(j, "DS_CODE")));
        				}
        			}

        			strDs = nexacro.replaceAll(strDs, "$rows$", strRows);
        			tagUsedDSs += strDs;
        		}

        		this.dsComboBox.filter(oldfilterstr2);
        		this.dsProperties.filter(oldfilterstr);

        	}

        	return tagUsedDSs;
        }

        // Call sp_help, Get sp parameters
        this.fnSpHelp = function() {
        	//var arrSp = [ "SELECTSP", "INSERTSP", "UPDATESP", "DELETESP" ];
        	var arrSp = [ "SELECTSP" ];
        	if (this.dsFormSet.getColumn(0, "TY_SP") == "1") {
        		arrSp.push("INSERTSP");
        		arrSp.push("UPDATESP");
        		arrSp.push("DELETESP");
        	}
        	else {
        		arrSp.push("SAVESP");
        	}

        	var arrSpName = [];
        	this.dsSelectParam.clearData();
        	for (var i=0; i<arrSp.length; i++) {
        		if (!this.gfnIsNull(this.dsFormSet.getColumn(0, arrSp[i]))) {
        			arrSpName.push(this.dsFormSet.getColumn(0, arrSp[i]));
        		}
        	}

        	for (var i=0; i<this.dsAddSP.rowcount; i++) {
        		if (!this.gfnIsNull(this.dsAddSP.getColumn(i, "TARGET")) && !this.gfnIsNull(this.dsAddSP.getColumn(i, "SP_NAME"))  && !this.gfnIsNull(this.dsAddSP.getColumn(i, "DS_NAME"))) {
        			arrSpName.push(this.dsAddSP.getColumn(i, "SP_NAME"));
        		}
        	}

        	var rw = this.dsSelectParam.addRow();
        	this.dsSelectParam.setColumn(rw, "SP_NAME", arrSpName.join('|'));

        	if (this.dsSelectParam.rowcount == 0) return;

        	this.dsSpHelp.filter("");

        	var strSvcId    = "sphelp";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "sphelp=dsSelectParam";
        	var outData     = "dsSpHelp=sphelp0";
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

        // Call sp_help for bind condition component
        this.fnSpHelp4Cond = function() {
        	if (this.gfnIsNull(this.dsFormSet.getColumn(0, "SELECTSP"))) {
        		this.gfnAlert("Select SP is Empty.");
        		return;
        	}

        	this.dsSelectParam.clearData();
        	var rw = this.dsSelectParam.addRow();
        	this.dsSelectParam.setColumn(rw, "SP_NAME", this.dsFormSet.getColumn(0, "SELECTSP"));

        	if (this.dsSelectParam.rowcount == 0) return;

        	var strSvcId    = "sphelp4cond";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "sphelp=dsSelectParam";
        	var outData     = "dsSpHelp4cond=sphelp0";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData1.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData1.form.tabData.tab1.form.txtCdSystem.addEventHandler("onchanged",this.txtGrid_onchanged,this);
            this.divData1.form.tabData.tab1.form.txtGridId.addEventHandler("onchanged",this.txtGrid_onchanged,this);
            this.divData1.form.tabData.tab1.form.btnLoad.addEventHandler("onclick",this.btnLoad_onclick,this);
            this.divData1.form.tabData.tab1.form.txtSelectSp.addEventHandler("onchanged",this.txtSelectSp_onchanged,this);
            this.divData1.form.tabData.tab1.form.rdoTY_SP.addEventHandler("onitemchanged",this.rdoTY_SP_onitemchanged,this);
            this.divData1.form.tabData.tab1.form.btnAddSP.addEventHandler("onclick",this.btnAddSP_onclick,this);
            this.divData1.form.tabData.tab1.form.btnDelSP.addEventHandler("onclick",this.btnDelSP_onclick,this);
            this.divData1.form.tabData.tab2.form.btnAddStatic.addEventHandler("onclick",this.btnAddCompnent_onclick,this);
            this.divData1.form.tabData.tab2.form.btnAddEdit.addEventHandler("onclick",this.btnAddCompnent_onclick,this);
            this.divData1.form.tabData.tab2.form.btnAddCodeFind.addEventHandler("onclick",this.btnAddCompnent_onclick,this);
            this.divData1.form.tabData.tab2.form.btnAddCalendar.addEventHandler("onclick",this.btnAddCompnent_onclick,this);
            this.divData1.form.tabData.tab2.form.btnAddComboBox.addEventHandler("onclick",this.btnAddCompnent_onclick,this);
            this.divData1.form.tabData.tab2.form.btnAddRadio.addEventHandler("onclick",this.btnAddCompnent_onclick,this);
            this.divData1.form.tabData.tab2.form.btnRemove.addEventHandler("onclick",this.btnRemove_onclick,this);
            this.divData1.form.tabData.tab2.form.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.divData1.form.tabData.tab2.form.objGridProperties.addEventHandler("oncloseup",this.objGridProperties_oncloseup,this);
            this.divData1.form.tabData.tab2.form.divBindDataset.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.divData1.form.tabData.tab2.form.divBindDataset.form.btnRemoveRow.addEventHandler("onclick",this.btnRemoveRow_onclick,this);
            this.divData1.form.tabData.tab3.form.btnAddExtBtn.addEventHandler("onclick",this.btnAddExtBtn_onclick,this);
            this.divData1.form.tabData.tab3.form.btnDelExtBtn.addEventHandler("onclick",this.btnDelExtBtn_onclick,this);
            this.divData1.form.btnGenerate.addEventHandler("onclick",this.btnGenerate_onclick,this);
            this.dsCommonBtns.addEventHandler("onvaluechanged",this.dsCommonBtns_onvaluechanged,this);
            this.dsExtBtns.addEventHandler("onvaluechanged",this.dsExtBtns_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_DEV_BASIC3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
