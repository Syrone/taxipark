import Choices from 'choices.js'

const choicesElements = document.querySelectorAll('.choices-js')

const config = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
	callbackOnCreateTemplates: function(template) {
    return {
			item: ({ classNames }, data) => {
        return template(`
          <div class="${classNames.item} ${
          data.highlighted
            ? classNames.highlightedState
            : classNames.itemSelectable
        } ${
          data.placeholder ? classNames.placeholder : ''
        }" data-item data-id="${data.id}" data-value="${data.value}" ${
          data.active ? 'aria-selected="true"' : ''
        } ${data.disabled ? 'aria-disabled="true"' : ''}>
						<span class="icon ${classNames.item}-map">
							<svg>
								<use xlink:href="img/icons/location.svg#svg-location"></use>
							</svg>
						</span>
						<span class="${classNames.item}-text">
							${data.label}
						</span>
						<span class="icon ${classNames.item}-icon">
							<svg>
								<use xlink:href="img/icons/dropdown.svg#svg-dropdown"></use>
							</svg>
						</span>
          </div>
        `);
      },
    };
  }
}

choicesElements?.forEach((element) => {
	const choices = new Choices(element, config);
})