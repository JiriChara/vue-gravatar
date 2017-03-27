import Vue from 'vue';
import md5 from 'md5';

import GravatarImg from '../../../src/components/GravatarImg.vue';

const getViewModel = (Component, propsData) => {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
};

describe('Gravatar Image Component', () => {
  it('has correct name', () => {
    expect(GravatarImg.name).toBe('gravatar-img');
  });

  describe('props', () => {
    it('has email property', () => {
      expect(GravatarImg.props.email.type).toBe(String);
      expect(GravatarImg.props.email.required).toBe(true);
    });

    it('has size property', () => {
      expect(GravatarImg.props.size.type).toBe(Number);
      expect(GravatarImg.props.size.default).toBe(80);
    });

    it('has defaultImg property', () => {
      expect(GravatarImg.props.defaultImg.type).toBe(String);
      expect(GravatarImg.props.defaultImg.default).toBe('retro');
    });

    it('has alt property', () => {
      expect(GravatarImg.props.alt.type).toBe(String);
      expect(GravatarImg.props.alt.default).toBe('Avatar');
    });
  });

  describe('computed', () => {
    describe('url', () => {
      let gravatar;
      let email;
      let hash;

      beforeEach(() => {
        email = 'foo@bar.com';
        gravatar = getViewModel(GravatarImg, { email });
        hash = md5(email);
      });

      it('has correct url by default', () => {
        expect(gravatar.url).toEqual(
          `https://www.gravatar.com/avatar/${hash}?s=80&d=retro`
        );
      });

      it('passes size', () => {
        const size = 100;

        const anotherGravatar = getViewModel(GravatarImg, {
          email,
          size
        });

        expect(anotherGravatar.url).toEqual(
          `https://www.gravatar.com/avatar/${hash}?s=100&d=retro`
        );
      });

      it('passes default image', () => {
        const defaultImg = 'mm';

        const anotherGravatar = getViewModel(GravatarImg, {
          email,
          defaultImg
        });

        expect(anotherGravatar.url).toEqual(
          `https://www.gravatar.com/avatar/${hash}?s=80&d=mm`
        );
      });
    });
  });

  describe('template', () => {
    let gravatar;
    let email;
    let hash;

    beforeEach(() => {
      email = 'foo@bar.com';
      gravatar = getViewModel(GravatarImg, { email });
      hash = md5(email);
    });

    it('sets src to url', () => {
      expect(gravatar.$el.src).toEqual(
          `https://www.gravatar.com/avatar/${hash}?s=80&d=retro`
      );
    });

    it('sets alt by default', () => {
      expect(gravatar.$el.alt).toEqual('Avatar');
    });

    it('sets alt to given one', () => {
      const alt = 'John';

      const anotherGravatar = getViewModel(GravatarImg, {
        email,
        alt
      });
      expect(anotherGravatar.$el.alt).toEqual(alt);
    });

    it('is image', () => {
      expect(gravatar.$el.tagName).toEqual(
        'IMG'
      );
    });
  });
});
