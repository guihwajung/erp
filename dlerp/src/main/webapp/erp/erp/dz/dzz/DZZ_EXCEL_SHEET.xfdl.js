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
            if (Form == this.constructor)
            {
                this._setFormPosition(310,90);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SHEET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SHEET\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","40",null,null,"350","330",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","16","5","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀 Sheet 선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","76","47","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","156","47","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Combo("cboExcel","110","10","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsList");
            obj.set_codecolumn("CD_SHEET");
            obj.set_datacolumn("DS_SHEET");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_EXCEL_SHEET.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//


        	if(!this.gfnIsNull(this.getOwnerFrame().EXCEL_SHEET)) {
        		var arrSheet = this.getOwnerFrame().EXCEL_SHEET;

        		this.dsList.clearData();
        		if(arrSheet.length > 0) {
        			for(var i = 0; i < arrSheet.length; i++) {
        				var nrow = this.dsList.addRow();
        				this.dsList.setColumn(nrow, "CD_SHEET", arrSheet[i]);
        				this.dsList.setColumn(nrow, "DS_SHEET", arrSheet[i]);
        			}
        			this.cboExcel.set_index(0);
        		}
        	}
        };

        this.btn00_onclick = function(obj,e)
        {
        	// 확인
        	this.getParentContext().close(this.cboExcel.value);
        };

        this.btn01_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("DZZ_EXCEL_SHEET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
