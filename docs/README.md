---
title: 《TypeScript Deep Dive》：掌握TypeScript的终极指南
description: 《TypeScript Deep Dive》是一本全面且深入的TypeScript学习资源，由经验丰富的开发者Basarat编写。这本书不仅是TypeScript新手的理想入门读物，也是资深开发者深化知识的宝库。通过详尽的代码示例和精确的技术解析，Basarat带领读者一步步探索TypeScript的核心概念，包括类型系统、接口、类、泛型等。书中的内容基于真实世界的问题和常见的编程挑战，旨在提供实用的解决方案和最佳实践。此书已获得广泛好评，被读者誉为“最佳TypeScript书籍”，并因其清晰的示例和解释而受到赞赏。无论是快速启动项目，还是深入理解TypeScript的高级特性，《TypeScript Deep Dive》都是不可或缺的资源。
tags: ["前端"]
star: true
---
# 深入理解 TypeScript
本系列内容源自 [jkchao/typescript-book-chinese](https://github.com/jkchao/typescript-book-chinese)，是对 《TypeScript Deep Dive》 的中文译作，
此书是 [《TypeScript Deep Dive》](https://github.com/basarat/typescript-book/) 的中文翻译版，感谢作者 [Basarat](https://github.com/basarat) 的付出。

> ## 缘起
> 
> TypeScript 发展至今，已经成为大型项目的标配，其提供的静态类型系统，大大增强了代码的可读性以及可维护性；同时，它提供最新和不断发展的 JavaScript 特性，能让我们建立更健壮的组件。
> 
> [《TypeScript Deep Dive》](https://github.com/basarat/typescript-book/) 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老> 鸟，它都将适应你。此外，它不同于 TypeScript 官方给出的文档（当然 TypeScript 给出的文档是很好的），在此书中，结合实际应用下的场景用例，你将能更深入的理解 TypeScript。
> 
> 如今社区已经存在部分翻译，但都似乎已经停止更新。
> 
> 于是在某天的某个冲动之下，这个 RP 就诞生了。
> 
> ## 翻译内容
> 
> 《TypeScript Deep Dive》 书中包含一部分 JavaScript Future 和一些其他的内容，在这里，我们并不打算翻译它，如果你有兴趣，可以查看原书中 [JavaScript Future](https://basarat.gitbooks.io/typescript/content/docs/future-javascript.html) 的有关章节。
> 
> 由于 TypeScript 更新频繁，在此书中，我也将加入一些原书中并没有涉及到的知识点，希望和大家相互学习，一起进步。
> 
> 此外，在不违背原作者本意前提下，为了更直观的表达，部分内容将采用意译，而非直译。

## 目录

### TypeScript 项目
- [编译上下文](./project/compilationContext.md)
- [声明空间](./project/declarationspaces.md)
- [模块](./project/modules.md)
- [命名空间](./project/namespaces.md)
- [动态导入表达式](./project/dynamicImportExpressions.md)

### TypeScript 类型系统
- [概览](./typings/overview.md)
- [从 JavaScript 迁移](./typings/migrating.md)
- ['@types'](./typings/types.md)
- [环境声明](./typings/ambient.md)
- [接口](./typings/interfaces.md)
- [枚举](./typings/enums.md)
- [lib.d.ts](./typings/lib.md)
- [函数](./typings/functions.md)
- [可调用的](./typings/callable.md)
- [类型断言](./typings/typeAssertion.md)
- [Freshness](./typings/freshness.md)
- [类型保护](./typings/typeGuard.md)
- [字面量类型](./typings/literals.md)
- [readonly](./typings/readonly.md)
- [泛型](./typings/generices.md)
- [类型推断](./typings/typeInference.md)
- [类型兼容性](./typings/typeCompatibility.md)
- [Never](./typings/neverType.md)
- [辨析联合类型](./typings/discrominatedUnion.md)
- [索引签名](./typings/indexSignatures.md)
- [流动的类型](./typings/movingTypes.md)
- [异常处理](./typings/exceptionsHanding.md)
- [混合](./typings/mixins.md)
- [ThisType](./typings/thisType.md)

### JSX
- [支持 JSX](./jsx/support.md)
- [React JSX](./jsx/reactJSX.md)
- [非 React JSX](./jsx/nonReactJSX.md)

### TypeScript 错误提示
- [解读 Errors](./error/interpreting.md)
- [常见的 Error](./error/common.md)

### TIPs
- [基于字符串的枚举](./tips/stringBasedEmuns.md)
- [名义化类型](./tips/nominalTyping.md)
- [状态函数](./tips/statefulFunctions.md)
- [Bind 是有害的](./tips/bind.md)
- [柯里化](./tips/curry.md)
- [泛型的实例化类型](./tips/typeInstantiation.md)
- [对象字面量的惰性初始化](./tips/lazyObjectLiteralInitialization.md)
- [类是有用的](./tips/classAreUseful.md)
- [export default 被认为是有害的](./tips/avoidExportDefault.md)
- [减少 setter 属性的使用](./tips/limitPropertySetters.md)
- [创建数组](./tips/createArrays.md)
- [谨慎使用 --outFile](./tips/outFileCaution.md)
- [TypeScript 中的静态构造函数](./tips/staticConstructors.md)
- [单例模式](./tips/singletonPatern.md)
- [函数参数](./tips/functionParameters.md)
- [Truthy](./tips/truthy.md)
- [构建切换](./tips/buildToggles.md)
- [类型安全的 Event Emitter](./tips/typesafeEventEmitter.md)
- [Reflect Metadata](./tips/metadata.md)
- [协变与逆变](./tips/covarianceAndContravariance.md)
- [infer](./tips/infer.md)

### TypeScript 编译原理
- [概览](./compiler/overview.md)
- [程序](./compiler/program.md)
- [抽象语法树](./compiler/ast.md)
- [扫描器](./compiler/scanner.md)
- [解析器](./compiler/parser.md)
- [绑定器](./compiler/binder.md)
- [检查器](./compiler/checker.md)
- [发射器](./compiler/emitter.md)

### TypeScript FAQs
- [一些常见的「bug」并不是 bug](./faqs/common-bug-not-bugs.md)
- [一些常见的 Feature 需求](./faqs/common-feature-request.md)
- [类型系统的行为](./faqs/type-system-behavior.md)
- [函数](./faqs/function.md)
- [类](./faqs/class.md)
- [泛型](./faqs/generics.md)
- [模块](./faqs/modules.md)
- [枚举](./faqs/enums.md)
- [类型守卫](./faqs/type-guards.md)
- [JSX 和 React](./faqs/jsx-and-react.md)
- [一些不能按预期工作的代码](./faqs/thing-that-dont-work.md)
- [命令行的行为](./faqs/commandline-behavior.md)
- [tsconfig.json 的行为](./faqs/tsconfig-behavior.md)

### TypeScript 更新
- [TypeScript 3.9](./new/typescript-3.9.md)
- [TypeScript 3.8](./new/typescript-3.8.md)
- [TypeScript 3.7](./new/typescript-3.7.md)
