from Jinja import Template
template = Template ('Hello {{ name }} ! ')
template.render (name = 'World')
