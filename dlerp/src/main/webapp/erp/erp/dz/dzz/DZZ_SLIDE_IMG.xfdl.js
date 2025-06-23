(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("slideimage");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsImageList", this);
            obj._setContents("<ColumnInfo><Column id=\"img\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"img\">imagerc::main/banner1.jpg</Col></Row><Row><Col id=\"img\">imagerc::main/banner2.jpg</Col></Row><Row><Col id=\"img\">imagerc::main/banner3.jpg</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBanner","18","0",null,null,"18","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid #808080");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","0","44.65%",null,null,"divBanner:-1","44.65%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("◀");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","divBanner:-1","44.65%",null,null,"0","44.65%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("▶");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,430,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_SLIDE_IMG.xfdl", function() {
        this.slideimage_onload = function(obj,e)
        {
        	//슬라이드 이미지 초기화 함수 호출
        	this.gfnInitSlideImage(this.divBanner, this.dsImageList);
        };

        this.btnPrev_onclick = function(obj,e)
        {
        	//슬라이드 이미지 갯수
        	var nCount = this.divBanner.form.components.length;

        	//표시될 슬라이드 이미지의 Index가 이미지 갯수보다 작을경우
        	if(this.divBanner.stepIdx>0)
        	{
        		//다음 이미지 Index로 이동
        		this.gfnSetSlideImage(this.divBanner, this.divBanner.stepIdx-1);
        	}else
        	{
        		//마지막 이미지 Index로 이동
        		this.gfnSetSlideImage(this.divBanner, nCount-1);
        	}
        };

        this.btnNext_onclick = function(obj,e)
        {
        	//슬라이드 이미지 갯수
        	var nCount = this.divBanner.form.components.length;

        	//표시될 슬라이드 이미지의 Index가 이미지 갯수보다 작을경우
        	if(this.divBanner.stepIdx+1<nCount)
        	{
        		//다음 이미지 Index로 이동
        		this.gfnSetSlideImage(this.divBanner, this.divBanner.stepIdx+1);
        	}else
        	{
        		//처음 이미지 Index로 이동
        		this.gfnSetSlideImage(this.divBanner, 0);
        	}
        };

        //슬라이드 이미지 초기화 함수
        this.gfnInitSlideImage = function(objDiv, objDs)
        {
        	var objAni;

        	//Div의 Scrollbar를 안보이게 설정
        	objDiv.set_formscrollbartype("none");

        	//기존에 생성된 슬라이드 이미지 삭제 함수 호출
        	this.gfnClearSlideImage(objDiv);

        	//슬라이드 이미지 생성 함수 호출
        	this.gfnCreateSlideImage(objDiv, objDs);

        	//슬라이드 애니메이션 생성 함수 호출
        	objAni = this.gfnCreateSlideImageAni(objDiv);

        	//슬라이드 인덱스 초기화
        	objDiv.stepIdx = 0;

        	//애니메이션 객체를 Div의 사용자 프로퍼티로 등록
        	objDiv.targetAni = objAni;

        	//리셋스크롤 실행
        	objDiv.form.resetScroll();
        }

        //기존에 생성된 슬라이드 이미지 삭제 함수
        this.gfnClearSlideImage = function(objDiv)
        {
        	var i;
        	var objComponents = objDiv.form.components;
        	var nCount = objComponents.length;
        	var objImgViewer;

        	//Div에 포함된 모든 컴포넌트 삭제
        	for(i=nCount-1;i>=0;i--)
        	{
        		objDiv.form.removeChild(objComponents[i].name);
        	}

        	objDiv.form.resetScroll();
        }

        //슬라이드 이미지 생성 함수
        this.gfnCreateSlideImage = function(objDiv, objDs)
        {
        	var i;
        	var nCount = objDs.rowcount;
        	var nLeft = 0;
        	var nTop = 0;
        	var nWidth = objDiv.getOffsetWidth();
        	var nHeight = objDiv.getOffsetHeight();

        	var objImgViewer;
        	var sImg;

        	for(i=0;i<nCount;i++)
        	{
        		//데이터셋에서 background 컬럼 데이터 가져오기
        		sImg = objDs.getColumn(i, "img");

        		//이미지를 표현할 ImageViewer 컴포넌트 생성
        		objImgViewer = new ImageViewer("imgView"+i, nLeft, nTop, nWidth, nHeight, null, null);
        		objDiv.form.addChild(objImgViewer.name, objImgViewer);
        		objImgViewer.show();

        		//background 프로퍼티 설정(이미지설정)
        		objImgViewer.set_image(sImg);

        		//이미지를 리사이즈하여 컴포넌트에 맞게 Fit
        		//사용할 이미지에 따라 다르게 변경 필요
        		objImgViewer.set_stretch("fit");

        		//다음에 생성될 ImageViewer 컴포넌트의 Left 위치값
        		nLeft = objImgViewer.getOffsetLeft() + objImgViewer.getOffsetWidth();
        	}
        }

        //슬라이드 애니메이션 생성 함수
        this.gfnCreateSlideImageAni = function(objDiv)
        {
        	var objAni;

        	//기존에 생성된 애니메이션이 있을 경우
        	if(this.isValidObject(objDiv.name+"_ani")==true)
        	{
        		objAni = this.all[objDiv.name+"_ani"];
        	}
        	//기존에 생성된 애니메이션이 없을 경우
        	else
        	{
        		//애니메이션 생성
        		objAni = new nexacro.Animation(objDiv.name+"_ani", this);
        		this.addChild( objAni.name, objAni );

        		//애니메이션 동작시간 설정
        		objAni.set_duration( 500 );

        		//애니메이션 Easing 설정
        		objAni.set_easing( "easeOutCubic" );

        		//애니메이션이 동작될 컴포넌트와 프로퍼티 설정
        		objAni.addTarget( "AniItem00", objDiv, "aniIdx:100" );

        		//이벤트에서 동작중인 컴포넌트를 찾을수 있도록 사용자 프로퍼티로 설정
        		objAni.targetComp = objDiv;

        		//onrun 이벤트 추가
        		objAni.addEventHandler("onrun", this.gfnSlideImage_onrun, this);
        	}

        	//애니메이션 동작 프로퍼티 초기화
        	objDiv.aniIdx = 0;

        	//애니메이션 리턴
        	return objAni;
        }

        //애니메이션 동작시 발생하는 이벤트
        this.gfnSlideImage_onrun = function(obj,e)
        {
        	//애니메이션 동작 처리 함수 호출
        	this.gfnRunSlideImage(obj.targetComp);
        }

        //애니메이션 동작 처리 함수
        this.gfnRunSlideImage = function(objDiv)
        {
        	//현재 스크롤 위치 + (이동할 스크롤 위치 * (애니메이션 동작 진행율));
        	var nHPos = objDiv.startScrollPos + (objDiv.changeScrollPos * (objDiv.aniIdx/100));

        	//스크롤 위치 이동
        	objDiv.form.scrollTo(nHPos, 0);
        }

        //이미지 슬라이드 실행 함수
        this.gfnSetSlideImage = function(objDiv, nIdx)
        {
        	//슬라이드되어 표시될 ImageViewer 컴포넌트
        	var objImgViewer = objDiv.form.components["imgView"+nIdx];

        	//현재 스크롤 위치
        	var nStartScrollPos = objDiv.form.getHScrollPos();

        	//표시될 ImageViewer 컴포넌트의 Left 위치
        	var nChangeScrollPos = nexacro.toNumber(objImgViewer.getOffsetLeft());

        	//현재 스크롤 위치
        	objDiv.startScrollPos = nStartScrollPos;

        	//이동할 스크롤 위치 = ImageViewer 컴포넌트의 Left위치 - 현재 스크롤 위치
        	objDiv.changeScrollPos = nChangeScrollPos - nStartScrollPos;

        	//애니메이션 동작 프로퍼티 초기화
        	objDiv.aniIdx = 0;

        	//표시될 ImageViewer 컴포넌트의 Index 값
        	objDiv.stepIdx = nIdx;

        	//애니메이션 실행
        	objDiv.targetAni.play();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.slideimage_onload,this);
            this.btnPrev.addEventHandler("onclick",this.btnPrev_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
        };
        this.loadIncludeScript("DZZ_SLIDE_IMG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
