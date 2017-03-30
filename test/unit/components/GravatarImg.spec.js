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
    });

    it('has hash property', () => {
      expect(GravatarImg.props.hash.type).toBe(String);
    });

    it('has size property', () => {
      expect(GravatarImg.props.size.type).toBe(Number);
      expect(GravatarImg.props.size.default).toBe(80);
    });

    it('has defaultImg property', () => {
      expect(GravatarImg.props.defaultImg.type).toBe(String);
      expect(GravatarImg.props.defaultImg.default).toBe('retro');
    });

    it('has rating property', () => {
      expect(GravatarImg.props.rating.type).toBe(String);
      expect(GravatarImg.props.rating.default).toBe('g');
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
          `//www.gravatar.com/avatar/${hash}?s=80&d=retro&r=g`
        );
      });

      it('uses given md5 hash', () => {
        const md5Hash = '123';

        const anotherGravatar = getViewModel(GravatarImg, {
          hash: md5Hash
        });

        expect(anotherGravatar.url).toEqual(
          `//www.gravatar.com/avatar/${md5Hash}?s=80&d=retro&r=g`
        );
      });

      it('passes size', () => {
        const size = 100;

        const anotherGravatar = getViewModel(GravatarImg, {
          email,
          size
        });

        expect(anotherGravatar.url).toEqual(
          `//www.gravatar.com/avatar/${hash}?s=100&d=retro&r=g`
        );
      });

      it('passes default image', () => {
        const defaultImg = 'mm';

        const anotherGravatar = getViewModel(GravatarImg, {
          email,
          defaultImg
        });

        expect(anotherGravatar.url).toEqual(
          `//www.gravatar.com/avatar/${hash}?s=80&d=mm&r=g`
        );
      });

      it('passes rating', () => {
        const rating = 'pg';

        const anotherGravatar = getViewModel(GravatarImg, {
          email,
          rating
        });

        expect(anotherGravatar.url).toEqual(
          `//www.gravatar.com/avatar/${hash}?s=80&d=retro&r=pg`
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
        `http://www.gravatar.com/avatar/${hash}?s=80&d=retro&r=g`
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
