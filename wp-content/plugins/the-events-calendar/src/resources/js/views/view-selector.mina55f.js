/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.events=tribe.events||{},tribe.events.views=tribe.events.views||{},tribe.events.views.viewSelector={},function($,obj){"use strict";var $document=$(document);obj.selectors={viewSelector:'[data-js="tribe-events-view-selector"]',viewSelectorTabsClass:".tribe-events-c-view-selector--tabs",viewSelectorButton:'[data-js="tribe-events-view-selector-button"]',viewSelectorButtonActiveClass:".tribe-events-c-view-selector__button--active",viewSelectorListContainer:'[data-js="tribe-events-view-selector-list-container"]'},obj.deinitAccordion=function($header,$content){tribe.events.views.accordion.deinitAccordion(0,$header),tribe.events.views.accordion.deinitAccordionA11yAttrs($header,$content),$content.css("display","")},obj.initAccordion=function($container,$header,$content){tribe.events.views.accordion.initAccordion($container)(0,$header),tribe.events.views.accordion.initAccordionA11yAttrs($header,$content)},obj.deinitViewSelectorAccordion=function($container){var $viewSelectorButton=$container.find(obj.selectors.viewSelectorButton),$viewSelectorListContainer=$container.find(obj.selectors.viewSelectorListContainer);obj.deinitAccordion($viewSelectorButton,$viewSelectorListContainer),$viewSelectorButton.removeClass(obj.selectors.viewSelectorButtonActiveClass.className())},obj.initViewSelectorAccordion=function($container){var $viewSelectorButton=$container.find(obj.selectors.viewSelectorButton),$viewSelectorListContainer=$container.find(obj.selectors.viewSelectorListContainer);obj.initAccordion($container,$viewSelectorButton,$viewSelectorListContainer)},obj.initState=function($container){$container.find(obj.selectors.viewSelector).data("tribeEventsState",{mobileInitialized:!1,desktopInitialized:!1})},obj.deinitViewSelector=function($container){obj.deinitViewSelectorAccordion($container)},obj.initViewSelector=function($container){var $viewSelector=$container.find(obj.selectors.viewSelector);if($viewSelector.length){var state=$viewSelector.data("tribeEventsState");if($viewSelector.hasClass(obj.selectors.viewSelectorTabsClass.className())){var isMobile=$container.data("tribeEventsState").isMobile;isMobile&&!state.mobileInitialized?(obj.initViewSelectorAccordion($container),state.desktopInitialized=!1,state.mobileInitialized=!0,$viewSelector.data("tribeEventsState",state)):isMobile||state.desktopInitialized||(obj.deinitViewSelectorAccordion($container),state.mobileInitialized=!1,state.desktopInitialized=!0,$viewSelector.data("tribeEventsState",state))}else state.mobileInitialized||state.desktopInitialized||(obj.initViewSelectorAccordion($container),state.desktopInitialized=!0,state.mobileInitialized=!0,$viewSelector.data("tribeEventsState",state))}},obj.handleViewSelectorButtonClick=function(event){event.data.target.toggleClass(obj.selectors.viewSelectorButtonActiveClass.className())},obj.handleClick=function(event){if(!Boolean($(event.target).closest(obj.selectors.viewSelector).length)){var $viewSelector=event.data.container.find(obj.selectors.viewSelector),$viewSelectorButton=$viewSelector.find(obj.selectors.viewSelectorButton);if($viewSelectorButton.hasClass(obj.selectors.viewSelectorButtonActiveClass.className())){var $viewSelectorListContainer=$viewSelector.find(obj.selectors.viewSelectorListContainer);$viewSelectorButton.removeClass(obj.selectors.viewSelectorButtonActiveClass.className()),tribe.events.views.accordion.closeAccordion($viewSelectorButton,$viewSelectorListContainer)}}},obj.handleResize=function(event){obj.initViewSelector(event.data.container)},obj.unbindEvents=function($container){$document.off("click",obj.handleClick),$container.off("resize.tribeEvents",obj.handleResize).find(obj.selectors.viewSelectorButton).off("click",obj.handleViewSelectorButtonClick)},obj.bindEvents=function($container){var $viewSelectorButton=$container.find(obj.selectors.viewSelectorButton);$document.on("click",{container:$container},obj.handleClick),$container.on("resize.tribeEvents",{container:$container},obj.handleResize),$viewSelectorButton.on("click",{target:$viewSelectorButton},obj.handleViewSelectorButtonClick)},obj.deinit=function(event,jqXHR,settings){var $container=event.data.container;obj.deinitViewSelector($container),obj.unbindEvents($container),$container.off("beforeAjaxSuccess.tribeEvents",obj.deinit)},obj.init=function(event,index,$container,data){$container.find(obj.selectors.viewSelector).length&&(obj.initState($container),obj.initViewSelector($container),obj.bindEvents($container),$container.on("beforeAjaxSuccess.tribeEvents",{container:$container},obj.deinit))},obj.ready=function(){$document.on("afterSetup.tribeEvents",tribe.events.views.manager.selectors.container,obj.init)},$(obj.ready)}(jQuery,tribe.events.views.viewSelector);