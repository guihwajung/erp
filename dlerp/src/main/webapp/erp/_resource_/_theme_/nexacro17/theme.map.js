(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "titlebar" :
            			{
            				"parent" :
            				{
            					"MainFrame" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#7f848d"),
            								"font" : nexacro.FontObject("bold 11px \"Tahoma\""),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#7f848d"),
            								"font" : nexacro.FontObject("bold 11px \"Tahoma\""),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							}
            						}
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("bold 14px \"Dotum\""),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #afaeae, 1px solid #d2d0d0, 1px solid #d2d0d0, 1px solid #d2d0d0")
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decN.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decN.png\")"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decD.png\")")
            							}
            						}
            					},
            					"hscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								}
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								},
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_MyMenu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incN.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incN.png\")"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incD.png\")")
            							}
            						}
            					},
            					"hscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								}
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								},
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_MyMenu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"HScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"hscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_hsclTrackbarImg.png\")")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_hsclTrackbarImg.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_hsclTrackbarImg.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									}
            								}
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_vsclTrackbarImg.png\")")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_vsclTrackbarImg.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_vsclTrackbarImg.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								},
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_MyMenu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"mouseover" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"pushed" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"focused" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"selected" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6"),
            													"icon" : nexacro.UrlObject("none")
            												},
            												"disabled" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6"),
            													"icon" : nexacro.UrlObject("none")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"contents" :
            					{
            					},
            					"disabled_contents" :
            					{
            					}
            				}
            			},
            			"hscrollbar" :
            			{
            				"parent" :
            				{
            					"Form" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 1px 0px 1px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 1px 0px 1px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 1px 0px 1px")
            							}
            						}
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Form" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_LF_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_MyMenu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("11px \"돋움\""),
            						"border" : nexacro.BorderObject("1px solid #76a0ea"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"focused" :
            					{
            						"font" : nexacro.FontObject("11px \"돋움\""),
            						"border" : nexacro.BorderObject("1px solid #76a0ea"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"color" : nexacro.ColorObject("#76a0ea")
            					},
            					"pushed" :
            					{
            						"color" : nexacro.ColorObject("#76a0ea")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_Pre" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Nxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#959ba3")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #999899, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"font" : nexacro.FontObject("12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #999899, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"font" : nexacro.FontObject("12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #999899, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"color" : nexacro.ColorObject("#999899"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #999899, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #999899, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #999899, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"font" : nexacro.FontObject("12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#999899")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_BtnS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #FFFFFF, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#3E4347")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #FFFFFF, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#3E4347")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #FFFFFF, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#3E4347")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #FFFFFF, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#3E4347")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #FFFFFF, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#3E4347")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899, 1px solid #999899, 1px solid #FFFFFF, 1px solid #999899"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#3E4347")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_X" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Pre" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_prev_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_prev_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_prev_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_prev_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_prev_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_prev_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Nxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_next_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_next_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_next_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_next_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_next_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_next_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_full_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_full_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_full_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_full_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_full_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_full_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_mid_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_mid_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_mid_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_mid_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_mid_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_mid_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_V" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_hor_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_hor_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_hor_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_hor_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_hor_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_hor_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_H" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_ver_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_ver_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_ver_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_ver_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_ver_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_ver_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Allx" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_close_n.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_close_n.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_close_n.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_close_o.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_close_o.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #DFDFDF"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/mdi_btn_close_n.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CRUD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Input" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Input.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Input_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Input_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Copy" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Save2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save2.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save2_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save2_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Print" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Print.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Print_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Print_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Excel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Excel.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Excel_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Excel_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Request" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Request.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Request_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Request_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Present" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Present.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Present_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Present_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Draft" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Draft.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Draft_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Draft_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Help.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Help_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Help_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Favorit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Favorit.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Favorit_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Favorit_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Guide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Guide.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Guide_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Guide_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Rule" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Rule.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Rule_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Rule_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Close.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Close_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Close_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleT" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_AddFile" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_DelAll" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #043a5e"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 18px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SearchSmall" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_home01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_homeN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_homeD.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_homeO.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_homeO.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_homeO.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_favourite" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteD.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteO.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteO.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_favouriteOn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteO.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteO.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteO.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_favouriteO.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_OpenP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_CloseMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/top_closemenu.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/top_closemenu.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/top_closemenu.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/top_closemenu.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/top_closemenu.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_CloseP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b1d3f4"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b1d3f4")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_MenuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#aed6fd")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_Extend" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Login2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://btn_LOGIN_Login.png\")"),
            									"iconPosition" : "left",
            									"edge" : nexacro.EdgeImageObject("none"),
            									"textPadding" : nexacro.PaddingObject("10px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://btn_LOGIN_Login.png\")"),
            									"iconPosition" : "left",
            									"edge" : nexacro.EdgeImageObject("none"),
            									"textPadding" : nexacro.PaddingObject("10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop_O.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop_O.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_N.png\") 5px 9px"),
            									"font" : nexacro.FontObject("bold 10px \"Dotum\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_N.png\") 5px 9px"),
            									"font" : nexacro.FontObject("bold 10px \"Dotum\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_O.png\") 5px 9px")
            								},
            								"selected" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_O.png\") 5px 9px")
            								},
            								"pushed" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_P.png\") 5px 9px")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_D.png\") 5px 9px"),
            									"color" : nexacro.ColorObject("#acacac")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPrev2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdNext2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPage" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#444444"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#444444"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"edge" : nexacro.EdgeImageObject("none")
            								},
            								"pushed" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221")
            								},
            								"selected" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#b1b1b1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPageS" :
            						{
            							"self" :
            							{
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#b1b1b1")
            								},
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekDropButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekPrevButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekNextButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Module" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("13px \"Dotum\""),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px 0px")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#aaaaaa"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("13px \"Dotum\""),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px 0px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#FFFFFF"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Excel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TOP_Print" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_CF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ED6C00")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #999899"),
            									"padding" : nexacro.PaddingObject("7px")
            								}
            							}
            						}
            					},
            					{
            						"btn_find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_find.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_find.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_find.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_find.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_find_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_find_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_add.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_add.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_add.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_add.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_add_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_add_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_del.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_del.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_del.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_del.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_del_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_del_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_save.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_save.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_save.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_save.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_save_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_save_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_excel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_excel.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_excel.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_excel.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_excel.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_excel_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_excel_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_print" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_print.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_print.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_print.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_print.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_print_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_print_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_close_o.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_close_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_help_o.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"icon" : nexacro.UrlObject("url(\"theme://images/control_btn_help_n.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btnExt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("11px \"돋움\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #76a0ea"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"focused" :
            								{
            									"font" : nexacro.FontObject("11px \"돋움\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #76a0ea"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#76a0ea"),
            									"border" : nexacro.BorderObject("1px solid #76a0ea"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#76a0ea"),
            									"border" : nexacro.BorderObject("1px solid #76a0ea"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#76a0ea"),
            									"border" : nexacro.BorderObject("1px solid #76a0ea"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("7px")
            								}
            							}
            						}
            					},
            					{
            						"btnExt2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #5266d9"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #5266d9"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#5469dd"),
            									"border" : nexacro.BorderObject("1px solid #5266d9"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#5469dd"),
            									"border" : nexacro.BorderObject("1px solid #5266d9"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#5469dd"),
            									"border" : nexacro.BorderObject("1px solid #5266d9"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("7px")
            								}
            							}
            						}
            					},
            					{
            						"btnExtGroup" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("11px \"돋움\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #259B9A"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"focused" :
            								{
            									"font" : nexacro.FontObject("11px \"돋움\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #259B9A"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#259B9A"),
            									"border" : nexacro.BorderObject("1px solid #259B9A"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#259B9A"),
            									"border" : nexacro.BorderObject("1px solid #259B9A"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#259B9A"),
            									"border" : nexacro.BorderObject("1px solid #259B9A"),
            									"padding" : nexacro.PaddingObject("7px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("7px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_more" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #4378FC"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#4378FC")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3A79E3"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3A79E3"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3A79E3"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3A79E3"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#cccccc")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"nulltext" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnD.png\")")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnN.png\")"),
            								"iconPosition" : "left"
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnD.png\")")
            							}
            						},
            						"class" :
            						[
            							{
            								"cmb_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop.png\")")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop_O.png\")")
            										},
            										"focused" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop_O.png\")")
            										},
            										"pushed" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop_O.png\")")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnN.png\")"),
            										"iconPosition" : "left"
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnD.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnD.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnD.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            						"iconPosition" : "left",
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            						"iconPosition" : "left",
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageM.png\")")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageM.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageSM.png\")")
            					},
            					"focused_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageSM.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageS.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageD.png\")"),
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageDS.png\")"),
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"cmb_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dfdfdf")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #eaeaea")
            								}
            							}
            						}
            					}
            				]
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						},
            						"class" :
            						[
            							{
            								"cbo_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("13px \"Dotum\"")
            										},
            										"nulltext" :
            										{
            											"color" : nexacro.ColorObject("#cbcbcb"),
            											"font" : nexacro.FontObject("13px \"Dotum\"")
            										}
            									}
            								}
            							},
            							{
            								"cmb_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            											"color" : nexacro.ColorObject("#555555")
            										},
            										"mouseover" :
            										{
            											"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            											"color" : nexacro.ColorObject("#555555")
            										},
            										"focused" :
            										{
            											"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            											"color" : nexacro.ColorObject("#555555")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#d6d6d6")
            										},
            										"nulltext" :
            										{
            											"color" : nexacro.ColorObject("#aaaaaa")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"nulltext" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#909090")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 3px 5px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 3px 5px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"padding" : nexacro.PaddingObject("5px 3px 5px 8px"),
            										"font" : nexacro.FontObject("12px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            									},
            									"focused" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 3px 5px 8px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("5px 3px 5px 8px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("5px 3px 5px 8px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						},
            						"class" :
            						[
            							{
            								"popupCombofooter_combo_familycombolist" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#ffffff")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnN.png\")"),
            								"padding" : nexacro.PaddingObject("4px 5px 6px 5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnN.png\")"),
            								"padding" : nexacro.PaddingObject("4px 5px 6px 5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"mouseover" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"focused" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"disabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"mouseover" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"focused" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"disabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"nulltext" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							},
            							"readonly" :
            							{
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_TF_Search" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_MyMenu" :
            								{
            									"self" :
            									{
            										"mouseover" :
            										{
            										},
            										"focused" :
            										{
            										},
            										"disabled" :
            										{
            										},
            										"readonly" :
            										{
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#13b6fc")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#fd6881")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"day" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#888888")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover_sunday" :
            									{
            										"color" : nexacro.ColorObject("#fd6881")
            									},
            									"mouseover_saturday" :
            									{
            										"color" : nexacro.ColorObject("#13b6fc")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 11px \"Dotum\"")
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#096eb1")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff6d55")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#bfbfbf")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899"),
            						"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"edi_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#7b8ca3"),
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"edi_LOGIN_ID" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Dotum\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#cbcbcb"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"edi_LOGIN_PW" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Dotum\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#cbcbcb"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_ID" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dfdfdf"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #eaeaea"),
            									"color" : nexacro.ColorObject("#d6d6d6")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#8c8c8c")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekEdit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #777777")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #404040")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #404040")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #404040"),
            						"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"selected" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #777777"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            										"iconPosition" : "left"
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040"),
            										"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040"),
            										"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#909090")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"nulltext" :
            									{
            										"border" : nexacro.BorderObject("1px solid #999899"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"GoogleMap" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd, 1px solid #d2cfcd"),
            						"font" : nexacro.FontObject("12px \"Dotum\"")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#dddddd")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_MyMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#999899")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#999899")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								}
            							}
            						}
            					},
            					{
            						"grd_Notice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            											},
            											"readonly" :
            											{
            												"border" : nexacro.BorderObject("1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            											},
            											"focused" :
            											{
            											}
            										}
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #d2cfcd, 1px solid #f2f2f2, 1px solid #d2cfcd, 1px solid #f2f2f2"),
            												"color" : nexacro.ColorObject("#4b5055"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"mouseover" :
            											{
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#777777")
            											},
            											"disabled_selected" :
            											{
            												"color" : nexacro.ColorObject("#777777")
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_TF_Search" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_Menu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#dddddd"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#dddddd"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("0px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#dddddd"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#5A96D0"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#FFFFFF"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_MyMenu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#999899"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#999899"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#999899"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#5A96D0"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#FFFFFF"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														}
            													}
            												}
            											},
            											{
            												"grd_main" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d2cfcd, 0px none"),
            															"color" : nexacro.ColorObject("#4b5055"),
            															"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#5a96d0")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#5a96d0")
            														}
            													}
            												}
            											},
            											{
            												"grd_Notice" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #E4E3E2"),
            															"wordWrap" : "char",
            															"color" : nexacro.ColorObject("#999999"),
            															"font" : nexacro.FontObject("bold 12px \"NanumGothic\",\"Arial\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#4378FC")
            														},
            														"selected" :
            														{
            														},
            														"focused" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"readonly" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"selfilter" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														},
            														"disabled" :
            														{
            														},
            														"readonly" :
            														{
            														},
            														"focused" :
            														{
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev0" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px solid #e2e1e1, 0px none"),
            																		"color" : nexacro.ColorObject("#dddddd"),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            																		"font" : nexacro.FontObject("12px \"Dotum\"")
            																	},
            																	"focused" :
            																	{
            																		"border" : nexacro.BorderObject("0px solid #e2e1e1, 0px none"),
            																		"color" : nexacro.ColorObject("#dddddd"),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            																		"font" : nexacro.FontObject("12px \"Dotum\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#5A96D0"),
            																		"font" : nexacro.FontObject("12px \"Dotum\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#FFFFFF"),
            																		"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            																	}
            																}
            															}
            														}
            													],
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"disabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Cell_WF_Fixed" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekWeekColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#115fac")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekGrayColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#cccccc")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekDayColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#333333")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekSunColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d40009")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekSatColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d40009")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekTodayColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("red")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"insert" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#0000ff")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"update" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"bold" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Red" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("red")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Blue" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("blue")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"BACK_SoKe_FONT_Blue" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("blue")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Green" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("green")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Gray" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("gray")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Purple" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("purple")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Pink" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("pink")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"HotPink" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ff69b4")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Yellow" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("yellow")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"BorderBottom" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Notice" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #E4E3E2")
            																	},
            																	"focused" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_Notice_isTop" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Notice" :
            															{
            																"self" :
            																{
            																	"mouseover" :
            																	{
            																	},
            																	"selected" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d2cfcd, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d2cfcd, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d2cfcd, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d2cfcd, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d2cfcd, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #8a8a8a")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #777777"),
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageM.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageSM.png\")")
            							},
            							"focused_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageSM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageS.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageD.png\")"),
            								"color" : nexacro.ColorObject("#ededed")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageDS.png\")"),
            								"color" : nexacro.ColorObject("#ededed")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							}
            						}
            					},
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"focused" :
            													{
            													},
            													"mouseover" :
            													{
            													},
            													"selected" :
            													{
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899"),
            								"padding" : nexacro.PaddingObject("3px 8px 3px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899"),
            								"padding" : nexacro.PaddingObject("3px 8px 3px 8px"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Menu" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuCollapse.png\")")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuExpand.png\")")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            										"iconPosition" : "left",
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            										"iconPosition" : "left",
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            										"iconPosition" : "left",
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            										"iconPosition" : "left",
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            										"iconPosition" : "left",
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImageN.png\")"),
            										"iconPosition" : "left",
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"GroupBox" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999899")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				},
            				"class" :
            				[
            					{
            						"footer_combo_family" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 3px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 16px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f2b443"),
            								"font" : nexacro.FontObject("bold 16px \"Dotum\"")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#f2b443"),
            								"font" : nexacro.FontObject("bold 16px \"Dotum\"")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#f2b443"),
            								"font" : nexacro.FontObject("bold 16px \"Dotum\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#949aa2"),
            								"font" : nexacro.FontObject("bold 16px \"Dotum\"")
            							}
            						}
            					}
            				}
            			},
            			"menupopupmenu" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313948")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313948")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313948")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #393838, 0px none"),
            										"padding" : nexacro.PaddingObject("8px 10ox 8px 20px"),
            										"color" : nexacro.ColorObject("#fdfeff")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #393838, 0px none"),
            										"padding" : nexacro.PaddingObject("8px 10ox 8px 20px"),
            										"color" : nexacro.ColorObject("#fdfeff")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#434f5f")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 8px 8px 8px"),
            								"color" : nexacro.ColorObject("#46463d"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 8px 8px 8px"),
            								"color" : nexacro.ColorObject("#46463d")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 30px 0px 10px")
            											},
            											"mouseover" :
            											{
            												"padding" : nexacro.PaddingObject("0px 30px 0px 10px")
            											},
            											"disabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 30px 0px 10px")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expandS.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expandS.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #888888")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #888888")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #888888")
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #888888")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #888888")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #888888")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"progressstartcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgbD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"progressendcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgbD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Radio" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_N.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_N.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_M.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_S.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_S.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_D.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_tablebg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c2cd"),
            									"padding" : nexacro.PaddingObject("5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c2cd"),
            									"padding" : nexacro.PaddingObject("5px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_TitleBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE, 1px solid #D2CFCE")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Welcome" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Navi" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px \"Dotum\""),
            									"color" : nexacro.ColorObject("#4b5055")
            								},
            								"disabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px \"Dotum\""),
            									"color" : nexacro.ColorObject("#4b5055")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_FileupdownBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c3c3c3")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Fileupload" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #d6d6d6"),
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SearchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_LF_Bg01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BT_Bg01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BT_Bg02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 0px none, 0px none, 0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 0px none, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Section" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #f4b97a")
            								},
            								"mouseover" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #f4b97a")
            								},
            								"disabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Dotum\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #f4b97a")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Legend2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#919191")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#919191")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#919191")
            								}
            							}
            						}
            					},
            					{
            						"sta_TITLE_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#4b5055"),
            									"font" : nexacro.FontObject("bold 13px \"Dotum\""),
            									"padding" : nexacro.PaddingObject("3px 0px 0px 13px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_tablelabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c2cd"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            									"color" : nexacro.ColorObject("#4b5055")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c2cd"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            									"color" : nexacro.ColorObject("#4b5055")
            								}
            							}
            						}
            					},
            					{
            						"sta_main_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#4b5055"),
            									"font" : nexacro.FontObject("bold 15px \"맑은 고딕\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            								}
            							}
            						}
            					},
            					{
            						"static_WF_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"wordWrap" : "char",
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 19px/25px \"NanumGothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"static_WF_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 11px/normal \"NanumGothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"static_WF_grade" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("3px solid #39ebff")
            								}
            							}
            						}
            					},
            					{
            						"static_WF_name" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"static_WF_content" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"wordWrap" : "char",
            									"font" : nexacro.FontObject("13px/21px \"NanumGothic\", \"Arial\""),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					},
            					{
            						"static_WF_fileicon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("12px \"NanumGothic\",\"Arial\"")
            								}
            							}
            						}
            					}
            				],
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#777777")
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"Tab" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            					}
            				},
            				"class" :
            				[
            					{
            						"tab_main" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"TabMainNotice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c3c3c3")
            								}
            							}
            						}
            					}
            				]
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none"),
            								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#5a96d0")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#5a96d0")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #ffffff,0px none"),
            								"color" : nexacro.ColorObject("#4b5055")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#aaaaaa")
            							}
            						},
            						"class" :
            						[
            							{
            								"TabMainNotice" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none"),
            											"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
            											"color" : nexacro.ColorObject("#ffffff"),
            											"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\"")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #ffffff,0px none"),
            											"color" : nexacro.ColorObject("#4378FC")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_MDI_XM.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_MDI_XM.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_MDI_XM.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_MDI_XM.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_MDI_XM.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_MDI_XM.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_main" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,0px none,0px none,0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,0px none,0px none,0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,0px none,0px none,0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,0px none,0px none,0px none")
            										}
            									}
            								}
            							},
            							{
            								"TabMainNotice" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #c3c3c3,1px solid #c3c3c3,1px solid #c3c3c3,0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899"),
            						"padding" : nexacro.PaddingObject("5px 0px 0px 5px")
            					},
            					"nulltext" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999899"),
            						"padding" : nexacro.PaddingObject("5px 0px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"Div" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"div_SEARCH_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #D2CFCD")
            								}
            							}
            						}
            					},
            					{
            						"div_SEARCH_Bgp" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #D2CFCD")
            								}
            							}
            						}
            					},
            					{
            						"div_LOGIN_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								}
            							}
            						}
            					},
            					{
            						"div_GRID_Panel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd, 1px solid #dddddd, 0px solid, 1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"div_GRID_FindPanel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #849DBD")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_wrapper" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_contentsArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdv_WF_MonthCalBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #455060")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekDatePicker" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7")
            								}
            							}
            						}
            					}
            				]
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"class" :
            								[
            									{
            										"lev1" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"self" :
            																	{
            																		"leaf" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuItem.png\")")
            																		}
            																	}
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								],
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_MyMenu" :
            																{
            																	"self" :
            																	{
            																		"leaf" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuItem.png\")")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:25, height:25 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decN.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decM.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decP.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decD.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incN.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incM.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incP.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incD.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnN.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnM.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnP.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnD.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageSM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnN.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnM.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnP.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnD.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preM.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtM.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_AddFile.png")] = { width:18, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_hscDec.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_hscInc.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_hsclTrackbarImg.png")] = { width:10, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_vscDec.png")] = { width:5, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_vscInc.png")] = { width:5, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_vsclTrackbarImg.png")] = { width:3, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schN.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_treeOpen.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_treeClose.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_MenuBar.png")] = { width:2, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImage.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_expand.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_expandS.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_BF_pgb.png")] = { width:1, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_BF_pgbD.png")] = { width:1, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_N.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_M.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_XM.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnN.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnP.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnN.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnP.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_PreN.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_PreP.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NxtN.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NxtP.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/top_btn_logout.png")] = { width:17, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Search.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo.png")] = { width:250, height:75 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo_TOBE.png")] = { width:250, height:75 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_MenuBg.png")] = { width:1, height:49 };
        		imgcache[nexacro._getImageLocation("theme://images/top_icon_user.png")] = { width:14, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeN.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeD.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_btn_close_n.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_btn_close_o.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_prev_n.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_prev_o.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_next_n.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_next_o.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_full_n.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_full_o.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_mid_n.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_mid_o.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_hor_n.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_hor_o.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_ver_n.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_ver_o.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_close_n.png")] = { width:23, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/mdi_btn_close_o.png")] = { width:23, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Input.png")] = { width:21, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Input_O.png")] = { width:21, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Copy.png")] = { width:19, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Copy_O.png")] = { width:19, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:20, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cancel.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cancel_O.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save2.png")] = { width:20, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save2_O.png")] = { width:20, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Print.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Print_O.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Excel.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Excel_O.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Request.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Request_O.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Present.png")] = { width:22, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Present_O.png")] = { width:22, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Draft.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Draft_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Help.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Help_O.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Favorit.png")] = { width:20, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Favorit_O.png")] = { width:20, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Guide.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Guide_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Rule.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Rule_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Close.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Close_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_DelAll.png")] = { width:17, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:18, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Del.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_schAreaN.png")] = { width:21, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_schAreaD.png")] = { width:21, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schM.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schP.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schD.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_homeN.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_homeD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_homeO.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_favouriteN.png")] = { width:70, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_favouriteD.png")] = { width:70, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_favouriteO.png")] = { width:70, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_schTitle.png")] = { width:2, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Open.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_OpenP.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/top_closemenu.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Close.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_CloseP.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuCollapse.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuExpand.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuItem.png")] = { width:5, height:1 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_MenuBg.png")] = { width:250, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login.png")] = { width:242, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login_O.png")] = { width:242, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login_P.png")] = { width:242, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_ID.png")] = { width:24, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_PW.png")] = { width:24, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_Logo.png")] = { width:240, height:57 };
        		imgcache[nexacro._getImageLocation("theme://btn_LOGIN_Login.png")] = { width:110, height:32 };
        		imgcache[nexacro._getImageLocation("theme://img_MF_Legend2.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://cmb_LOGIN_Drop.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_LOGIN_Drop_O.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_WF_Drop.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_WF_Drop_O.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_WF_Drop_D.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_N.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_O.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_P.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_D.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev2.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev2_O.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev2_D.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext2.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext2_O.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext2_D.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-search-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-close-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-search-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-close-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-search-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-close-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-edit-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-edit-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-edit-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-trash-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-trash-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-trash-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-save-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-save-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-save-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-excel-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-excel-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-excel-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-print-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-print-over-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-print-disable-26.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/search_btn_codefinder.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_title_dot.png")] = { width:7, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_find.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_find_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_find_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_add.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_add_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_add_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_del.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_del_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_del_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_save.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_save_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_save_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_excel.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_excel_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_excel_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_print.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_print_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_print_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_close.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_close_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_close_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_help_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_help_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/bl_title.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_main_ap.png")] = { width:80, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O_EN.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_ETC.gif")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://blank.png")] = { width:1, height:1 };
        		imgcache[nexacro._getImageLocation("theme://btn_del.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://file_btn_AddFiles.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://file_btn_DeleteAll.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://file_btn_Save.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_DOC.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_DOC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_ETC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_HWP.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_IMG.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_IMG.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_PDF.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_PDF.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_PPT.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_PPT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_TXT.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_TXT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_XLS.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_XLS.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_ZIP.gif")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_ZIP.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/bl_list.png")] = { width:6, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtD.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_XN.png")] = { width:30, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_XP.png")] = { width:30, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Noraml.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_SearchO.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/checkbox_checked.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/checkbox_unchecked.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageEN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail01.gif")] = { width:635, height:51 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail02.gif")] = { width:635, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail04.gif")] = { width:7, height:383 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail06.gif")] = { width:9, height:383 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail08.gif")] = { width:174, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail10.gif")] = { width:155, height:59 };
        		imgcache[nexacro._getImageLocation("theme://images/cmail12.gif")] = { width:619, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_down_n.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/control_btn_down_o.png")] = { width:26, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/ERP_LOGO02.png")] = { width:176, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/favicon.ico")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_treeItem.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-codefind-16.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/icons8-codefind-20.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_Logo2.jpg")] = { width:240, height:44 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_01.jpg")] = { width:1352, height:331 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_1.jpg")] = { width:1920, height:472 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_banner01.png")] = { width:1080, height:346 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_banner02.png")] = { width:1080, height:346 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_banner03.png")] = { width:1080, height:346 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MDI_Bg.png")] = { width:1, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MDI_BtnBg.png")] = { width:1, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleBg.png")] = { width:1, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleIcon.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_HSplitter.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuimage.png")] = { width:210, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Nexacro.png")] = { width:108, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_VSplitter.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_bl.png")] = { width:33, height:27 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_da.png")] = { width:34, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_db.png")] = { width:33, height:21 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dc.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_de.png")] = { width:28, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_df.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dg.png")] = { width:33, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dh.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dk.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dl.png")] = { width:33, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dm.png")] = { width:33, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_do.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dq.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dr.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_ds.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_du.png")] = { width:33, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dw.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dy.png")] = { width:34, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_dz.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_ei.png")] = { width:34, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_favorite.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/leftmenu_mm.png")] = { width:36, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/left_logo.png")] = { width:57, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/main_1.jpg")] = { width:1920, height:551 };
        		imgcache[nexacro._getImageLocation("theme://images/main_2.jpg")] = { width:1920, height:551 };
        		imgcache[nexacro._getImageLocation("theme://images/main_3.jpg")] = { width:1920, height:551 };
        		imgcache[nexacro._getImageLocation("theme://images/main_banner1.png")] = { width:1352, height:330 };
        		imgcache[nexacro._getImageLocation("theme://images/main_banner2.jpg")] = { width:1352, height:330 };
        		imgcache[nexacro._getImageLocation("theme://images/main_banner3.jpg")] = { width:283, height:268 };
        		imgcache[nexacro._getImageLocation("theme://images/main_bg.jpg")] = { width:1200, height:611 };
        		imgcache[nexacro._getImageLocation("theme://images/main_bg2.jpg")] = { width:2500, height:1250 };
        		imgcache[nexacro._getImageLocation("theme://images/main_bg3.jpg")] = { width:2500, height:1667 };
        		imgcache[nexacro._getImageLocation("theme://images/main_bg_b1_1.png")] = { width:385, height:89 };
        		imgcache[nexacro._getImageLocation("theme://images/main_bg_b1_2.png")] = { width:385, height:89 };
        		imgcache[nexacro._getImageLocation("theme://images/main_bg_b1_3.png")] = { width:385, height:89 };
        		imgcache[nexacro._getImageLocation("theme://images/main_title1.png")] = { width:750, height:450 };
        		imgcache[nexacro._getImageLocation("theme://images/main_title2.png")] = { width:750, height:450 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_EN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_ES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/search_btn_carendar.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/submenu_icon_close.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/submenu_icon_open.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://img_file.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://img_WF_SubTitle.png")] = { width:10, height:7 };
        		imgcache[nexacro._getImageLocation("theme://loading.gif")] = { width:150, height:150 };
	};
}
)();
