const parseTranslationChildren = children => {
  if (!Array.isArray(children)) return children;

  return children.map(child => {
    if (typeof child === 'string') return child;

    return JSON.stringify(child.props.children);
  });
};

module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Trans: translation => parseTranslationChildren(translation.children),
  useTranslation: () => ({
    t: translation => translation,
  }),
};
