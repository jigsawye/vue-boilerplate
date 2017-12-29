import {
  State as mapState,
  Action as mapActions,
  Getter as mapGetters,
} from 'vuex-class';

const createDecorator = (mapFn: any) =>
  (namespace: string, property: string) => mapFn(property, { namespace });

const createNamespacedDecorator = (namespace: string, mapFn: any) =>
  (property: string) => mapFn(property, { namespace });

export const State = createDecorator(mapState);
export const Action = createDecorator(mapActions);
export const Getter = createDecorator(mapGetters);

export const createNamespcaedHelper = (namespace: string) => ({
  State: createNamespacedDecorator(namespace, mapState),
  Action: createNamespacedDecorator(namespace, mapActions),
  Getter: createNamespacedDecorator(namespace, mapGetters),
});
